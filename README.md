📝 MERN Blog Platform

A full-stack blogging application built using the **MERN stack** (MongoDB, Express.js, React, Node.js). The platform supports user authentication, post creation, commenting, and admin controls.

---

## 📌 Project Overview

This is a blog web app where users can:
- 🔐 Register and log in
- 📝 Create, edit, and delete their own blog posts
- 💬 Add comments to posts
- 🌐 Browse posts by categories and tags
- 🔒 Admins can manage all posts and users

---

## 🛠️ Tech Stack

### Backend:
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- Bcrypt (password hashing)

### Frontend:
- React
- Vite
- Tailwind CSS
- shadcn/ui components
- Axios for API calls
- React Router DOM

---

## 🚀 Features Implemented

- 🔐 **Authentication**: Register, login, JWT-based protected routes
- 🧑‍💻 **User roles**: Admin and regular users
- 📚 **Posts**: Create, read, update, delete (CRUD)
- 💬 **Comments**: Add/view comments on posts
- 🗂️ **Categories & tags**: Organize blog content
- 🌑 **Dark mode support**
- 📱 **Responsive design**
- 🧠 **Error handling**: User-friendly messages on auth & network issues

---

## 📸 Screenshots

### 🔐 Login Page
![Login Page](./screenshots/login.png)

### 🏠 Dashboard
![Dashboard](./screenshots/dashboard.png)

### 📝 Create Post
![Create Post](./screenshots/create-post.png)

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-4-mern-integration-assignment-Bella-winter.git
cd mern-blog
```
 ## 2. Backend Setup
bash
Copy code
cd server
pnpm install
Create a .env file in the server/ directory:

env
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/mernblog
JWT_SECRET=your_jwt_secret_key
Start the backend server:

bash
Copy code
pnpm run dev
## 3. Frontend Setup
bash
Copy code
cd ../client
pnpm install
Create a .env file in client/:

env
Copy code
VITE_API_URL=http://localhost:5000/api
Start the frontend:

bash
Copy code
pnpm run dev
```
## 🧪 API Documentation
🔑 Auth
Method	Endpoint	Description
POST	/auth/register	Register a new user
POST	/auth/login	Login user

## 📝 Posts
Method	Endpoint	Description
GET	/posts	Get all posts
POST	/posts	Create new post
GET	/posts/:id	Get post by ID or slug
PUT	/posts/:id	Update post
DELETE	/posts/:id	Delete post

## 💬 Comments
Method	Endpoint	Description
POST	/posts/:id/comments	Add comment to a post
## 🗂️ Categories
Method	Endpoint	Description
GET	/categories	Get all categories
POST	/categories	Create new category

## 🤝 Contributions
Feel free to fork the project and submit pull requests. All contributions are welcome!

## 📄 License
MIT License © 2025 Pauline Mwangi

### User Roles
- **Admin:** Can view and manage all users' tasks
- **Developer:** Can only manage their own tasks

## Project Structure

```
├── client/          # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── services/    # API services
│   │   └── utils/       # Utility functions
│   └── package.json
├── server/          # Express backend
│   ├── controllers/ # Route handlers
│   ├── middleware/  # Authentication middleware
│   ├── models/      # MongoDB models
│   ├── routes/      # API routes
│   └── package.json
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login

### Tasks
- `GET /api/tasks/me` - Get user's tasks
- `GET /api/tasks/all` - Get all tasks (admin only)
- `POST /api/tasks` - Create task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

