#### Episode - 18, 19, 20

#### Netflix - GPT

## Features
- Login/Sign Up
    - Sign-in / Sign-up Form
    - redirect to Browse Page

- Browse (After Authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title and Description
        - Movie Suggestion
            - Movie Lists * N

- Netflix - GPT
    - Search Bar
    - Movie Suggestion


## What we've Done So Far ? 

- Create React App
- Configured TailwindCSS 
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Sign out 
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscibed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Regiter TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- build Movie Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind CSS
- usePopularMovies Custom hook
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-language Feature in our App
- Get Open AI Api Key 
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Resused Movie List component to make movie suggestion container
- Memoization
- Added .env file
- Adding .env file to gitignore
- Made our Site Responsive



Note : For Building Large Forms Use Formik Library

## Que: Why everyting we want to print in console gets printed twice? 
Ans: This is Because of the Strict mode of React.
In this mode React does extra rendering of our component to check for some inconsistency in our code. it only happens in development phase not in Production phase. and it is a good thing. 

## Que: Add FireBase Setup in Your Project.
Ans: 1. Create a firebase account
    2. Create a Project
    3. Go to Your Newley created Project and go to web 
    4. Then set Up firbase hosting
        a. Steps has been given For installation and adding configuration.
        b. For deployment we have to use following commands
            - install "npm i -g firebase-tools"
            - for login use "firebase login"
            - Initialize the firebase using "firebase init" : in options choose
                a. "Hosting : Configure files for firebase hosting (optionally) set nup Github Action Deploy"
                b. Use an existing project then select the project from the list
                c. build
                d. no
                e. no
    5. After setting up the firebase on your project add the authentication methods in your firebase project from the website.
    6. For deployment use "firebase deploy".

## Que: Adding Firebase Authentication in Project
Ans: -> Go to Firebase doc 
-> Authentication 
-> web 
-> password Authentication 
-> Now follow the steps for sign up and sign in.

-> For dispatching action for any auth state change we can use "onAuthStateChanged" in main component level (it can be found in web -> manage user). we can also find update userProfile api here.


## Que: TMDB Setup
Ans: Login 
-> Goto Edit Profile 
-> API 
-> Create a Project 
-> Get the API_KEY and Access Token 
-> Now search the desired Apis from the TMDB documentation.

## Que: Integrating GPT API in our Project.
Ans: -> login to platform.openai.com 
-> create a project 
-> Get the API key of that Project 
-> now got to npm openAi to chek how to use apis of openai.


## Que: Where to Add Secret Key or use of .env.
Ans: To securely manage and use secret keys, such as API keys, you should store them in environment variables using a .env file. This ensures that sensitive information is not hard-coded into your application's source code.

Environment Variable of react app must starts with "REACT_APP_APINAME"

## Que: Memoisation
Ans: When we navigate from the home page to the search page, the home page already makes an API call and stores the data in the store. However, when we return to the home page from the search page, it calls the APIs again to fetch the data, even though the data is already present in the store. To optimize this, we will implement memoization.

We only need to check if the data is present in the store. If the data is not present, then we call the function to fetch the data.




