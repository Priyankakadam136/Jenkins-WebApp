
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

const initialExpenses = [
  {
    id: 1,
    title: "Grocery Shopping",
    category: "Food",
    date: "2026-11-08",
    amount: 1500,
  },
  {
    id: 2,
    title: "Electricity Bill",
    category: "Bills",
    date: "2026-11-07",
    amount: 2000,
  },
  {
    id: 3,
    title: "Movie Tickets",
    category: "Entertainment",
    date: "2026-11-06",
    amount: 500,
  },
];

function App() {
  const [expenses, setExpenses] = useState(() => {
    try {
      const savedExpenses = localStorage.getItem("expenses");
      return savedExpenses
        ? JSON.parse(savedExpenses)
        : initialExpenses;
    } catch {
      return initialExpenses;
    }
  });

  const totalIncome = 25000;

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const balance = totalIncome - totalExpenses;

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [
      newExpense,
      ...prevExpenses,
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  return (
    <div className="app">
      <Navbar />

      <main className="dashboard">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Track your income and expenses in one place.</p>
        </div>

        <SummaryCards
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
          balance={balance}
        />

        <div className="content-grid">
          <ExpenseForm onAddExpense={addExpense} />

          <ExpenseList
            expenses={expenses}
            onDeleteExpense={deleteExpense}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
