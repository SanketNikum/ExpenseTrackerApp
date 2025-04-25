import express from 'express';
import authRoutes from './authRoutes.js';
import incomeRoutes from './incomeRoutes.js';
import expenseRoutes from './expenseRoutes.js';
import dashboardRoutes from './dasboardRoutes.js';

const Routes = express.Router();

// Health Check Route
Routes.get('/health-check', (req, res) => {
  res.send('Welcome to the Expense Tracker API!');
});

// Common Routes
Routes.use('/auth', authRoutes);
Routes.use('/income', incomeRoutes);
Routes.use('/expense', expenseRoutes);
Routes.use('/dashboard', dashboardRoutes);




export default Routes;