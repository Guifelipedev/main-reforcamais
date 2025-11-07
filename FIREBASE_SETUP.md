# 🔥 Configuração do Firebase

## ⚠️ IMPORTANTE: Configuração Obrigatória

Para que a autenticação funcione, você **DEVE** configurar suas credenciais reais do Firebase.

## 📋 Passo a Passo

### 1. Acesse o Firebase Console
- Vá para: https://console.firebase.google.com/
- Faça login com sua conta Google

### 2. Crie ou Selecione um Projeto
- Clique em "Adicionar projeto" (ou selecione um existente)
- Siga o assistente de criação

### 3. Ative a Autenticação
- No painel lateral, clique em "Authentication"
- Vá para a aba "Sign-in method"
- Ative os provedores desejados:
  - ✅ **Email/Password** (obrigatório)
  - ✅ **Google** (opcional)

### 4. Obtenha as Credenciais
- Vá em "Configurações do Projeto" (ícone de engrenagem)
- Role até "Seus apps"
- Clique em "Adicionar app" > "Web" (ícone `</>`)
- Registre o app com um nome
- **Copie as credenciais** que aparecem

### 5. Configure no Projeto
Abra o arquivo `src/services/firebase.js` e substitua:

```javascript
const firebaseConfig = {
  apiKey: "SUA_API_KEY_AQUI",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto-id",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

### 6. Configure o Firestore (Opcional)
Se quiser usar o banco de dados:
- No Firebase Console, vá em "Firestore Database"
- Clique em "Criar banco de dados"
- Escolha "Iniciar no modo de teste"

## 🚀 Testando

Após configurar:
1. Salve o arquivo `firebase.js`
2. Recarregue a aplicação
3. Tente fazer login ou criar uma conta
4. ✅ Deve funcionar sem erros!

## 🔒 Segurança

**NUNCA** commite suas credenciais reais no Git!

Para produção, use variáveis de ambiente:

```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // ...
};
```

## 📞 Suporte

Se tiver problemas:
1. Verifique o console do navegador
2. Confirme se todas as credenciais estão corretas
3. Verifique se a autenticação está ativada no Firebase