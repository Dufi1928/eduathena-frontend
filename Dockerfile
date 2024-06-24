# Étape de construction
FROM node:current-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Étape de production
FROM node:current-alpine
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

# Utiliser PM2 pour gérer l'application Next.js en production
RUN npm install pm2 -g
CMD ["pm2-runtime", "start", "npm", "--", "start"]
