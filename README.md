# SecureBook 

An Express-based Contact Application that provides a RESTful API for managing a contact database and user authentication. This project leverages MongoDB for data persistence, JWT for secure user authentication, and bcrypt for password hashing.

## Features

- **CRUD Operations**: Full Create, Read, Update, and Delete (CRUD) functionality for the contacts database.
- **User Authentication**: User registration and login using JWT authentication.
- **Password Security**: Passwords are securely hashed using bcrypt.
- **Collections**:
  - `users`: Stores user information with hashed passwords.
  - `contacts`: Stores contact details for each user.
- **Rapid Development**: Uses nodemon for fast reloads during development.

## Technologies Used

- **Backend**: Express.js , Node.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcrypt
- **Development Tool**: nodemon

## Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Allmight-456/Express_Contact_app.git
   cd Express_Contact_app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

   Dependencies include:
   - `bcrypt`
   - `jsonwebtoken`
   - `express-async-handler`
   - `mongoose`
   - `dotenv`

3. Set up your environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT = 5001
     MONGO_URI=<your_mongo_database_uri>
     JWT_SECRET=<your_jwt_secret>
     ```

4. Start the server:
   ```bash
   npm start
   ```
   Use `nodemon` for development:
   ```bash
   npm run dev
   ```

## API Endpoints

### User Routes

- **Register User**
  - `POST /api/users/register`
  - Request Body: `{ name, email, password }`

- **Login User**
  - `POST /api/users/login`
  - Request Body: `{ email, password }`

- **Get Current User**
  - `GET /api/users/current`
  - Requires a valid JWT.

### Contact Routes

- **Create Contact**
  - `POST /api/contacts`

- **Read Contacts**
  - `GET /api/contacts`

- **Update Contact**
  - `PUT /api/contacts/:id`

- **Delete Contact**
  - `DELETE /api/contacts/:id`

All contact routes require a valid JWT.

## Tools for API Testing

- Use **Thunder Client** (VS Code Extension) or **Postman** to send HTTP requests to the backend API.

## Development Notes

- The application uses two MongoDB collections:
  - `users` for storing user details with hashed passwords.
  - `contacts` for storing contact details.
- Authentication is required for all contact-related operations.

## Repository

Find the source code [here](https://github.com/Allmight-456/Express_Contact_app.git).

## License

This project is licensed under the MIT License.

