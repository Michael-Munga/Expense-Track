import React from "react";
import "./ExpenseList.css";

export default function ExpenseList({ items }) {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount </th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {items.map((expense, index) => (
            <tr key={index}>
              <td>{expense.title}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
