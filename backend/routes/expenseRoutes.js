import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { addExpense, deleteExpense, downloadExpenseExcel, getAllExpense } from '../controllers/expenseController.js';

const expenseRoutes = express.Router();

expenseRoutes.post('/add', protect, addExpense);
expenseRoutes.get('/get', protect, getAllExpense);
expenseRoutes.delete('/:id', protect, deleteExpense);
expenseRoutes.get('/downloadExcel', protect, downloadExpenseExcel);

export default expenseRoutes;