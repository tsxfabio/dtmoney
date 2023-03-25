import { useEffect, useState } from "react";
import { DashboardBox } from "../../components/DashboardBox";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer, PriceHighLight, TableContainer } from "./styles";

interface TransactionsProps {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

export function Home() {
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
    <HomeContainer>
      <DashboardBox />
      <SearchForm />

      <TableContainer>
        <table>
          <tbody>
            {transactions.map((t) => {
              return (
                <tr>
                  <td width='50%'>{t.description}</td>
                  <td>
                    <PriceHighLight variant={t.type}>{t.price}</PriceHighLight>
                  </td>
                  <td>{t.category}</td>
                  <td>{t.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableContainer>
    </HomeContainer>
  );
}
