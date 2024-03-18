const db = require("../database");

const Expense = {
    getAllExpense: (callback) => {
        db.query('SELECT * FROM Expense', callback);
    },

    createExpense: (expense, callback) => {
        db.query('INSERT INTO Expense SET ?', expense, (err, result) => {
            if (err) {
                console.error("Error creating expense :", err);
                return callback(err, null)
            };
            callback(null, result)
        });
    },

    deleteExpense: (expenseId, callback) => {
        db.query('DELETE FROM Expense WHERE id = ?', expenseId, (err, result) => {
            if (err) {
                console.error('Error deleting expense', err);
                return callback(err, null)
            }
            callback(null, result);
        });
    },

    updateExpense: (expenseId, callback) => {
        db.query('UPDATE EXPENSE SET ? WHERE id = ?', [expense, expenseId], (err, result) => {
            if (err) {
                console.error('Error updating expense:', err);
                return callback(err, null)
            }
            callback(null, result)
        })
    },

    getExpenseById: (expenseId, callback) => {
        db.query('SELECT * FROM Expense WHERE id = ?', expenseId, (err, result) => {
            if (err) {
                console.error('Error fetching expense:', err);
                return callback(err, null);
            }
            callback(null, result[0]);
        });
    }
};

module.exports = Expense;