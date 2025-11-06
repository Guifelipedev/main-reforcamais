# 🚀 Guia de Deploy - Reforça+

## Pré-requisitos

1. **Conta Google/Firebase**: Certifique-se de ter uma conta Google
2. **Projeto Firebase**: Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
3. **Node.js**: Versão 18+ recomendada (atual: 16.15.0 - pode causar problemas)

## Opção 1: Deploy via Firebase Hosting (Recomendado)

### Passo 1: Configurar Firebase

1. **Instalar Firebase CLI** (se não instalado):
```bash
npm install -g firebase-tools
```

2. **Fazer login no Firebase**:
```bash
firebase login
```

3. **Inicializar projeto** (se necessário):
```bash
firebase init
```
- Selecione: Firestore, Storage, Hosting
- Escolha seu projeto Firebase
- Use as configurações padrão

### Passo 2: Configurar Credenciais

1. **Edite o arquivo `js/config.js`**:
```javascript
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto-id",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "sua-app-id"
};
```

2. **Obtenha as credenciais**:
   - Vá para Firebase Console > Configurações do projeto
   - Na seção "Seus aplicativos", clique em "Configuração"
   - Copie as credenciais

### Passo 3: Deploy

1. **Otimizar para produção**:
```bash
npm run build
```

2. **Fazer deploy**:
```bash
firebase deploy
```

3. **Deploy apenas hosting** (se necessário):
```bash
firebase deploy --only hosting
```

## Opção 2: Deploy via Netlify

### Passo 1: Preparar arquivos

1. **Otimizar para produção**:
```bash
npm run build
```

2. **Configurar credenciais Firebase** em `js/config.js`

### Passo 2: Deploy no Netlify

1. **Via Drag & Drop**:
   - Acesse [netlify.com](https://netlify.com)
   - Arraste a pasta do projeto para a área de deploy

2. **Via Git**:
   - Conecte seu repositório GitHub
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `build`

## Opção 3: Deploy via Vercel

1. **Instalar Vercel CLI**:
```bash
npm install -g vercel
```

2. **Fazer deploy**:
```bash
vercel
```

3. **Seguir instruções interativas**

## Configuração Pós-Deploy

### 1. Configurar Domínios Autorizados

1. **Firebase Console** > Authentication > Settings
2. **Authorized domains**: Adicione seu domínio de produção

### 2. Configurar CORS (se necessário)

1. **Firebase Console** > Storage > Rules
2. **Verificar regras de CORS** para uploads

### 3. Migrar Dados Demo

1. **Abra sua aplicação em produção**
2. **Abra o console do navegador** (F12)
3. **Execute**: `migrateAllData()`
4. **Aguarde** a migração dos dados de exemplo

## Comandos Úteis

```bash
# Desenvolvimento local
npm start

# Build para produção
npm run build

# Deploy completo
npm run deploy:firebase

# Deploy apenas regras
npm run deploy:rules

# Deploy apenas hosting
npm run deploy:hosting

# Verificar status do Firebase
firebase projects:list

# Ver logs do Firebase
firebase functions:log
```

## Solução de Problemas

### Erro: "Firebase CLI incompatible with Node.js"
**Solução**: Atualize Node.js para versão 18+ ou use Firebase CLI v12:
```bash
npm install -g firebase-tools@12.9.1
```

### Erro: "Execution of scripts is disabled"
**Solução**: Configure política de execução do PowerShell:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Erro: "Permission denied"
**Solução**: Verifique regras de segurança do Firestore e Storage

### Erro: "Module not found"
**Solução**: Instale dependências:
```bash
npm install
```

## URLs Importantes

- **Firebase Console**: https://console.firebase.google.com/
- **Netlify**: https://netlify.com
- **Vercel**: https://vercel.com
- **Documentação Firebase**: https://firebase.google.com/docs

## Status do Projeto

✅ **Configuração Firebase**: Completa  
✅ **Autenticação**: Implementada  
✅ **Banco de Dados**: Firestore configurado  
✅ **Storage**: Configurado para uploads  
✅ **Regras de Segurança**: Implementadas  
✅ **Otimização**: Scripts de build prontos  
🚀 **Deploy**: Pronto para produção  

---

**Nota**: Certifique-se de configurar as credenciais Firebase antes do deploy!