# Utiliser une image de base avec Node.js
FROM node:lts-alpine3.19

# Créer un répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires dans le conteneur
COPY . .

# Installer les dépendances
RUN npm install

# # Construire l'application
# RUN npm run build

# Exposer le port sur lequel l'application s'exécute
EXPOSE 5173

# Commande pour démarrer l'application
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

