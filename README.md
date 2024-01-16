# React Native Developer Assignment

## Project Overview:

You are tasked with creating a React Native mobile application that includes a login screen, a home screen with proper navigation, and state management. The project should be completed using either React Native CLI or Expo. You are free to choose a state management library such as MobX, Recoil, or Redux. Additionally, for the date and time picker, you must implement your own calendar using the Moment.js library.

### Project Requirements:

1. **Login Screen:**
   - Implement a login screen with at least two input fields for username and password.
   - Include a "Login" button that, upon successful authentication, redirects the user to the home screen.
   - If it is the user's first time opening the app, they should be directed to the login page.

2. **Home Screen:**
   - Implement a home screen with a header displaying the user's information.
   - Include a date and time picker on the home screen.
   - Create a custom calendar using Moment.js to display a 6-month calendar.
   - Allow users to select a date and time using your custom calendar and display the selected date and time on the screen.
   - Implement a logout button on the home screen that, when pressed, logs the user out and redirects them to the login screen.

3. **Navigation:**
   - Implement proper navigation between the login screen and the home screen.

4. **State Management:**
   - Choose and implement a state management library (MobX, Recoil, Redux) to manage the application's state effectively.
   - Demonstrate proper usage of the chosen state management library throughout the app.

5. **Login Api:**
   - curl --location 'https://new-api-staging.rydeu.com/login' \ --header 'Content-Type: application/json' \ --data-raw '{
       "email": "rydeu@email10p.org",
       "password": "123456",
       "type": "customer"
   }' 

### Technical Considerations:

1. Use best practices for React Native development.
2. Ensure the code is well-organized, readable, and follows a consistent coding style.
3. Implement your own custom calendar for the date and time picker using Moment.js.
4. Make sure the app is responsive and works well on both iOS or Android devices.

### Submission Guidelines:

1. **Deadline:** The deadline for submitting the completed project is one week from the assignment date.
2. **Submission Format:** Share the project code via a public GitHub repository or a ZIP file.

### Evaluation Criteria:

Your project will be evaluated based on the following criteria:

1. **Functionality:** Does the app meet the specified requirements, including login, navigation, custom date and time picker, and logout functionality?

2. **Code Quality:** Is the code well-organized, readable, and following best practices for React Native development?

3. **State Management:** Does the project effectively use the chosen state management library for managing the application state?

4. **User Experience:** Is the app user-friendly, responsive, and visually appealing?

Good luck with the assignment! If you have any questions or need clarifications, feel free to reach out.
