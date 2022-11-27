# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Start this project

## local node environment

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Docker

### you need build the docker image locally.

```
  cd <project-root-path>
  docker build -t clinical-portal ./
```

### run docker locally

You can start it using docker locally by :
```
docker run -p 3000:3000 clinical-portal
```


## Library I choose

-   Create React App
-   React + Typescript
-   Material UI
-   React Router
-   React Query
-   React hook form
-   React toastify

## Folder Description

```
  -nginx/
  -src/
    -components
    -constants
    -contexts
    -modules
    -pages
    -services
    -types
    -utils
  -global.d.ts
  -Routers.tsx
  -Dockerfile
```

### components

this is the place where we put the pure UI components here, that means components in here are all controlled components
with no dependencies about Global Store(React Context, Redux or Mobx) and Endpoint requests. We can easily test them.

### constants

this is the place where we put some common used constants here, like some storage keys, HTTP_ERROR_STATUSES and constant
duration times.

### contexts

this is the place where we put Global store.

### modules

this is the place where we put the Business components, which could related to the Global Context, history Or some global components
Like Notification.

### pages

this is the place where we put the screens(pages) entry here.

### types

this is the place where we put the interfaces and types which can be used by the whole project file.

### utils

this is the place where we put the common utils, like the MockedFetch function.

### global.d.ts

### Routers.tsx

this is the entry of React Router.

### nginx folder and Dockerfile

this is the config of Docker, it will start with nginx




## design decisions

### Why Not Redux?

The reason I chose the React Context to be the Global Store rather than React-Redux
is this is a small project which only contains 2 pages, it doesn't contains So much state we need to manage.
React Context is the perfect one here, small and easy to understand. Keep it simple. It also will be easy to switch if
we want the Redux in the future.

### Why Typescript?

Of course, Javascript is well and can easily build this project as well, However, Typescript can help me developing
this project more strictly and easier to find the bugs, wrong data format, or missing props. So the first things I
did is create the types and interface I may needed.

### Why we need Modules when we already have pages(screens)?

This is a continuation of work habits. Pages or screens is the entry and layout of how we want to put in each screen.
Modules are the exactly implement.

-   1 every Module could be used in different screens.
-   2 splitting to small Modules can make them focus on small functionality, more easy to upgrade and test.

### Why we need HTTP_ERROR_STATUSES when we already have the error message from endpoint response?

-   1 Not all error message is suitable to show for our users. It will be better if we overwrite is in FE.
-   2 i18n. it will be easy to switch to different languages if we handle error message in FE rather than directly
    show out the error from BE.

### Why we need a new Fetch rather than using the fetch provided by browser?

-   1 of course we can directly use the origin fetch, however, that means we need to set the Authorization and handle fetch error
    in every request(service). It is a bad solution and will create so many duplicated codes.
-   2 we are using Mock endpoints right now, and it will be impossible if we want to hybrid use real endpoints and Mock
    endpoints. So I create a new Fetch, to make it easier to upgrade if we want switch to really endpoints.

### Why add the Logout?

I think this is a very common functionality, and it didn't take too much time, So I add it.

## Road Map

-   [ ] (Optimize view experience in Mobile screen)
-   [ ] (i18n)
-   [x] (add unit tests)
-   [ ] (improve test coverage greater thant 90)
-   [x] (add gitHooks for eslint and prettier)
-   [x] (add gitActions for CI/CD)
-   [x] (Support Docker, add Dockerfile)
