import React from "react";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";
import SearchBar from "./Components/SearchBar";
import { useState } from "react";

import "./App.css";

function App() {
  // all expenses
  const [expenses, setExpenses] = useState([]);

  // search input
  const [searchTerm, setSearchTerm] = useState("");
  // Handle search term change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle adding a new expense
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };
  // Function to filter expenses
  const filterExpenses = (expenses, searchTerm) => {
    return expenses.filter((expense) =>
      expense.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div>
      <h1 className="page-title">Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList items={filterExpenses(expenses, searchTerm)} />
    </div>
  );
}

export default App;
