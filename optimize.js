// Script de otimização para produção
const fs = require('fs');
const path = require('path');

// Função para minificar CSS (básica)
function minifyCSS(css) {
    return css
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comentários
        .replace(/\s+/g, ' ') // Remove espaços extras
        .replace(/;\s*}/g, '}') // Remove ponto e vírgula antes de }
        .replace(/\s*{\s*/g, '{') // Remove espaços ao redor de {
        .replace(/;\s*/g, ';') // Remove espaços após ;
        .replace(/,\s*/g, ',') // Remove espaços após ,
        .trim();
}

// Função para minificar JavaScript (básica)
function minifyJS(js) {
    return js
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comentários de bloco
        .replace(/\/\/.*$/gm, '') // Remove comentários de linha
        .replace(/\s+/g, ' ') // Remove espaços extras
        .replace(/;\s*}/g, '}') // Remove ponto e vírgula antes de }
        .replace(/\s*{\s*/g, '{') // Remove espaços ao redor de {
        .trim();
}

// Função para otimizar HTML
function minifyHTML(html) {
    return html
        .replace(/<!--[\s\S]*?-->/g, '') // Remove comentários HTML
        .replace(/\s+/g, ' ') // Remove espaços extras
        .replace(/> </g, '><') // Remove espaços entre tags
        .trim();
}

// Função principal de otimização
function optimize() {
    console.log('🚀 Iniciando otimização para produção...');
    
    // Criar diretório de build se não existir
    const buildDir = path.join(__dirname, 'build');
    if (!fs.existsSync(buildDir)) {
        fs.mkdirSync(buildDir, { recursive: true });
    }
    
    try {
        // Otimizar CSS
        console.log('📝 Otimizando CSS...');
        const cssPath = path.join(__dirname, 'css', 'styles.css');
        if (fs.existsSync(cssPath)) {
            const css = fs.readFileSync(cssPath, 'utf8');
            const minifiedCSS = minifyCSS(css);
            
            // Criar diretório CSS no build
            const buildCSSDir = path.join(buildDir, 'css');
            if (!fs.existsSync(buildCSSDir)) {
                fs.mkdirSync(buildCSSDir, { recursive: true });
            }
            
            fs.writeFileSync(path.join(buildCSSDir, 'styles.min.css'), minifiedCSS);
            console.log(`✅ CSS otimizado: ${css.length} → ${minifiedCSS.length} bytes`);
        }
        
        // Otimizar JavaScript
        console.log('📝 Otimizando JavaScript...');
        const jsDir = path.join(__dirname, 'js');
        const buildJSDir = path.join(buildDir, 'js');
        
        if (!fs.existsSync(buildJSDir)) {
            fs.mkdirSync(buildJSDir, { recursive: true });
        }
        
        const jsFiles = fs.readdirSync(jsDir).filter(file => file.endsWith('.js'));
        
        jsFiles.forEach(file => {
            const jsPath = path.join(jsDir, file);
            const js = fs.readFileSync(jsPath, 'utf8');
            const minifiedJS = minifyJS(js);
            
            const minFileName = file.replace('.js', '.min.js');
            fs.writeFileSync(path.join(buildJSDir, minFileName), minifiedJS);
            console.log(`✅ ${file} otimizado: ${js.length} → ${minifiedJS.length} bytes`);
        });
        
        // Copiar e otimizar HTML
        console.log('📝 Otimizando HTML...');
        const htmlFiles = ['index.html', 'login.html', 'register.html', 'profile.html', 'courses.html', 'activities.html'];
        
        htmlFiles.forEach(file => {
            const htmlPath = path.join(__dirname, file);
            if (fs.existsSync(htmlPath)) {
                let html = fs.readFileSync(htmlPath, 'utf8');
                
                // Atualizar referências para arquivos minificados
                html = html.replace(/\.css"/g, '.min.css"');
                html = html.replace(/\.js"/g, '.min.js"');
                
                const minifiedHTML = minifyHTML(html);
                fs.writeFileSync(path.join(buildDir, file), minifiedHTML);
                console.log(`✅ ${file} otimizado`);
            }
        });
        
        // Copiar arquivos de configuração
        console.log('📝 Copiando arquivos de configuração...');
        const configFiles = ['firebase.json', 'firestore.rules', 'storage.rules', 'firestore.indexes.json'];
        
        configFiles.forEach(file => {
            const srcPath = path.join(__dirname, file);
            if (fs.existsSync(srcPath)) {
                fs.copyFileSync(srcPath, path.join(buildDir, file));
                console.log(`✅ ${file} copiado`);
            }
        });
        
        console.log('🎉 Otimização concluída! Arquivos salvos em ./build/');
        console.log('📦 Para fazer deploy: cd build && firebase deploy');
        
    } catch (error) {
        console.error('❌ Erro durante a otimização:', error.message);
        process.exit(1);
    }
}

// Executar se chamado diretamente
if (require.main === module) {
    optimize();
}

module.exports = { optimize, minifyCSS, minifyJS, minifyHTML };