import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollar,
} from "@phosphor-icons/react";
import { useDashboardData } from "../../hooks/useDashboardData";
import { currencyFormatter } from "../../utils/formatter";
import { DashboardCard, DashboardContainer } from "./styles";

export function DashboardBox() {
  const dashboardData = useDashboardData();

  return (
    <DashboardContainer>
      <DashboardCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color='#00B37E' />
        </header>
        <strong>{currencyFormatter.format(dashboardData.income)}</strong>
      </DashboardCard>
      <DashboardCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color='#F75A68' />
        </header>
        <strong>{currencyFormatter.format(dashboardData.outcome)}</strong>
      </DashboardCard>
      <DashboardCard variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color='#FFFFFF' />
        </header>
        <strong>{currencyFormatter.format(dashboardData.total)}</strong>
      </DashboardCard>
    </DashboardContainer>
  );
}
