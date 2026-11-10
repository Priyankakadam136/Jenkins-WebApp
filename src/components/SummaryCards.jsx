import React from 'react'


function SummaryCards({ totalIncome, totalExpenses, balance }) {
  const cards = [
    {
      title: "Total Income",
      amount: totalIncome,
      className: "income",
      icon: "↗",
    },
    {
      title: "Total Expenses",
      amount: totalExpenses,
      className: "expense",
      icon: "↘",
    },
    {
      title: "Available Balance",
      amount: balance,
      className: "balance",
      icon: "₹",
    },
  ];

  return (
    <div className="summary-cards">
      {cards.map((card) => (
        <div className={`summary-card ${card.className}`} key={card.title}>
          <div className="summary-top">
            <p>{card.title}</p>
            <span className="summary-icon">{card.icon}</span>
          </div>

          <h2>
            ₹{card.amount.toLocaleString("en-IN")}
          </h2>
          <span className="summary-caption">
            Your financial overview
          </span>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;

