import styled, { css } from "styled-components";

export const DashboardContainer = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  margin-top: -5rem;
`;

interface DashboardCardProps {
  variant?: "green";
}

export const DashboardCard = styled.div<DashboardCardProps>`
  background-color: ${(props) => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem 3rem;
  margin: 0;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === "green" &&
    css`
      background-color: ${props.theme["green-700"]};
    `}
`;
