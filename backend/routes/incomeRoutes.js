import express from 'express';
import { addIncome, deleteIncome, downloadIncomeExcel, getAllIncome } from '../controllers/incomeController.js';
import { protect } from '../middlewares/authMiddleware.js';

const incomeRoutes = express.Router();

incomeRoutes.post('/add', protect, addIncome);
incomeRoutes.get('/get', protect, getAllIncome);
incomeRoutes.delete('/:id', protect, deleteIncome);
incomeRoutes.get('/downloadExcel', protect, downloadIncomeExcel);

export default incomeRoutes;