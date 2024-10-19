import React, { useState, useMemo } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseItem from "./ExpenseItem";
import Button from "../ui/Button";
import { useExpenses } from "../../context/ExpenseContext";
import { Expense } from "../../types";

const ExpenseList: React.FC = () => {
  const { expenses, deleteExpense } = useExpenses();
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  const [isAddingExpense, setIsAddingExpense] = useState(false);

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
      <div className="space-y-4">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <div className="mt-6 text-xl font-bold">
        Total Expenses: ${totalExpenses.toFixed(2)}
      </div>
    </div>
  );
};

export default ExpenseList;
