# Nuxt TRPC Boilerplate 

## What's all about

Boilerplate for NuxtJs with TRPC. Authentication and middlewares are referenced from [Nuxt3 Auth Example](https://github.com/damien-hl/nuxt3-auth-example). All of the technologies used in this repository are the followings.

- [Bun](https://bun.sh/)
- [Vue3](https://vuejs.org/)
- [Vue-i18n](https://kazupon.github.io/vue-i18n/)
- [Nuxt3](https://nuxt.com/)
- [TRPC](https://trpc.io/)
- [Prisma](https://www.prisma.io/)
- [VueX](https://vuex.vuejs.org/)
- [Tailwinds](https://tailwindcss.com/)

## Folder Structures 
============================

    .
    ├── composables             # Vue Composables 
    ├── middleware              # Middleare supposed to handle routing mechanism
    ├── pages                   # Page Level Components 
    │   ├── admin               # Admin Routes 
    │   ├── app                 # Authenticated based Routes 
    │   ├── login.vue           # Login Page 
    │   ├── register.vue        # Register Page 
    ├── plugins                 # Compiled files (alternatively `dist`)
    ├── prisma                  # Documentation files (alternatively `doc`)
    ├── public                  # Store static assets 
    ├── server                  # Server related stuff
    ├── src                     # Src and utilities
    │   ├── locale              # Locale folder 
    ├── store                   # Vuex store 
    └── README.md



## Setup

Make sure to install the dependencies:

```bash

# migrate prisma db
npx prisma migrate dev

node prisma/seed.js
```

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
