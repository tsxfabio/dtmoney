import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme["gray-900"]};
  width: 100%;
  height: 212px;

  .navBar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
    padding: 2.5rem 0;

    h1 {
      font-size: 1.5rem;
    }

    button {
      background-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme["white"]};
      font: 700 1rem "Roboto", sans-serif;
      padding: 0.75rem;
      border-radius: 6px;
      border: 1px solid transparent;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${(props) => props.theme["green-300"]};
      }
    }

    .iconeLogo {
      display: inherit;
      align-items: inherit;
      gap: 1rem;
    }
  }
`;
