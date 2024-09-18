# MERN-Chat-App

  
  [Live Demo Link](https://yoo-app.onrender.com/)


# Real-Time Chat Application

A full-featured chat application with user authentication, one-on-one messaging, group chats, and real-time notifications.

## Features

- User Authentication:
  - Registration with email and password
  - Secure login with JWT token
  - Password hashing using bcryptjs
  - Logout functionality

- Chat Functionality:
  - One-on-one messaging
  - Group chat creation
  - Real-time messaging using Socket.io
  - User search functionality

- Group Chat Management:
  - Update group name
  - Add users to group (admin only)
  - Remove users from group (admin only)

- Profile Management:
  - Upload profile picture using Cloudinary
  - Store profile picture URL in database

- Real-time Notifications:
  - Receive notifications for new messages

## Tech Stack

- Frontend:
  - React.js
  - Chakra UI

- Backend:
  - Node.js
  - Express.js
  - MongoDB (assumed based on typical MERN stack)
  - Socket.io for real-time communication

- Authentication:
  - JSON Web Tokens (JWT)
  - bcryptjs for password hashing

- File Upload:
  - Cloudinary

## Installation

1. Clone the repository
   ```
   git clone [your-repo-link]
   ```

2. Install dependencies for backend
   ```
   cd backend
   npm install
   ```

3. Install dependencies for frontend
   ```
   cd frontend
   npm install
   ```

4. Set up environment variables
   Create a `.env` file in the backend directory with the following:
   ```
   PORT=5000
   MONGODB_URI=[Your MongoDB URI]
   JWT_SECRET=[Your JWT Secret]
   ```

5. Run the application
   - Backend: `npm run server`
   - Frontend: `npm start`

## Usage

1. Register a new account or login with existing credentials.
2. Once logged in, you can:
   - Search for users to start a one-on-one chat
   - Create a group chat
   - Send and receive messages in real-time
   - Manage group chats (if you're an admin)
   - Upload  your profile picture

## API Endpoints

[ 
userRoutes,
MessageRoutes,
ChatRoutes
]



## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.



## Acknowledgements

- Socket.io
- Cloudinary

