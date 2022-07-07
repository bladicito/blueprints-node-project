#### Backend
This is a node application using Fastify as main framework. 
Start the server in development Mode from the src folder **without** compiling TS -> JS
```
npm run dev
```
#### Frontend
The frontend is a React SPA created using the "create-react-aap" package. It uses the TypeScript template 
DO NOT EJECT THE PROJECT (Task removed from the package.json of the frontend). 

Start the frontend in development Mode on http://localhost:8080
```
cd src/frontend && npm run dev
```
The frontend will be served on http://localhost:3000 - you can start developing.
 
If you need to serve the frontend on the server, run:
```
npm run build:frontend-generate
```
you could access to the frontend in its latest state as compiled version on the server (http://localhost:8080) 

##Build

to build the application, run:
```
npm run build
```
this will create the **build** folder on your app root. 

## Start app in prod mode 
#### please run the build task before
```
npm run start
```

### Prettier usage
#### Auto formatting TSX/TS/JS/JSON/MD

1. We develop on IntelliJ IDE. If you do too, please proceed to install the plugin "Prettier".
2. Once you did it, proceed to configure it under Preferences -> Languages & Frameworks -> JavaScript -> Prettier.
4. Please configure it with the next pattern on "run for files": ``{**/*,*}.{js,ts,jsx,tsx}`` and run "run on save"

or simply before you commit, run:

```
npm run format
```

