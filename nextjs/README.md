## Construire l'image Docker

Vous pouvez construire l'image Docker en utilisant la commande suivante :
```bash
docker build -t <nom-image> .
```

## Exécution de l'image Docker

Vous pouvez exécuter le conteneur depuis la racine de l'application en utilisant la commande suivante :

```bash
docker run -d -p 3000:3000 -v ./:/app --name <nom-container> <nom-image>
```

Cette commande lance le conteneur Docker en mode détaché (`-d`), expose le port 3000 de votre conteneur vers le port 3000 de votre machine hôte (`-p 3000:3000`), et monte le répertoire courant (`./`) dans le conteneur à l'emplacement `/app` (`-v ./:/app`). Assurez-vous d'exécuter cette commande depuis le répertoire du projet.

## Interraction avec l'application

Vous pouvez accéder au container en utilisant la commande suivante :
```bash
docker exec -it <nom-container> /bin/sh
```

### Remarque :
- Assurez-vous que Docker est installé et fonctionne correctement sur votre machine.
- L'application devrait être disponible à l'adresse `http://<adresse-serveur>:3000` une fois que le conteneur est en cours d'exécution.
