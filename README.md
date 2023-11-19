# TASK MANAGER

This is the backend of a very simple task manager, almost a POC. You can create a task, list all your task and delete the ones that you don't need to register anymore.

## Technologies used

It was built using Express and npm as package manager.

## To run it locally

Please clone the repository and run ´npm install´, and then run ´npm start´. Make sure that you have this project up and running before trying the frontend, so the app works properly. It is set to run at:

```
127.0.0.1:3000
```

## Decisions made

For simplicity and time reasons, I tried to choose the simplest solutions available to meet the required functionality.

- I wanted to use TypeScript to have a more rebust project. But, since using it in Express requires further configuration, I decided not to use it. If it was a project meant to be in production, I would have used the time to configure Typescript.
- The structure of the project is very simple. In case of a more complex functionality, I would have used a helper and a service folder/file so it can scale more properly.

## Known issues

The following issues should be fixed:

- When receiving a request the throws a 404 status code, an error 'Cannot set headers after they are sent to the client on 404' is thrown. This should be analysed and fixed.

## Nice to have

If I had more time, besides solving the known issues mentioned above, I would:

- Add automated tests so we make sure that the frontend works and we don't break it in the future. Particularly, to:
  - Check that each endpoint return the expected status code and data structure for each case
  - Check that validation helper methods work properly.
