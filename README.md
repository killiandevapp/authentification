
[![CI](https://github.com/killiandevapp/authentification/actions/workflows/ci.yml/badge.svg)](https://github.com/killiandevapp/authentification/actions/workflows/ci.yml)
# Auth MVP – Application web

Ce dépôt contient un MVP centré uniquement sur la gestion de l’authentification d’une application web.

L’objectif de ce projet est de poser une base saine et réaliste :
- un backend Node.js qui gère l’authentification et la sécurité de session
- un frontend React qui consomme l’API et protège les routes
- une logique volontairement simple, proche de ce qu’on trouve en production

## Fonctionnalités

- Inscription utilisateur (email / mot de passe)
- Connexion sécurisée
- Access token JWT (durée courte)
- Refresh token stocké en cookie httpOnly
- Refresh de session
- Déconnexion
- Protection brute-force (rate limit + verrouillage temporaire)
- Protection CSRF pour les requêtes sensibles
- Journalisation des tentatives de connexion
- CI git
- Test back + front


## Lancer le projet

---------front-end---------
bash =>
cd frontend
npm install
npm run dev

---------back-end---------
bash =>
cd backend
npm install
npm run dev

## Structure du projet

Le projet est séparé en deux parties :

- **backend/** : API Node.js / Express (authentification)
- **frontend/** : application React (login, routes protégées)

Chaque partie possède son propre README avec les détails techniques.

## État actuel du projet

Pour l’instant, seule la partie authentification est implémentée :
- inscription
- connexion
- refresh de session
- déconnexion
- protections de base (brute-force, CSRF)

Le reste de l’application sera construit à partir de cette base.



