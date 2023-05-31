# Citybikes Backend

The City Bike Backend System is a backend application designed to support a city bike rental service. It provides the necessary functionalities to manage stations, journeys, and other related data. The frontend for this lives here: https://github.com/tuomaskemp/bikes-frontend

## Technologies

- Node
- Express
- TypeScript
- Prisma ORM
- Jest (for testing)
- Zod (for validation)
- Docker
- PostgreSQL

## Installation

1. Clone the repository: `git clone https://github.com/tuomaskemp/bikes-backend.git`
2. Navigate to the project directory: `cd <project-directory>`
3. Create .env file. Here is example:

```
DATABASE_URL=postgresql://dev:passwd@postgres:5432/postgresDatabase?schema=public&connect_timeout=300&pool_timeout=90&connection_limit=40
```

4. Run app using Docker
   `docker compose -f docker-compose.dev.yml up -d`
5. Run migrations `docker exec <container name> npx prisma migrate dev`

## Configuration

Before running the project, make sure you have set up the following configuration:

1. Configure the PostgreSQL database connection in the `.env` file.

## Prisma

To work with Prisma, use the following commands:

- `docker exec <container name> npx prisma migrate dev`: Create and apply database migrations.
- `docker exec <container name> npx prisma migrate reset`: Reset the database.

## Seeding Data from CSV Files

Make sure to have the CSV files available in the appropriate location before running these commands.

1. Download the datasets
2. Create a folder called `data-import/` to project root and add csv files into it
   - Filenames should be:
     - 2021-05.csv (a csv file containing journeys)
     - 2021-06.csv (a csv file containing journeys)
     - 2021-07.csv (a csv file containing journeys)
     - stations.csv (a csv file containing stations)

To seed data from CSV files into the database, use the following commands:

- `docker exec <container name> npm run db:seedStations`: Load station data from CSV files into the database.
- `docker exec <container name> npm run db:seedJourneys`: Load journey data from CSV files into the database.

## Testing

Execute tests by running `npm test`. You don't need to run the backend for this.
