import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: inline-flex;
  flex-direction: column;

  background-color: ${(props) => props.theme["gray-600"]};
  border: 1px solid transparent;
  border-radius: 6px;
`;
