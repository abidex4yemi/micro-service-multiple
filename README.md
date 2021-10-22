# Micro-service

## Installation

- Clone the repo by clicking the green clone or download button to copy the url on github
- In your terminal, run `git clone [insert URL copied from first step]`
- Open the repository with your code editor
- `cd` into the root directory `micro-service-multiple`
- Add environment variable in `ecosystem.config.js`
- This section can be skipped as I already include the `MONGO_URI` and `DEV_ENV_DB_NAME` in the application for easy testing.
*Note: I exposed the db URI for testing sake and will removed after on completetion of the assessment*
- insert mongo db env `MONGO_URI`
- insert database name `DEV_ENV_DB_NAME`, here's a test db name `factorialHr`

## Running development mode with pm2

- Run `npm install`

- Run `npm run install-all-dependencies`

- Run `npm run dev`

- Visit - `localhost:3005` to view app

## Running development mode with docker-compose

## Technologies

- ExpressJS
- React
- docker
- nginx
- Material-ui
