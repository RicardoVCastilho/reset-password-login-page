# Página de Recuperação de Senha

Este projeto consiste em uma página independente para a recuperação de senha, usada em conjunto com a API principal do sistema. A página é acessada através de um link enviado ao e-mail do usuário, contendo um token para autenticação e validação da solicitação.

## Funcionalidades

- **Recuperação de senha com token**: Permite ao usuário redefinir sua senha com base em um token único enviado por e-mail.
- **Validação de token**: A página valida o token antes de permitir a redefinição da senha.

## Tecnologias Utilizadas

- **HTML5**: Estruturação da página.
- **CSS3**: Estilização, incluindo layout responsivo.
- **JavaScript**: Validação de token, integração com a API e lógica de redefinição de senha.
- **Fetch API**: Comunicação com a API para envio da nova senha.

## Estrutura do Projeto
```plaintext
/css 
├── reset-password.css
└── reset.css 
/images 
└── allimages.images 
/js 
├── resetPassword.js 
└── togglePassword.js
 index.html
```

## **O conteúdo de cada pasta**
1. /css:
- **reset-password.css**: Arquivo CSS para estilização da tela de redefinição de senha.
- **reset.css**: Arquivo CSS com estilos gerais para a página.

2. /images:
- **allimages.images**: Pasta com todas as imagens utilizadas no projeto.

3. /js:
- **resetPassword.js**: Script responsável por gerenciar a funcionalidade de redefinição de senha.
- **togglePassword.js**: Script para alternar a visibilidade da senha no campo de entrada.

4. index.html:
- O arquivo principal HTML que carrega os estilos e scripts do projeto.

## **Autor**
Projeto desenvolvido por [Ricardo Vitor Castilho](https://github.com/RicardoVCastilho)