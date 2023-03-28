import { useContext, useEffect, useState } from "react";
import { DashboardBox } from "../../components/DashboardBox";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer, PriceHighLight, TableContainer } from "./styles";

export function Home() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <HomeContainer>
      <DashboardBox />
      <SearchForm />

      <TableContainer>
        <table>
          <tbody>
            {transactions.map((t) => {
              return (
                <tr key={t.id}>
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
