# TestLine-Quiz
# TestLine Quiz

## Overview
TestLine Quiz is a web-based quiz application that incorporates gamification elements to enhance user engagement. The quiz fetches questions from an external API and provides an intuitive and interactive experience for users.

## Features
- **Start Quiz**: Users can begin the quiz at any time.
- **Multiple-Choice Questions**: Each question presents multiple answers for users to choose from.
- **Results Summary**: Upon completion, users receive a summary of their performance, including total points scored.
- **Gamification Elements (Bonus)**: Enhancements to improve user engagement.

## Tech Stack
- **Frontend**: React.js (or another chosen framework)
- **API Integration**: Fetching quiz data from `https://api.jsonserve.com/Uw5CrX`
- **Styling**: CSS/Bootstrap for a clean UI

## Setup Instructions
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/Yashitjain/TestLine-Quiz.git
   cd TestLine-Quiz
   ```
2. **Install Dependencies seperately in client and server**:
   ```sh
   npm install
   ```
3. **Run the Server Application**:
   ```sh
   npm start
   ```
4. 3. **Run the Client Application**:
   ```sh
   npm run start
   ```
5. **Access the Quiz**: Open `http://localhost:3000` in your browser.

## Screenshots & Walkthrough
[UI link](https://drive.google.com/drive/folders/1MdtE1Ud4z0thggdZU3tHwQg-nUWiYR-0?usp=sharing)

## API Integration
- Fetches quiz data from `https://api.jsonserve.com/Uw5CrX`
- Handles API errors gracefully

## Code Summary
The application is structured using React components and utilizes Context API for state management. Below is an overview of the main components:
- **App Component**: The root component that manages routing and state.
- **Quiz Component**: Handles the quiz flow, fetching questions, and rendering multiple-choice options.
- **QuestionCard Component**: Displays individual questions and options.
- **Result Component**: Summarizes the user's performance upon quiz completion.
- **Context API**: Manages global state, including user score, selected answers, and quiz progress.

## Evaluation Criteria
- Accurate data integration
- Engaging UI and gamification elements
- Seamless user experience
- Well-structured and maintainable code

## Contribution
Feel free to fork the repository and submit pull requests for improvements.

## License
This project is licensed under the MIT License.

---
For any questions, reach out via GitHub Issues or email.

