# EXPENSIFY
#### Video Demo:  https://youtu.be/OIOu4uOOT34
#### Working App: https://jurado-expensify-app.herokuapp.com/  
#### Description: This web app is meant to help you keep track of your expenses and filter through whatever time frame you might want to, in order to more easily build a budget.
  I built this app as a Final Project for CS50 utilizing knowledge I gained from the course throughout the first 9 weeks, however I deviated from the initial JS, Python and SQL suggestion towards the MERN stack utilizing JS for the backend, Firebase instead of MongoDB (with the purpose of learning how to use Google Web services and integrating a 3rd party DB into a project), and Express.js as my server instead of flask. 
  
  I integrated a Redux store to handle local state and used Redux Thunk in order to enable the communication between the local state store and the DB's CRUD operations whenever necessary. 
  
  This project utilizes webpack as a bundler, which in itself uses Babel to enable ES6 syntax for JS.
  
  It's worth mentioning that I also attempted to improve the performance of the web app by using Client-Side Routing, this way my app does not need to make a new request for every action that takes place and rather it can simply re-render (through React) whichever UI needs to be rendered in an efficient fashion.
  
  The reason for me to have decided for MERN rather than JS + python and SQL is because I got some experience with the latter throughout the course, and since I intend to become a Web Dev I figured it would be best to get some experience with a different stack and see which one felt "right" for me, plus having a broader stack in terms of experience can never hurt.... Or so I believe, at least. All of that, of course, besides the fact that React is a simpler way to implement AJAX-esque operations without the complexity that the latter brings.
#### Note: Despite the availability of create-react-app, I decided to build this app from scratch rather with the intention of keeping this project as close as possible to being a completely self-made app, to comply with the requirements from CS50's final project guidelines.
  
#### Usage: The app is currently hosted in the Heroku platform, however once heroku gets rid of the free tier I might move it over to AWS, Azure or some other hosting service with a free tier. For the time being, you can click on the link at the top of this file to open, see and work with this app. 
  
  For starters, you will notice you're prompted to sign in using your Google account. I decided to implement this feature as I feel like signing in with a Google account is a much more straightforward process than having to create an account locally to each website, and as such is more enticing to a newcomer to the web app.
  
  This also means each individual user gets their own set of information within the DB, which effectively emulates the "Session" feature if we were using cookies in Flask.
  
  Within the dashboard (the page presented to you after logging in) you will be able to Logout on the top right corner if you ever need to do so, and you can go back to the dashboard by clicking on "Expensify" at the top.
  
  Another option in the dashboard will be for you to Add a new expense, if you click that button you will be instantly taken to a different UI where you can input details of the expense itself. 
  It's recommended for you to use something with which you can categorize your expenses in the field of "Notes". The notes are not visible anywhere within the app, but you do have a way to filter by the contents of the notes which means if you use, for example, "bday gifts" as the notes for every bday gift you purchase throughout the year, you can later on just type in "bday" in the search field and it will show all the items which have "bday" in the notes field, essentially allowing you to categorize your expenses if used properly. 
  
  After adding a couple of expenses, if you look at the dashboard you will see you have a few filtering and ordering options available for use. These are self explanatory, just keep in mind they are not mutually-exclusive, so if you filter a certain date range and then type in a certain word in the search field you will only see expenses which contain the word you searched for within the specific date range you selected.
  
  You may remove or edit your expenses at your leisure, once you add one and you see it in the dashboard you will be able to click on it (or tap it, should you be using the mobile version) in order to edit it. You may edit an expense as many times as you need.
  
  Within the edit expense page you will be able to completely remove an expense if you want to, with the button at the bottom labeled accordingly.
  
  Once an expense has been deleted, there's no way to retrieve it, so be careful with this option!.
  
  The main point to keep in mind while using this app is the speed with which each action takes place, you should see each action is processed pretty much instantly regardless of what it is you're doing within the app (Other, of course, than the log in bit - That depends on the google servers as your account information is being validated)

  #### Behind the scenes: I used the standard build paths for a React-App-Router application, which means there's several dozens of files each containing the code for an individual action, logic-piece, component, etc.. But here's a general breakdown of what you can expect to find in each folder (within SRC)...
  
  ##### actions:
  
  This is where you can find all my action-generators for the redux store reducers. 
  
  ##### components:
  
  This is where you can find the code for each one of the individual components (I used functional components throughout most of it, though there's 2 class based components)
  
  ##### firebase
  
  Here you will find the configuration for the firebase DB API.
  
  ##### reducers
  
  Here you will find the reducer logic which takes in the actions generated by the action generators and passes on the sanitized data to the local state and then to the DB.
  
  ##### routers
  
  This is the list of routes which get dynamically called throughout the rest of the app.
  
  ##### selectors
  
  Here you will find the logic for the filters and sorting algorythms.
  
  ##### stores
  
  Here you will find the configuration for the Redux Store.
  
  ##### styles
  
  Here you will find the SASS files for the styles of the whole app, broken down by components.
  
