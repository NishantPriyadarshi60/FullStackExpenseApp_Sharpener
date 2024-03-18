const Expense = require('./models/expenseModel');

exports.getExpenses = (req, res, next) => {
    Expense.getAllExpenses((err, expenses) => {
        if (err) {
            return next(err);
        }
        res.render('expenses', { expenses });
    });
};

exports.createExpense = (req, res, next) => {
    const { amount, description, category } = req.body;
    const newExpense = { amount, description, category };

    Expense.createExpense(newExpense, (err, result) => {
        if (err) {
            return next(err);
        }
        res.redirect('/api/expenses');
    });
};

exports.deleteExpense = (req, res, next) => {
    const expenseId = req.params.id;

    Expense.deleteExpense(expenseId, (err, result) => {
        if (err) {
            return next(err);
        }
        res.redirect('/api/expenses');
    });
};

exports.updateExpense = (req, res, next) => {
    const expenseId = req.params.id;
    const { amount, description, category } = req.body;
    const updatedExpense = { amount, description, category };

    Expense.updateExpense(expenseId, updatedExpense, (err, result) => {
        if (err) {
            return next(err);
        }
        res.redirect('/api/expenses');
    });
};