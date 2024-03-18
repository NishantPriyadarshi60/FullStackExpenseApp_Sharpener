const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.get('/expenses', expenseController.getExpenses);
router.post('/expenses', expenseController.createExpense);
router.delete('/expenses/:id', expenseController.deleteExpense);
router.put('/expenses/:id', expenseController.updateExpense);

module.exports = router;