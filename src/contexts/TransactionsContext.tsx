import { createContext, ReactNode, useEffect, useState } from "react";

/* Inferfaces */
interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsProps {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionsContextType {
  transactions: TransactionsProps[];
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  async function loadTransactions() {
    const response = await fetch("http://localhost:3333/tansactions");
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
