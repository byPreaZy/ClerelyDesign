# Documentation API

## Endpoints

### Authentication

#### POST /api/auth/login
```json
{
  "email": "string",
  "password": "string"
}
```
Response:
```json
{
  "token": "string",
  "user": {
    "id": "string",
    "email": "string",
    "name": "string"
  }
}
```

#### POST /api/auth/logout
Response: 204 No Content

### User

#### GET /api/user/profile
Response:
```json
{
  "id": "string",
  "email": "string",
  "name": "string",
  "preferences": {
    "theme": "light|dark",
    "language": "fr|en"
  }
}
```

#### PUT /api/user/profile
```json
{
  "name": "string",
  "preferences": {
    "theme": "light|dark",
    "language": "fr|en"
  }
}
```

## Erreurs

### Codes d'erreur

- 400: Requête invalide
- 401: Non authentifié
- 403: Non autorisé
- 404: Ressource non trouvée
- 500: Erreur serveur

### Format d'erreur
```json
{
  "error": {
    "code": "string",
    "message": "string",
    "details": {}
  }
}
```

## Sécurité

- Authentification via JWT
- Tokens d'accès et de rafraîchissement
- Rate limiting
- CORS configuré

## Rate Limiting

- 100 requêtes par minute par IP
- 1000 requêtes par heure par utilisateur

## Versioning

- Version actuelle: v1
- Format: /api/v1/... 