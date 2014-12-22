# Authentication on AngularJS with JWTs

In this demo we'll show step by step how to add Authentication to your AngularJS app with an API that uses JWTs.

## Running the example

This application has an AngularJS Frontend and a NodeJS backend

### Frontend

In order to run the the AngularJS app, all you need to do is to start a server at that folder. I recommend using `serve` for that. Just run:

* `npm install -g serve`
* `bower install`
* `serve`

Then go to [http://localhost:3000](http://localhost:3000) and see the Frontend app running

### Backend

The backend is made with `node`, so you must have `node` and `npm` installed.

Then, just run `node server.js` to start the server on the port `3001`.

## Branches

In this repository you'll find several branches. Each of the branches represents one step taken to implement the Authentication.

### 1 - Start Branch

This is the starting point for the application.

If you go to [http://localhost:3000/#/](http://localhost:3000/#/) you'll see the main page of the demo.

In there, you'll see 2 buttons to do 2 API calls:

* The first one, does an API call that **doesn't** require Authentication
* The second one does an API call that **does** require authentication

Try clicking both to see what happens.

### 2 - Authentication implemented in the Backend and UI in the FrontEnd

In this branch, we've added the UI for both the [Signup](https://github.com/auth0/ngeurope-demo/tree/2-user-on-front-ui/frontend/signup) and [Login](https://github.com/auth0/ngeurope-demo/tree/2-user-on-front-ui/frontend/login). 

Also, we've implemented the [Login](https://github.com/auth0/ngeurope-demo/blob/2-user-on-front-ui/backend/user-routes.js#L37-L54) and [Signup](https://github.com/auth0/ngeurope-demo/blob/2-user-on-front-ui/backend/user-routes.js#L19-L35) on the Backend. It returns the [JWT](https://docs.auth0.com/jwt) to the user.

### 3 - User Authentication Finished

In this branch, user Authentication works in the Frontend. You can see the [Login](https://github.com/auth0/ngeurope-demo/blob/3-user-signin-finished/frontend/login/login.js) and [Signup](https://github.com/auth0/ngeurope-demo/blob/3-user-signin-finished/frontend/signup/signup.js) implemented and working.

Go to [http://localhost:3000/#/login](http://localhost:3000/#/login) to see the Login page and login. You'll see that if you click on the `Call secure API` button, it'll still throw an error. That's because we need to send the `JWT` on the `Authorization` header. Let's do that!

### 4 - Sending JWTs on requests

Now, we've implemented sending the JWT on the `Authorization` header on every request. Check it out [here](https://github.com/auth0/ngeurope-demo/blob/4-sending-jwt-on-requests/frontend/app.js#L10-L14)

Now, before logging in, try going to [http://localhost:3000/#/](http://localhost:3000/#/). You should still see this page even though you're not logged in. Try clicking on the `Call secure API` button and check that you still get the Unauthorized error. Now, go to the [Login page](http://localhost:3000/#/login) and log in. Try clicking again on `Call secure API`. Check that it's not returning a correct response since the `Authorization` header is sent in every request.

### 5 - Restrict access to routes

In this section, we've restricted access to routes that require authentintication for anonymous users. Go to [http://localhost:3000/#/](http://localhost:3000/#/) without being logged in and you'll see that you're redirected to the Login page. You can see the implementation for that [here](https://github.com/auth0/ngeurope-demo/blob/5-restrict-access-to-routes/frontend/app.js#L18-L25).
