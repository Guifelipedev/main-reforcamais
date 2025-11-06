# 🔥 Configuração do Firebase para Reforça+

## 📋 Pré-requisitos
1. Conta Google
2. Acesso ao [Console Firebase](https://console.firebase.google.com/)

## 🚀 Passo a Passo

### 1. Criar Projeto Firebase
1. Acesse https://console.firebase.google.com/
2. Clique em "Adicionar projeto"
3. Nome do projeto: `reforca-plus` (ou nome de sua escolha)
4. Desabilite Google Analytics (opcional)
5. Clique em "Criar projeto"

### 2. Configurar Firestore Database
1. No menu lateral, clique em "Firestore Database"
2. Clique em "Criar banco de dados"
3. Escolha "Iniciar no modo de teste" (por enquanto)
4. Selecione uma localização (ex: southamerica-east1)
5. Clique em "Concluído"

### 3. Configurar Authentication
1. No menu lateral, clique em "Authentication"
2. Vá para a aba "Sign-in method"
3. Habilite "Email/senha"
4. Clique em "Salvar"

### 4. Obter Configurações do Projeto
1. Clique no ícone de engrenagem ⚙️ > "Configurações do projeto"
2. Role para baixo até "Seus apps"
3. Clique no ícone da web `</>`
4. Nome do app: `Reforça+`
5. **NÃO** marque "Configurar Firebase Hosting"
6. Clique em "Registrar app"
7. **COPIE** o objeto `firebaseConfig`

### 5. Atualizar Configurações no Código
1. Abra o arquivo `index.html`
2. Localize a seção `firebaseConfig` (linha ~169)
3. Substitua os valores placeholder pelas suas configurações:

```javascript
const firebaseConfig = {
  apiKey: "sua-api-key-real",
  authDomain: "seu-projeto-real.firebaseapp.com",
  projectId: "seu-projeto-id-real",
  storageBucket: "seu-projeto-real.appspot.com",
  messagingSenderId: "seu-sender-id-real",
  appId: "seu-app-id-real"
};
```

### 6. Estrutura do Banco de Dados
O Firestore será estruturado com as seguintes coleções:

```
📁 users/
  📄 {userId}
    - name: string
    - email: string
    - userType: string
    - createdAt: timestamp
    - lastLogin: timestamp

📁 courses/
  📄 {courseId}
    - title: string
    - description: string
    - instructor: string
    - duration: string
    - level: string
    - category: string
    - createdAt: timestamp

📁 enrollments/
  📄 {enrollmentId}
    - userId: string
    - courseId: string
    - progress: number
    - enrolledAt: timestamp
    - completedAt: timestamp (opcional)

📁 assignments/
  📄 {assignmentId}
    - title: string
    - description: string
    - dueDate: timestamp
    - courseId: string
    - createdBy: string
    - createdAt: timestamp
```

### 7. Regras de Segurança (Firestore Rules)
Após configurar, atualize as regras em "Firestore Database" > "Regras":

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Usuários podem ler/escrever apenas seus próprios dados
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Cursos são públicos para leitura, apenas admins podem escrever
    match /courses/{courseId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.userType == 'admin';
    }
    
    // Matrículas são privadas do usuário
    match /enrollments/{enrollmentId} {
      allow read, write: if request.auth != null && 
        resource.data.userId == request.auth.uid;
    }
    
    // Tarefas são visíveis para usuários matriculados
    match /assignments/{assignmentId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.userType in ['admin', 'professor'];
    }
  }
}
```

## 🔧 Próximos Passos
1. ✅ Configurar projeto Firebase
2. ⏳ Implementar autenticação Firebase
3. ⏳ Migrar dados locais para Firestore
4. ⏳ Atualizar JavaScript para usar Firebase SDK
5. ⏳ Configurar hospedagem

## 🆘 Problemas Comuns
- **Erro de CORS**: Certifique-se de que o domínio está autorizado no Firebase
- **Regras muito restritivas**: Comece com modo de teste e ajuste gradualmente
- **Configuração incorreta**: Verifique se copiou todas as chaves corretamente

## 📞 Suporte
Se encontrar problemas, verifique:
1. Console do navegador (F12)
2. Console Firebase para logs
3. Documentação oficial: https://firebase.google.com/docs