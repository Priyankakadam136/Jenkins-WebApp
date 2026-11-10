
import { useState } from "react";

function ExpenseList({ expenses, onDeleteExpense }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter(
          (expense) => expense.category === selectedCategory
        );

  const formatTitle = (title) =>
    title.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="expense-list card">
      <div className="expense-list-header">
        <div>
          <h2>Recent Transactions</h2>
          <p className="transaction-count">
            {filteredExpenses.length} transactions
          </p>
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Health">Health</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {filteredExpenses.length === 0 ? (
        <div className="empty-state">
          <span>📋</span>
          <p>No expenses found</p>
          <small>Try another category or add a new expense.</small>
        </div>
      ) : (
        <div className="transaction-list">
          {filteredExpenses.map((expense) => (
            <div className="expense-item" key={expense.id}>
              <div className="transaction-info">
                <div className="category-icon">
                  {expense.category === "Food" && "🍔"}
                  {expense.category === "Travel" && "✈️"}
                  {expense.category === "Shopping" && "🛍️"}
                  {expense.category === "Bills" && "📄"}
                  {expense.category === "Health" && "💊"}
                  {expense.category === "Entertainment" && "🎬"}
                  {expense.category === "Other" && "📌"}
                </div>

                <div>
                  <h4>{formatTitle(expense.title)}</h4>
                  <p>
                    {expense.category} <span>•</span> {expense.date}
                  </p>
                </div>
              </div>

              <div className="expense-actions">
                <strong>
                  - ₹{expense.amount.toLocaleString("en-IN")}
                </strong>

                <button
                  className="delete-btn"
                  onClick={() => onDeleteExpense(expense.id)}
                  aria-label={`Delete ${expense.title}`}
                  title="Delete expense"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6h18" />
                    <path d="M8 6V4h8v2" />
                    <path d="m19 6-1 14H6L5 6" />
                    <path d="M10 11v5" />
                    <path d="M14 11v5" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseList;
