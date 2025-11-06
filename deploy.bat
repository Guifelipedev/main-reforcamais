@echo off
echo ========================================
echo    DEPLOY REFORCA+ - FIREBASE HOSTING
echo ========================================
echo.

echo [1/5] Verificando Firebase CLI...
firebase --version
if %errorlevel% neq 0 (
    echo Erro: Firebase CLI nao encontrado!
    echo Instale com: npm install -g firebase-tools
    pause
    exit /b 1
)

echo [2/5] Otimizando arquivos para producao...
node optimize.js
if %errorlevel% neq 0 (
    echo Erro na otimizacao!
    pause
    exit /b 1
)

echo [3/5] Verificando configuracao do Firebase...
if not exist firebase.json (
    echo Erro: firebase.json nao encontrado!
    echo Execute: firebase init
    pause
    exit /b 1
)

echo [4/5] Fazendo deploy...
firebase deploy --only hosting
if %errorlevel% neq 0 (
    echo Erro no deploy!
    echo Verifique se voce esta logado: firebase login
    pause
    exit /b 1
)

echo [5/5] Deploy concluido com sucesso!
echo.
echo ========================================
echo   DEPLOY FINALIZADO!
echo ========================================
echo.
echo Sua aplicacao esta disponivel em:
echo https://SEU-PROJETO.web.app
echo.
echo Nao esqueca de:
echo 1. Configurar credenciais em js/config.js
echo 2. Adicionar dominio aos dominios autorizados
echo 3. Executar migrateAllData() no console
echo.
pause