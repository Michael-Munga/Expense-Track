import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

export default function ExpenseForm({ onAddExpense }) {
  // State for form inputs
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  });
  // Hndle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create new expense object
    const newExpense = {
      title: formData.title,
      amount: formData.amount,
      date: formData.date,
    };

    onAddExpense(newExpense);
    // Reset form
    setFormData({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <div>
      <form className="expense-form" onSubmit={handleSubmit}>
        <h2>Add Expense</h2>

        <div className="form-item">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Expense"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-item">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            placeholder="Ksh"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-item">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}
