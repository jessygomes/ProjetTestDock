## Exécution de l'image Docker

Vous pouvez exécuter le conteneur en utilisant la commande suivante :

```bash
docker run -d -p 5173:5173 -v ./:/app --name <nom> viteserv.latest
```

Cette commande lance le conteneur Docker en mode détaché (`-d`), expose le port 3000 de votre conteneur vers le port 3000 de votre machine hôte (`-p 5173:5173`), et monte le répertoire courant (`./`) dans le conteneur à l'emplacement `/app` (`-v ./:/app`). Assurez-vous d'exécuter cette commande depuis le répertoire du projet.

### Remarque :
- Assurez-vous que Docker est installé et fonctionne correctement sur votre machine.
- L'application React devrait être disponible à l'adresse `http://<adresse-serveur>:5173` une fois que le conteneur est en cours d'exécution.
