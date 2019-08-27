# ICT Skills 2 Assignment - Single Page app.

Name: Richard Whitney

## Overview.

For this assignment I decided to recreate the frontend, single page application
from a previous assignment using the React framework. The application is based
on points of interest, and islands of Ireland in particular. 

The user is able to login or create an account and then view all islands.
The user is able to create an island on the homepage and select an island to 
view its details. Islands can be updated and deleted from the details screen.

The island data is served and maintained by a separate backend application that
acts as a server. The frontend connects to this server with the use of API 
endpoints.

. . . . . List of user features  . . . .

- User authentication (login/signup)
- list all islands
- Create an island
- View an island's details
- Update an island
- Delete an island
- Backend integration with RESTful API (authentication, CRUD)

## Setup.

Having cloned the repo...  

**Step 1** Start the backend server  
Clone the backend repo found at https://github.com/richardwhitney/poi-web-service and navigate
project root
- Install dependencies with npm install
- Create .env file and paste in:
-     cookie_name=poi-cookie
      cookie_password=secretpasswordnotrevealedtoanyone
      db=mongodb://point:point@cluster0-shard-00-00-nxnaw.mongodb.net:27017,cluster0-shard-00-01-nxnaw.mongodb.net:27017,cluster0-shard-00-02-nxnaw.mongodb.net:27017/point?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true
      CLOUDINARY_URL=cloudinary://979863147761913:P7auznxb2SJVzZEfVv3UlCOM86Q@dgbpagu5n
- Run the index.js file to start the server

**Step 2** Start the React application  
Navigate to project root  
- Install dependencies with npm install
- Start the application with npm start
- Login details: Email: homer@simpson.com, Password: secret

**Step 3 (Optional)** Run story book  
Navigate to project root
- Run npx start-storybook -p 9001 -c .storybook/


## Data Model Design.

![][model]

The authenticate component acts as a wrapper for all routes that
require authentication to be viewed. When it is mounted it checks
to see if there is a jwt in local storage and if found, sends it
to the server. If a successful response is received a 'user' state in
the Index component is updated and the protected route can be viewed.
If unsuccessful the user is kicked back to the WelcomePage component.  
The Navbar component uses renders either the MainMenu component or the 
WelcomeMenu based on whether the user is authenticated or not.  

>>Example point data received from server
![][point-data]
 
>> Example category data received from server
![][category-data]

>> Example user data received from server
![][user-data]

## UI Design.

>> The entrance to the application. If a user tries to enter a protected route they wiil
>> redirected here.
![][welcome-page]

>> The login page
![][login-page]

>> The signup page
![][signup-page]

>> The dashboard page. Users can add an island or view already existing island
![][dashboard-page]

>> The point detail page. Displays the details of a selected point. Buttons to 
>> update and delete point
![][point-detail-page]

>> The update point page. Form is pre-populated with selected point's details
![][update-point-page]

## Routing.

- / (public) - default route displays the welcome page
- /login (public) - displays the login page
- /signup (public) - displays the signup page
- /logout (public) - removes local jwt and redirects to welcome page
- /dashboard (private) - displays all islands and the add island form
- /poi/:id (private) - displays the details of a selected island with buttons to
update or delete the point
- /updatepoint/:id (private) - displays the update point page. The selected point's 
details will be used to populated the update point form

## Storybook.

. . . . . Include a screenshot of the fully expanded list of stories from the tool's UI (see below). Group the stories appropriately (e.g. Contact page group) . . . .

![][stories]

. . . . State any Storybook add-ons used and include a screenshot(s) to illustrate.

## Backend.

. . . . . Briefly explain the backend/API used by the app (Stub, JSON-server, Custom Node, Open). For custom Node or Open API, list the endpoints it provides to your app and state the purpose of each

## Authentication (if relevant).

. . . . Briefly state the server-side authentication service used by your React app (Mock-auth, Custom Node/JWT, 3rd party(e.g. Firebase) ). Mention test username/passwords used . . . .

## Independent learning.

. . . . . State the non-standard aspects of React or other related technologies that you researched and applied in this assignment . . . . .

[model]: ./public/react-model-diagram.png
[point-data]: ./public/points-data.png
[user-data]: ./public/user-data.png
[category-data]: ./public/category-data.png
[welcome-page]: ./public/welcome-page.png
[login-page]: ./public/login-page.png
[signup-page]: ./public/signup-page.png
[dashboard-page]: ./public/dashboard-page.png
[point-detail-page]: ./public/point-detail.png
[update-point-page]: ./public/update-point.png
[detail]: ./detail.png
[stories]: ./stories.png
