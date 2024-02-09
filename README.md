
➤➤➤ **[LIVE LINK](https://mern-booking-app-96z6.onrender.com/)**


🚀 *Technology:*   
    **Frontend:** TypeScript, Tailwind CSS, JS    
    **Backend:** NodeJS, Express    
    **DB:** MongoDB   
    **API:** RESTapi   
    **Storage:** Cloudinary   
    **Deployment:** Render.com  

🔑 *Key Features of Our Booking App:*
1. **User Authentication**: Learn to implement secure login and registration using HTTP cookies and JWT for a seamless user experience.
2. **Hotel Management**: Master the art of adding, editing, and viewing hotels. We cover everything from handling form inputs to managing state.
3. **Image Uploads**: Dive into integrating image uploads, a crucial feature for any booking platform.
4. **Search, Sort, & Filter**: Enhance the user experience with functionalities to search, sort, and filter hotels, making it easy for users to find their perfect stay.
5. **Online Payments**: Integrate Stripe for secure and efficient hotel booking payments.
6. **Booking Management**: Implement the feature to view and manage bookings, essential for any booking application.
7. **Recent Hotels on Home Page**: Display recently added hotels on the home page, keeping the content dynamic and engaging.

🚨 STEP

1. setup
   - Vite + React setup
   - MongoDB Setup
2. setup tailwind
3. Adding layout
4. auth explained & login and registration  
   - User registration api (Thunder Client)
   - User Login API
   - User Registration Form
   - AppContext & Toast Notifications
   - Checking User Login State
   - Sign-in & Sign-out
5. automated tests explained & auth tests
   - set up test database
   - auth test
6. deployments explained and auth deployment
   - deployment Build Scripts
   - mongo db security setting
7. add hotel feature 
   - Cloundinary Setup
   - Create Hotel API
   - Create Hotel Form
8. add hotel feature deployment
9. view my hotels feature
10. view my hotels automated test
11. view my hotels deployment
12. edit my hotel hotel
13. edit my hotel automated test
14. edit my hotel deployment
15. search page & pagination feature
16. sorting and filtering feature 
17. search page feature automated test
18. search page feature deployment
19. hotel details page feature 
20. hotel details page automated test
21. hotel details page deployment
22. save search terms to session storage
23. booking confirmation page 
24. stripe payments explained 
25. stripe setup and booking feature
26. booking feature automated test
27. booking feature deployment

# Render.com IPs to add to MongoDB:
3.75.158.163
3.125.183.140
35.157.117.28

# Other Links:
Stripe: https://stripe.com/
Cloudinary: https://cloudinary.com/
MongoDB: https://mongodb.com

# Setting Up the MERN Booking App

This guide will walk you through the process of setting up the MERN Booking App on your local machine.

## Prerequisites

Before you begin, ensure you have Node.js installed on your system.

## Cloning the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/Rudro-25/MERN-BOOKING-APP.git
cd MERN-BOOKING-APP
```

## Backend Configuration

1. **Environment Files**: Navigate to the `backend` folder and create two files: `.env` and `.env.e2e`. Add the following contents to both files:

    ```plaintext
    MONGODB_CONNECTION_STRING=

    JWT_SECRET_KEY=
    FRONTEND_URL=

    # Cloudinary Variables
    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=

    # Stripe
    STRIPE_API_KEY=
    ```

2. **MongoDB Setup**: 
    - Sign up for an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
    - Create a new cluster and follow the instructions to set up a new database.
    - Once set up, obtain your MongoDB connection string and add it to the `MONGODB_CONNECTION_STRING` variable in your `.env` files.
    - For the `.env.e2e` setup see "running automated tests" below

3. **Cloudinary Setup**:
    - Create an account at [Cloudinary](https://cloudinary.com/).
    - Navigate to your dashboard to find your cloud name, API key, and API secret.
    - Add these details to the respective `CLOUDINARY_*` variables in your `.env` files.

4. **Stripe Setup**:
    - Sign up for a Stripe account at [Stripe](https://stripe.com/).
    - Find your API keys in the Stripe dashboard.
    - Add your Stripe API key to the `STRIPE_API_KEY` variable in your `.env` files.
  
5. **JWT_SECRET_KEY**:
    - This just needs to be any long, random string. You can google "secret key generator".

7. **Frontend URL**:
    - The `FRONTEND_URL` should point to the URL where your frontend application is running (typically `http://localhost:3000` if you're running it locally).
  

## Frontend Configuration

1. **Environment Files**: Navigate to the `frontend` folder and create a file: `.env`:

    ```plaintext
    VITE_API_BASE_URL=
    VITE_STRIPE_PUB_KEY=
    ```

5. **VITE_API_BASE_URLL**:
    - The `VITE_API_BASE_URL` should point to the URL where your backend application is running (typically `http://localhost:7000` if you're running it locally).

## Running the Application

1. **Backend**:
    - Navigate to the `backend` directory.
    - Install dependencies: `npm install`.
    - Start the server: `npm start`.

2. **Frontend**:
    - Open a new terminal and navigate to the `frontend` directory.
    - Install dependencies: `npm install`.
    - Start the frontend application: `npm run dev`.
    - The application should now be running on `http://localhost:5173` but verify this in your command line terminal  


## Running Automated Tests

1. **MongoDB Setup**: 
    - You will ideally want to create a new mongoDb database for your tests to run against. This is to keep the data stable 
    - Sign up for an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
    - Create a new project (e.g e2e tests)
    - Create a new cluster and follow the instructions to set up a new database.
    - Once set up, obtain your MongoDB connection string and add it to the `MONGODB_CONNECTION_STRING` variable in your `.env.e2e` file.
      
2. **Importing Test Data into MongoDB**:

    - The repository contains a `data` folder at the root, which includes JSON files for a test user and a test hotel. You can import these into your MongoDB collections to quickly set up test data.
    - **Locate the Test User File**: In the `data` folder, find the file containing the test user data (likely named something like `test-users.json`).
    - **Open MongoDB Compass**: Launch MongoDB Compass and connect to your database.
    - **Select the Database**: In Compass, select the database you are using for the automated tests (created in step 1).
    - **Import User Data**:
        - Navigate to the `users` collection within your database. Create it if it doesn't exist
        - Click on the "Add Data" button and select "Import File".
        - Browse to the location of your `test-users.json` file and select it.
        - Choose JSON as the file format and click "Import".
        - The test user data will be added to the `users` collection.
        - user login: 1@1.com/password123
    -  **Locate the Test Hotel File**:
        - Navigate to the `hotels` collection within your database. Create it if it doesn't exist
        - Repeat the import process as you did for the user data, but this time select the `test-hotel.json` file.
        - Ensure the file format is set to JSON and click "Import".
        - The test hotel data will be added to the `hotels` collection.
 
3. **Running tests**    
    - In VS Code install the [Playwright extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
    - Navigate to the `e2e-tests` directory.
    - Install dependencies: `npm install`.
    - Start the frontend and backend server using the steps above
    - [Using the Playwright extension to run the tests](https://playwright.dev/docs/getting-started-vscode#running-tests)

