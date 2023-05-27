# Citybikes Backend

### Development

Create .env file

```
DATABASE_URL=postgresql://dev:passwd@localhost:6500/postgresDatabase?schema=public
```

```
docker compose -f docker-compose.dev.yml up
```

```
npx prisma migrate dev --name init
```
