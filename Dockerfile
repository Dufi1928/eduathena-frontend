# Étape 1 : Build
FROM node:18-alpine AS builder
WORKDIR /app

# Installer pnpm
RUN npm install -g pnpm

# Copier les fichiers de dépendances
COPY package.json pnpm-lock.yaml ./

# Installer les dépendances
RUN pnpm install --frozen-lockfile

# Copier le reste du code source
COPY . .

# Construire l'application Next.js
RUN pnpm run build

# Étape 2 : Production
FROM node:18-alpine AS production
WORKDIR /app

# Installer pnpm
RUN npm install -g pnpm

# Copier uniquement les fichiers nécessaires
COPY package.json pnpm-lock.yaml ./

# Installer les dépendances de production
RUN pnpm install --prod --frozen-lockfile

# Copier le build de l'application
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Exposer le port de l'application
EXPOSE 3000

# Définir la variable d'environnement
ENV NODE_ENV=production

# Démarrer l'application
CMD ["pnpm", "start"]
