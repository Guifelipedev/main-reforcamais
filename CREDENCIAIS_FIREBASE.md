# 🔑 Como Obter as Credenciais do Firebase - Passo 4 Detalhado

## 📍 Onde Encontrar as Credenciais

Após criar seu projeto no Firebase Console, siga estes passos:

### 1. Acesse as Configurações
- No Firebase Console, clique no **ícone de engrenagem** ⚙️ no canto superior esquerdo
- Selecione **"Configurações do projeto"**

### 2. Encontre a Seção "Seus apps"
- Role a página para baixo até encontrar a seção **"Seus apps"**
- Se ainda não tiver um app web, clique em **"Adicionar app"** e escolha o ícone **`</>`** (Web)

### 3. Registre o App (se necessário)
- Digite um nome para seu app (ex: "Minha Plataforma EduPlatform")
- **NÃO** marque "Configurar Firebase Hosting" por enquanto
- Clique em **"Registrar app"**

### 4. Copie as Credenciais
Após registrar, você verá um código similar a este:

```javascript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1234567890abcdefghijklmnopqrstuvwx",
  authDomain: "meu-projeto-12345.firebaseapp.com",
  projectId: "meu-projeto-12345",
  storageBucket: "meu-projeto-12345.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890123456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

## 🎯 O Que Você Precisa Copiar

Dentro do objeto `firebaseConfig`, você precisa dos seguintes valores:

| Campo | Exemplo | Descrição |
|-------|---------|----------|
| `apiKey` | `"AIzaSyC1234567890abcdefghijklmnopqrstuvwx"` | Chave da API |
| `authDomain` | `"meu-projeto-12345.firebaseapp.com"` | Domínio de autenticação |
| `projectId` | `"meu-projeto-12345"` | ID do projeto |
| `storageBucket` | `"meu-projeto-12345.appspot.com"` | Bucket de armazenamento |
| `messagingSenderId` | `"123456789012"` | ID do remetente de mensagens |
| `appId` | `"1:123456789012:web:abcdef1234567890123456"` | ID do aplicativo |

## 📝 Como Substituir no Seu Projeto

1. Abra o arquivo `src/services/firebase.js`
2. Substitua os valores placeholder:

**ANTES:**
```javascript
const firebaseConfig = {
  apiKey: "sua-api-key-aqui",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto-id",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

**DEPOIS (com suas credenciais reais):**
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC1234567890abcdefghijklmnopqrstuvwx",
  authDomain: "meu-projeto-12345.firebaseapp.com",
  projectId: "meu-projeto-12345",
  storageBucket: "meu-projeto-12345.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890123456"
};
```

## ⚠️ Importante

- **Copie EXATAMENTE** como aparece no Firebase Console
- **Mantenha as aspas** em volta dos valores
- **NÃO remova** as vírgulas no final de cada linha
- Salve o arquivo após fazer as alterações

## 🔄 Se Você Já Tem um App Registrado

Se você já registrou um app anteriormente:
1. Vá em "Configurações do projeto"
2. Role até "Seus apps"
3. Clique no app existente
4. As credenciais aparecerão na seção "Configuração do SDK"

## ✅ Como Saber se Funcionou

Após salvar o arquivo com as credenciais corretas:
1. Recarregue a página da aplicação
2. O alerta de configuração deve desaparecer
3. Você conseguirá fazer login/cadastro sem erros

---

**💡 Dica:** Se ainda tiver dúvidas, tire um print da tela do Firebase Console e compare com este guia!