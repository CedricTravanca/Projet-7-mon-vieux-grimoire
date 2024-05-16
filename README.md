# Mon vieux Grimoire

## Lancer le projet  

### Avec npm

Faites la commande `npm start` depuis le terminal du dossier "frontend" pour lancer la partie frontend du projet.

Faites la commande `nodemon server` depuis le terminal du dossier "backend" pour lancer le server du projet.


## .env

Afin de sécuriser les accès, un fichier **.env** a été créer dans lequel deux variables sont présentes.


## Configuration

Avant de pouvoir utiliser l'application, vous devez configurer certaines variables d'environnement. Voici celles qui sont nécessaires :

- `MONGOOSE_CONNECT`: Cette variable est nécessaire pour connecter votre application à la base de données MongoDB. Elle doit être définie avec la chaîne de connexion appropriée.

MONGOOSE_CONNECT=<votre_chaine_de_connexion_mongodb>
  
- `TOKEN`: Cette variable est utilisée pour l'authentification et la sécurité de l'application. Elle doit être définie avec un token valide.

TOKEN=<votre_token_sécurisé>


Remplacez `<votre_chaine_de_connexion_mongodb>` et `<votre_token_sécurisé>` par vos propres valeurs.

