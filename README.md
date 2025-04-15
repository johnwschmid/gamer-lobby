# gamer-lobby

install packages and run 'npm run dev'

This is an application that is supposed to simulate the UI of the popular gaming website rawg.io - it utilizes their API in order to fetch various data sets. In my React application I've implemented the effect hook in order to asynchronously fetch game, genre, and platform data and then dynamically render them when the response is ready. I track a global query object with a state hook, so that i can use the generic type <T> within a custom effect hook that is used to fetch all 3 datasets. I've also added a search function, as well as genre/platform selections. Next I plan to make the game cards themselves interactive.
