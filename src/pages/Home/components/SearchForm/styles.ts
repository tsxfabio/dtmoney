import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  input {
    flex: 1;
    padding: 1rem;
    border: 0;
    border-radius: 6px;
    background-color: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme.white};

    ::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    padding: 0.875rem 2rem;
    gap: 0.75rem;
    background-color: transparent;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["green-300"]};
    color: ${(props) => props.theme["green-300"]};

    :disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`;
