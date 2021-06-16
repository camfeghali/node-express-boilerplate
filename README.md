**# README**

This is a boilerplate NodeJS - Express - Sequelize application packaged with a PostgreSQL database that run inside two separate Docker containers, configured for local development.

## **Prerequesites:**

\- Docker

## **Getting started**

- **Clone the Repository**

  `git@github.com:camfeghali/node-express-sequelize-boilerplate.git`

- **Run the containers**

  `docker-compose -f docker-compose.dev.yml up --build`

## **Stopping the services**

If compose was run in detached mode, run the following to stop the services

```
docker-compose -f docker-compose.dev.yml down
```

## **Running tests**

**To run tests**

```
npm run test
```

**To build an image but making sure that tests pass first**

The image will not be built if tests fail.

```
docker build -t <your-image-name> --target test .
```

## Debugging

Open Google Chrome, and enter 'about:inspect' in the url -> Click on **\*\*Open dedicated DevTools for Node\*\*** -> In DevTools, navigate to the 'Sources' page, click on Node.js -> file -> app, find your file and place a breakpoint where needed.
