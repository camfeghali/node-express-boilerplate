# README

This is a boilerplate NodeJS - Express - Sequelize application packaged with a PostgreSQL database that run inside two separate Docker containers, configured for local development.

**Prerequesites:**

- Docker

**Getting started**

- **Clone the Repository**

  `git@github.com:camfeghali/node-express-sequelize-boilerplate.git`

- **Run the containers**

  `docker-compose -f docker-compose.dev.yml up --build`

**Stopping the services**

`docker-compose -f docker-compose.dev.yml down`

**Debugging**

Open Google Chrome, and enter 'about:inspect' in the url -> Click on **Open dedicated DevTools for Node** -> In DevTools, navigate to the 'Sources' page, click on Node.js -> file -> app, find your file and place a breakpoint where needed.
