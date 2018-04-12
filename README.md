### ROUTE

List of auth route:

| Router                     | HTTP | INPUT | OUTPUT | DESC|
|-----------------------    |:----:|:----:|:----:|:----:|
|/api/auth/signIn          |POST  | #request body : email, password | JSON: Status, Data User, Token | Login with email and password
|/api/auth/register          |POST  | #request body : email, password | JSON: Data User| Register with email and password

List of user route:

| Router                     | HTTP | INPUT | OUTPUT | DESC|
|-----------------------    |:----:|:----:|:----:|:----:|
|/api/user/:id          |GET  | #request params ID USER | JSON: Status, Data User | View a data user friend
|/api/user        |PUT  | #request body : email, password #request headers: token | JSON: Data User | Update Data a User with token
|/api/user          |DELETE  | #request headers: token | JSON: Status, Data User | Delete Account

List of event route:

| Router                     | HTTP | INPUT | OUTPUT | DESC|
|-----------------------    |:----:|:----:|:----:|:----:|
|/api/event          |GET  |#request headers: token | JSON: Status, Array Data Event | Find All Data Event with redis
|/api/event        |POST  |#request headers: token#request body: time, date, location, description | JSON: Status, Data Event |Create a new Event/Task Account
|/api/event/:id          |PUT  |#request headers: token #request params ID Event/Task #request body: time, date, location, description | JSON: Status, Data Event per User | Update Event/Task
|/api/event/:id          |DELETE  |#request headers: token #request params ID Event/task | JSON: Status, Data Event | Delete Event/Task 


### Usage

```
> git clone
> npm install / yarn install
> npm run dev /yarn run dev 
```
