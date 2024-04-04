# Utiliser une image de base avec Node.js
FROM node:lts-alpine3.19

# Créer un répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires dans le conteneur
COPY package*.json .

# Copier le code source de l'application dans le conteneur
COPY . .

# Installer les dépendances
RUN npm install

# # Construire l'application
# RUN npm run build

# Exposer le port sur lequel l'application s'exécute
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]