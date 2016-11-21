# Project lazydrop

Drop your stories publicly or privately. Let your friends know about what you're currently doing and where exactly are you doing it. Make memories by connecting to places you have visited. Checkout stories of other people to get motivated to try new experiences and places.

## lazydrop Backend API

All the backend stuff goes in here.

### Endpoints

host : http://localhost:3000

* Register (Locally with lazydrop registration form)

```
Endpoint: host/api/lazydropUsers
Type: POST
Data Required: email, password, userLatitude, userLongitude
```

* Login (Locally with lazydrop login form)

```
Endpoint: host/api/lazydropUsers/login
Type: POST
Data Required: email, password
```

* Facebook Authorization 

```
Endpoint: /auth/facebook
Create a button and give it a href="/auth/facebook"
```

* Fetch all stories

```
Endpoint: host/api/lazydropStories
Type: GET
Data Required: N/A
```

* Fetch all stories within specified range

```
Endpoint: host/api/lazydropStories/getStories
Type: POST
Data Required: latLeft, latRight, longUp, longDown
```

* Drop a story

```
Endpoint: host/api/lazydropStories
Type: POST
Data Required: storyLatitude, storyLongitude, storyText, userGUID
```

