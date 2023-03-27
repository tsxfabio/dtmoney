import { createContext, ReactNode } from "react";

/* Inferfaces */

interface TransactionsProviderProps {
  children: ReactNode;
}

interface Transactions {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createAt: string;
}

interface TransactionsContextType {
  transections: Transactions[];
}

const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  return (
    <TransactionsContext.Provider value={{ transections: [] }}>
      {children}
    </TransactionsContext.Provider>
  );
}
