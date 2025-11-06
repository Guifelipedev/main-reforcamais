# Reforça+ - Plataforma de Estudos

## Sobre o Projeto

Reforça+ é uma plataforma educacional completa para estudos e reforço escolar. O sistema permite que alunos acessem cursos, acompanhem seu progresso, gerenciem atividades e interajam com professores.

## Funcionalidades

- **Autenticação de Usuários**: Login/logout com Firebase Auth
- **Gestão de Perfis**: Perfis de estudantes e professores
- **Cursos e Aulas**: Criação e gestão de conteúdo educacional
- **Atividades**: Sistema de tarefas e exercícios
- **Progresso**: Acompanhamento do progresso dos alunos
- **Upload de Arquivos**: Sistema de upload com Firebase Storage
- **Responsivo**: Interface adaptável para diferentes dispositivos

## Tecnologias Utilizadas

- HTML5, CSS3, JavaScript (ES6+)
- Firebase Authentication
- Cloud Firestore
- Firebase Storage
- Firebase Hosting

## Estrutura do Projeto

```
├── index.html              # Página principal
├── login.html              # Página de login
├── register.html           # Página de registro
├── profile.html            # Página de perfil
├── courses.html            # Página de cursos
├── activities.html         # Página de atividades
├── css/
│   └── style.css          # Estilos principais
├── js/
│   ├── config.js          # Configuração do Firebase
│   ├── auth.js            # Autenticação
│   ├── database.js        # Operações do Firestore
│   ├── storage.js         # Operações do Storage
│   ├── data-migration.js  # Migração de dados demo
│   └── app.js             # Lógica principal
├── firestore.rules        # Regras de segurança do Firestore
├── storage.rules          # Regras de segurança do Storage
└── firebase.json          # Configuração do Firebase
```

## Configuração do Firebase

Para configurar o Firebase no projeto:

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
2. Registre sua aplicação web no projeto Firebase
3. Copie as credenciais fornecidas pelo Firebase
4. Substitua as credenciais no arquivo `js/config.js`:

```javascript
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "seu-messaging-sender-id",
  appId: "seu-app-id"
};
```

## Instalação e Execução

### Desenvolvimento Local

1. Clone o repositório ou baixe os arquivos
2. Configure o Firebase conforme instruções acima
3. Abra o arquivo `index.html` em um servidor web local

### Hospedagem

Você pode hospedar este projeto em:

1. **Firebase Hosting**:
   - Instale o Firebase CLI: `npm install -g firebase-tools`
   - Faça login: `firebase login`
   - Inicialize o projeto: `firebase init`
   - Selecione Hosting e seu projeto Firebase
   - Implante: `firebase deploy`

2. **GitHub Pages**:
   - Crie um repositório no GitHub
   - Faça upload dos arquivos do projeto
   - Configure o GitHub Pages nas configurações do repositório

## Funcionalidades

- **Autenticação**: Login com email/senha, Google, Facebook e Apple
- **Dashboard**: Visão geral de cursos e atividades
- **Cursos**: Listagem, detalhes e acompanhamento de progresso
- **Atividades**: Gerenciamento de tarefas e prazos
- **Calendário**: Visualização de eventos e compromissos
- **Mensagens**: Sistema de comunicação entre alunos e professores
- **Configurações**: Personalização de perfil e preferências

## Personalização

O tema da aplicação pode ser personalizado através das variáveis CSS no arquivo `css/styles.css`. As cores principais são definidas nas variáveis de root.

## Suporte

Para dúvidas ou problemas, entre em contato através do email: suporte@reforcamais.com.br

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.