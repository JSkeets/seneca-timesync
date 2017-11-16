# Seneca Timesync Excercies

## Intro
One of the problems we face when deploying microservices on different machines is that they have different notions of time. We need a way to synchronise timestamps for messages that are passed between services.

## Task
Your task is to build three microservices using `Seneca` toolkit (https://www.npmjs.com/package/seneca) that use `timesync` module (https://www.npmjs.com/package/timesync) to keep their time synchronised in a peer-to-peer architecture. Feel free to use any other npm modules you think you might need and make liberal use of Google and Stack Overflow.

## Timeline
Use only 4-6 hours to get as far as you can. Completion is not the goal. Spend 0.5-1 hour setting up the environment, 1-2 hours getting familiar with Seneca and timesync (possibly using the Node.js console), and 2-3 hours coding. Send your code to us within a week.

## Resources
You can learn about Seneca from http://senecajs.org/ as well as some examples on the project's npm page: https://www.npmjs.com/package/seneca

You can learn about timesync from the project's npm page https://www.npmjs.com/package/seneca and also see some implementation examples on github https://github.com/enmasseio/timesync/tree/master/examples


## Files
There are 3 javascript files `service1.js`, `service2.js`, and `service3.js` that need to be coded. At the end, each should demonstrate that their time is in sync using a peer-to-peer architecture.

Whether you choose the Node.js or Docker installation route, these files are run using `nodemon` which automatically restarts all files when one is changed. This should hopefully help with quick feedback as you code.

If at any time you want to test some javascript, you can run the Node.js console as outlined below.

## Installation
There are two routes to take. Docker or Node.js. They both use the same files but one route might be easier than another for you to setup (for example you have one or the other already installed)

### Docker Instructions
- Install Docker
- Build the base image:
    - `docker-compose --project-name seneca-timesync-exercise build base`
- Run each service in a seperate tab:
    - run `docker-compose up service1`
    - run `docker-compose up service2` 
    - run `docker-compose up service3`
- To start a Node.js console
    -   run `docker-compose run --rm console`
- Installing a new dependencies:
    -   Run `docker-compose run --rm bash npm install {dependency} --save` 
    -   Rebuild the image:  `docker-compose --project-name seneca-timesync-exercise build base`

### Node.js Instructions
- Install Node
- Install dependencies
    - run `npm install`
- Run each service in a seperate tab:
    - run `npm run service1`
    - run `npm run service2`
    - run `npm run service3` 
- To start a Node.js console
    -   run `node`