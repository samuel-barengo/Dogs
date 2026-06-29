# 🐶 Dogs

Rede social feita para cachorros — like Instagram, mas focada em pets. Os usuários podem criar conta, publicar fotos dos seus cães, seguir outros perfis, comentar nas publicações e acompanhar estatísticas do próprio perfil.

🔗 **Deploy:** [dogs-omega-one.vercel.app](https://dogs-omega-one.vercel.app)

## ✨ Funcionalidades

- 🔐 Autenticação de usuário (login/cadastro)
- 📰 Feed de publicações
- 🖼️ Criação de posts com imagens
- 💬 Comentários em publicações
- 👤 Perfil de usuário (próprio e de outros membros)
- 📊 Página de estatísticas com gráficos sobre os posts do usuário

## 🛠️ Tecnologias

- **React** — construção da interface e componentização
- **Vite** — ambiente de desenvolvimento e build
- **Context API + Custom Hooks** — gerenciamento de estado global e lógica reutilizável (autenticação, dados de posts/usuário, etc.)
- **CSS** — estilização
- **ESLint** — padronização e qualidade do código
- **Vercel** — deploy e hospedagem

## 🚀 Rodando localmente

Clone o repositório:

```bash
git clone https://github.com/samuel-barengo/Dogs.git
cd Dogs
```

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` (porta padrão do Vite).

## 📁 Estrutura do projeto

```
Dogs/
├── public/          # arquivos estáticos
├── src/             # código-fonte da aplicação (componentes, hooks, contextos, páginas)
├── index.html
├── vite.config.js
├── vercel.json
└── package.json
```

## 📚 Sobre o projeto

Este projeto foi desenvolvido a partir do desafio prático do curso **React Completo** da [Origamid](https://www.origamid.com/), com API e design fornecidos pelo curso. A implementação da lógica de estado, hooks customizados e organização do código foi feita por mim, aplicando os conceitos estudados de Context API, hooks e consumo de API REST.

## 👤 Autor

**Samuel Barengo**
- GitHub: [@samuel-barengo](https://github.com/samuel-barengo)
- LinkedIn: [linkedin.com/in/samuel-barengo](https://linkedin.com/in/samuel-barengo)
