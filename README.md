# Auth0 Authentication

This is a Auth0 Authentication project. It was developed for learning purposes.

## Tech Stack

- React
- Express.js

## Project Initialization Steps

Create an auth0 account and application in it.
Create an API inside auth0.
Create .env file in project directory. You need to fill variables below in that file.

```bash
  REACT_APP_AUTH0_DOMAIN=${DOMAIN}
  REACT_APP_AUTH0_CLIENT_ID=${CLIENT_ID}
  REACT_APP_AUTH0_CALLBACK_URL=${CALLBACK_URL} -> This is "http://localhost:3000" by default
  REACT_APP_AUTH0_AUDIENCE=${AUDIENCE} -> This is "http://localhost:3001" by default
  REACT_APP_API_URL=${API_URL} -> This is "http://localhost:3001" by default
```

Don't forget to set "Allowed Callback URLs" and "Allowed Logout URLs" in auth0 application.

## Installation

To install this project follow the steps after cloning.

You need to follow initialization steps before.

```bash
  npm install
```

Then to start app

```bash
  npm start
```

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://mammimia.github.io/portfolio/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/muhammed-ali-aydin/)
