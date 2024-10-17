# Étape 1 : Build
FROM node:18-alpine AS builder
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm ci

# Copier le reste du code source
COPY . .

# Construire l'application Next.js
RUN npm run build

# Étape 2 : Production
FROM node:18-alpine AS production
WORKDIR /app

# Installer uniquement les dépendances de production
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copier le build de l'application
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Exposer le port de l'application
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "start"]
