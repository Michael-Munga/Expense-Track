import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

export default function ExpenseForm({ onAddExpense }) {
  // State for form inputs
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new expense object
    const newExpense = {
      title,
      amount,
      date,
    };

    onAddExpense(newExpense);

    // Clear the form
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div>
      <form className="expense-form" onSubmit={handleSubmit}>
        <h2>Add Expense</h2>

        <div className="form-item">
          <label>Title</label>
          <input
            type="text"
            placeholder="Expense"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-item">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Ksh"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="form-item">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}
