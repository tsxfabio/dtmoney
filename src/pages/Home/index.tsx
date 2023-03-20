import { DashboardBox } from "../../components/DashboardBox";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer, PriceHighLight, TableContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <DashboardBox />
      <SearchForm />

      <TableContainer>
        <table>
          <tbody>
            <tr>
              <td width='50%'>Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant='income'>R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width='50%'>Hamburguer</td>
              <td>
                <PriceHighLight variant='outcome'>-R$ 59,00</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>12/04/2022</td>
            </tr>
          </tbody>
        </table>
      </TableContainer>
    </HomeContainer>
  );
}
