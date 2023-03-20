import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const TableContainer = styled.div`
  width: 100%;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;

    td {
      padding: 1.25rem 0.5rem;
      background-color: ${(props) => props.theme["gray-700"]};

      &:first-child {
        padding-left: 2rem;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        padding-right: 2rem;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }
`;

interface PriceHighLightProps {
  variant: "income" | "outcome";
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`;
