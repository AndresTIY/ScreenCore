## Screen-Core

#### Elevator Pitch
Screen-Core is a Social, Discussion-Based Movie Review App. Imagine "Reddit" meets "Metacritic"

#### Basic Features
- This app allows users to view movie information, reviews, and engage in discussions in a voting based format.
- User should be able to log in, create a profile, and view movie review scores for current new releases. The movies will be organized in a pinterest/card format. Each card will contain movie title, a picture, it's score, the top 3 topics about this movie, and a expand topics link.
- The basic discussion page will be in a list format where the top movie, based on votes, will be at the top. When you click on the movie, user will be able to see the top voted topics, and click on the topics to view it's discussion and be able to vote on the topic and all of it's children
- When a user clicks on the "expand topics link" from the movie card, it should take the user to the movie specific discussion page. Each Movie Specific Discussion page will have a header with the Movie Image, Movie trailer, Avg Score, and Release Date

#### APIs Being Used
- Backendless
- The MovieDB

##### API Proof
![Imgur](http://i.imgur.com/6WajVaS.png)

#### Data Modeling

Homepage: "/"
- Header
  - Login Link - "/Login"
  - Register Link - Route "/Route"
  - Username, appears when user logins or registers, link to profile
  - Logo
  - Discussion Link "/Discussion"

- Main
  - Featured Movie Card (Static other than DP Link)
    - Movie title
    - Release Date
    - Genre
    - Avg Review
    - Discussion Page Link "/Discussion/movieTitle"
  - New Releases
  - Movie Cards (DP Link only interactive part)
    - Col 1
      - Movie title
      - Release Date
      - Genre
      - Avg Review
    - Col 2
      - Col Header "Discuss"
      - Topic 1
      - Topic 2
      - Topic 3
      - Discussion Page Link "/Discussion/movieTitle"

Discussion Page:
- Sidebar(Collapsable)
  - Trending Movie Discussion Links (movie titles only) "/Discussion/movieTitle"
- Main Area
  - Movie 1 Link "/Discussion/movieTitle"
  - Movie 2 Link "/Discussion/movieTitle"
  - Movie 3 ...
  - All Topics can be voted on from within Topic Page
  - Topic Page "/Discussion/movieTitle/id"
    - Header (Collapsable)
      - Movie Card
        - description
        - picture
        - trailer link
        - release Date
        - genres
        - director and/or main cast

    - Topic 1 Link
    - Topic 2 Link
    - Topic 3 Link
    - Topic ...

Login Page: "/login"
- email input
- password input
- login button

Register Page: "/register"
- email input
- password input
- confirmation password input
- name
- Register button

Profile Page: "/profile"
- upload picture action
- user description text area



#### Routes
- "/" - Homepage
- "/Login"
- "/Register"
- "/Profile"
- "/Discussion"
- "/Discussion/movieTitle"
- "/Discussion/movieTitle/id"

#### Libraries and Special Features
- Materialize
- LoDash
- Picture Uploading
