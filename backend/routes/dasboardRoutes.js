import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { getDashboardData } from '../controllers/dashboardController.js';

const dashboardRoutes = express.Router();
dashboardRoutes.get('/getDashboardDetails', protect, getDashboardData);

export default dashboardRoutes;