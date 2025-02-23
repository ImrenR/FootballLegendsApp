# Football Legends App

## Description
This project is a React-based app that showcases legendary football players. Users can search for players and view their profiles, statistics, and official careers.

##Demo

https://github.com/user-attachments/assets/90b8cfda-7437-463d-b15a-1f84a58b32b8

https://github.com/user-attachments/assets/244b1968-a051-4b95-8868-617e6917be7f

https://github.com/user-attachments/assets/9850c442-b3f0-487f-8dc3-7a222f2b7dd7

## Features
- **Header**: Displays a logo and title "Football Legends."
- **Search Bar**: Allows users to search for players by name.
- **Player Cards**: Displays player information including image, statistics, and official career years. Clicking on a card reveals more details.
- **Responsive Design**: The app adjusts the layout based on screen size using Bootstrap’s grid system.

## Installation
1. Clone the repository.
2. Install dependencies using `pnpm install`.
3. Run the app with `pnpm start`.

## Usage
- On the homepage, you’ll see a list of football legends.
- Use the search bar to find specific players by name.
- Click on a player’s card to toggle detailed statistics.

## Technologies Used
- React
- React-Bootstrap
- State Management with React’s `useState` hook

## Components
- **Header**: Contains the logo and title of the app.
- **LegendCard**: Displays individual player details such as their name, image, and statistics.
- **LegendContainer**: Handles the search functionality and maps over filtered player data to display the cards.

## Data
The player data is sourced from a local `data.js` file, containing player details such as name, image, statistics, profile link, and official career years.

## License
This project is open-source and available under the MIT License.
