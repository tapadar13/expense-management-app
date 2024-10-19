import React from "react";
import Button from "../ui/Button";
import { Expense } from "../../types";

interface ExpenseItemProps {
  expense: Expense;
  onEdit: (expense: Expense) => void;
  onDelete: (id: string) => void;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({
  expense,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{expense.description}</h3>
        <p className="text-gray-600">
          {new Date(expense.date).toLocaleDateString()}
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-lg font-bold">₹{expense.amount.toFixed(2)}</span>
        <Button variant="secondary" onClick={() => onEdit(expense)}>
          Edit
        </Button>
        <Button onClick={() => onDelete(expense.id)}>Delete</Button>
      </div>
    </div>
  );
};

export default React.memo(ExpenseItem);
