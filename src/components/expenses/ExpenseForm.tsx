import React, { useState } from "react";
import { useExpenses } from "../../context/ExpenseContext";
import Input from "../ui/Input";
import Button from "../ui/Button";

interface ExpenseFormProps {
  expenseToEdit?: {
    id: string;
    description: string;
    amount: number;
    date: string;
  };
  onCancel: () => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({
  expenseToEdit,
  onCancel,
}) => {
  const { addExpense, editExpense } = useExpenses();
  const [description, setDescription] = useState(
    expenseToEdit?.description || ""
  );
  const [amount, setAmount] = useState(expenseToEdit?.amount.toString() || "");
  const [date, setDate] = useState(expenseToEdit?.date || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const expenseData = {
      description,
      amount: parseFloat(amount),
      date,
    };

    if (expenseToEdit) {
      editExpense(expenseToEdit.id, expenseData);
    } else {
      addExpense(expenseData);
    }

    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Description
        </label>
        <Input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Amount
        </label>
        <Input
          id="amount"
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Date
        </label>
        <Input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {expenseToEdit ? "Update Expense" : "Add Expense"}
        </Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
