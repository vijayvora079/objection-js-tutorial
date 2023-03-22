# Objection.js Tutorial with Mysql and Express

1. Express
2. Knex
3. Objection.js
4. Mysql
# How to setup application

# install Mysql2
Install mysql2 to avoid connection error
```
npm install mysql2 --save 
```

## Database setup
change your database configuration in 
```
knexfiile.js.
```
currently this code is compatable with mysql database

## Running the application

```
npm run dev
```

# Additional to verify the migration and seeding

- `npm run migrate`: executes all migrations in `./db/migrations`
- `npm run seed`: Insert all data into the table from `./db/seed`
- `npm run down`: undo last migration. Since we only have one migration at the moment this is equivalent to deleting all tables
