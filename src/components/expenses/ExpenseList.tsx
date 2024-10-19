import React, { useState, useMemo } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseItem from "./ExpenseItem";
import Button from "../ui/Button";
import { useExpenses } from "../../context/ExpenseContext";
import { Expense } from "../../types";
import Input from "../ui/Input";

const ExpenseList: React.FC = () => {
  const { expenses, deleteExpense } = useExpenses();
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  const [isAddingExpense, setIsAddingExpense] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExpenses = useMemo(() => {
    return expenses.filter((expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [expenses, searchTerm]);

  const totalExpenses = useMemo(() => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  }, [expenses]);

  const handleEdit = (expense: Expense) => {
    setEditingExpense(expense);
    setIsAddingExpense(false);
  };

  const handleDelete = (id: string) => {
    deleteExpense(id);
  };

  const handleCancelEdit = () => {
    setEditingExpense(null);
    setIsAddingExpense(false);
  };

  return (
    <div>
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search expenses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-full border-2 border-purple-300 focus:border-purple-500 focus:outline-none transition-colors"
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Expenses</h2>
        <Button onClick={() => setIsAddingExpense(true)}>Add Expense</Button>
      </div>
      {isAddingExpense && (
        <ExpenseForm onCancel={() => setIsAddingExpense(false)} />
      )}
      {editingExpense && (
        <ExpenseForm
          expenseToEdit={editingExpense}
          onCancel={handleCancelEdit}
        />
      )}

      {filteredExpenses.length === 0 ? (
        <p className="text-gray-500 text-center py-4">
          {searchTerm
            ? "No matching expenses found."
            : "No expenses added yet. Start by adding an expense!"}
        </p>
      ) : (
        <div className="space-y-4">
          {filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
      <div className="mt-6 text-xl font-bold">
        Total Expenses: ₹{totalExpenses.toFixed(2)}
      </div>
    </div>
  );
};

export default ExpenseList;
