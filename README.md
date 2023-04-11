# Film Critics

A movie recommendation system built with ReactJS, utilizing ***ChatGPT's API and TMDB's API***  to fetch movie data. The system also uses Redux for state management and is fully responsive. By sending requests to the ChatGPT API, the system generates a summary of viewer sentiment and key topics related to a movie, providing users with more informed recommendations.


## Live Demo
**Check out the live demo [https://filmcritics.netlify.app](https://filmcritics.netlify.app)**

## Description

The Film Critics system is a movie and TV show recommendation platform that allows users to search, explore, and access information about their favorite movies and TV shows.

One unique feature of the system is its integration with OpenAI's ChatGPT API. It provides users with a summary of reviews and comments related to a movie, including overall sentiment and key topics mentioned. This analysis allows users to make more informed decisions when choosing a movie to watch.

## Features

- Home page (includes banner, recommendation, similarity, and top-rated components)
- Explore page (both movie and TV)
- Search page (used to search for movies and TV shows)
- Details page (displays information for a specific movie)
- **Viewer sentiment analysis using ChatGPT's API**
- Infinite scrolling for browsing large amounts of data
- Lazy loading for improved page load times
- Multi-select dropdown for filtering results
- Skeleton loading components for improved user experience


## Dependencies

- "@reduxjs/toolkit": "^1.9.3"
- "axios": "^1.3.4"
- "dayjs": "^1.11.7"
- "dotenv": "^16.0.3"
- "openai": "^3.2.1"
- "react": "^18.2.0"
- "react-circular-progressbar": "^2.1.0"
- "react-dom": "^18.2.0"
- "react-icons": "^4.8.0"
- "react-infinite-scroll-component": "^6.1.0"
- "react-lazy-load": "^4.0.1"
- "react-loading-skeleton": "^3.2.0"
- "react-multi-select-component": "^4.3.4"
- "react-redux": "^8.0.5"
- "react-router-dom": "^6.9.0"
- "react-scripts": "5.0.1"
- "react-youtube": "^10.1.0"

preview 1:-
![Screenshot of My Project](./src/assets/longScreenShot.png)


preview 2:-
![Screenshot of My Project](./src/assets/longScreenShot2.png)


To run the project locally:

1. Clone the repository: `git clone https://github.com/SamhithMR/filmCritic.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`