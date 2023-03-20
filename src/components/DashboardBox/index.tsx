import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollar,
} from "@phosphor-icons/react";
import { DashboardCard, DashboardContainer } from "./styles";

export function DashboardBox() {
  return (
    <DashboardContainer>
      <DashboardCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color='#00B37E' />
        </header>
        <strong>R$ 17.400,00</strong>
      </DashboardCard>
      <DashboardCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color='#F75A68' />
        </header>
        <strong>R$ 17.400,00</strong>
      </DashboardCard>
      <DashboardCard variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color='#FFFFFF' />
        </header>
        <strong>R$ 17.400,00</strong>
      </DashboardCard>
    </DashboardContainer>
  );
}
