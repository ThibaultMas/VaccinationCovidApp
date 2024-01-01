# VaccinationCovidApp

Projet de développement d'application en utilisant Spring Boot et Angular dans le cadre du cours de développement FullStack de 5A IA2R à Polytech Nancy

## Informations sur l'utilisation de l'application

Le fichier application.yaml de l'api Spring indique que la base de données Postgresql doit se nommer **covid-db** avec comme nom d'utilisateur et mot de passe **postgres** (le fichier peut aussi être modifié si l'on souhaite configurer différement sa bd).

Pour tester l'application, lancer l'API spring du dossier **covid-api** puis ouvrir un terminal au dossier **vaccination-app** et lancer Angular avec la commande *ng serve*. 
Il suffit ensuite d'ouvrir une page web à l'adresse **http://localhost:4200**.

Dans le contexte du test de l'application, plusieurs utilisateurs par défaut sont créés au démarage de l'API : 

|Type d'utilisateur|Login|Mot de passe|
|--------|--------|--------|
|    superadmin    |    default.superadmin@app.fr    | defaultsuperadmin |
|    admin    |    default.admin@app.fr    | defaultadmin |
|    doctor    |    default.doctor@app.fr    | defaultdoctor |


