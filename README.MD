# Image Processing API:
This project is part of Udacity full stack developer nano degree.
## Description:
This api uses Express for server side. It resizes an image to specified height and width upon visiting "/resize" endpoint. It stores the processed image in a thumb folder. It uses a custom caching to avoid reprocessing an image that is already resized and exists. 
It utilizes a custom logger that logs the time and date for each image that is accessed or resized.
Jasmine is used for unit testing.

## Technologies used:

- Nodejs
- Express
- Typescript
- Jasmine
- Eslint
- prettier 

## Getting started:
- First clone the repository from `https://github.com/rzddkh/image-processing-API.git`
- Enter the main folder `cd image-processing-api`
- Install the dependencies `npm install`	
- Start the server with following script `npm run start`
- Some test are provided and can be run using following command `npm run test`
- Scripts for eslint and prettier are `npm run lint` and `npm run prettier`
- Main route is `http://localhost:3000/`

## API Endpoints:
| EndPoints      | Purpose         | Required url params | Example|
| -------------  |:-------------:  | -----:              |:----   |
| '/resize'      | resize an image |filename , width , height    | `http://localhost:3000/resize?filename=matteo-badini&width=1000&height=900`

