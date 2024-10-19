import ExpenseList from "./components/expenses/ExpenseList";
import Layout from "./components/layout/Layout";
import { ExpenseProvider } from "./context/ExpenseContext";

export default function App() {
  return (
    <ExpenseProvider>
      <Layout>
        <ExpenseList />
      </Layout>
    </ExpenseProvider>
  );
}
