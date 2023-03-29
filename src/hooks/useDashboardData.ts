import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useDashboardData() {
  const { transactions } = useContext(TransactionsContext);

  const dashboardData = transactions.reduce(
    (acc, transactions) => {
      if (transactions.type === "income") {
        acc.income += transactions.price;
        acc.total += transactions.price;
      } else {
        acc.outcome += transactions.price;
        acc.total -= transactions.price;
      }
      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return dashboardData;
}
