Expense Tracker

A full-stack web application for tracking income and expenses, built with a React frontend and an Express.js backend. The application allows users to register, log in, manage their income and expenses, visualize financial data, and download reports in Excel format.

Features
1. User authentication (register, login, and JWT-based authorization)
2. Add, view, and delete income and expense records
3. Dashboard with financial data visualizations using Recharts
4. Emoji picker for categorizing transactions
5. Excel report generation for income and expenses
6. Image upload for user profiles
7. Responsive design with Tailwind CSS
8. Smooth animations with Framer Motion
9. Real-time notifications with React Hot Toast


Tech Stack

1. Frontend
React: JavaScript library for building user interfaces
React Router: Client-side routing
Tailwind CSS: Utility-first CSS framework
Recharts: Charting library for data visualization
Framer Motion: Animation library
Axios: HTTP client for API requests
Emoji Picker React: Emoji selection component
React Hot Toast: Notification library
React Icons: Icon library
Moment: Date and time formatting
Vite: Build tool and development server
ESLint: Code linting

2. Backend
Express.js: Node.js web framework
MongoDB: NoSQL database
Mongoose: MongoDB object modeling
JWT: JSON Web Tokens for authentication
Bcrypt: Password hashing
Multer: File upload handling
XLSX: Excel file generation
CORS: Cross-Origin Resource Sharing
Dotenv: Environment variable management
Nodemon: Development server auto-restart

3. Prerequisites
Node.js: Version 18 or higher
MongoDB: Local or cloud instance (e.g., MongoDB Atlas)
npm: Package manager (comes with Node.js)

4. Installation

# Clone the Repository
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker

# Frontend Setup
Navigate to the frontend directory:
cd frontend

# Install dependencies:
npm install
Create a .env file in the frontend directory and add:
VITE_API_BASE_URL=http://localhost:5000


Start the development server:

npm run dev

The frontend will be available at http://localhost:5173.

Backend Setup





Navigate to the backend directory:

cd backend



Install dependencies:

npm install



Create a .env file in the backend directory and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

Replace your_mongodb_connection_string with your MongoDB URI and your_jwt_secret_key with a secure key.



Start the development server:

npm run dev

The backend will be available at http://localhost:5000.

API Endpoints
The base URL for the API is http://localhost:5000. Key endpoints include:
Authentication
POST /auth/login: User login
POST /auth/register: User registration
GET /auth/getUser: Get user information
POST /auth/upload-image: Upload user profile image

Dashboard
GET /dashboard/getDashboardDetails: Fetch dashboard data

Income
POST /income/add: Add income record
GET /income/get: Get all income records
DELETE /income/:incomeId: Delete an income record
GET /income/downloadExcel: Download income data as Excel

Expense
POST /expense/add: Add expense record
GET /expense/get: Get all expense records
DELETE /expense/:expenseId: Delete an expense record
GET /expense/downloadExcel: Download expense data as Excel

Scripts
Frontend
npm run dev: Start the development server
npm run build: Build for production
npm run lint: Run ESLint
npm run preview: Preview the production build

Backend
npm run start: Start the server
npm run dev: Start the server with Nodemon for auto-restart
npm run test: Placeholder for tests (not implemented)

Contributing
Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).

Open a pull request.
License
This project is licensed under the ISC License