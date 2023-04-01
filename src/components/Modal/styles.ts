import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import styled, { css } from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${(props) => props.theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    input {
      padding: 1rem;
      border-radius: 6px;
      border: 0;

      color: ${(props) => props.theme["gray-300"]};
      background-color: ${(props) => props.theme["gray-900"]};
    }

    button[type="submit"] {
      margin-top: 1.5rem;
      padding: 1rem;
      background-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};
      border: 0;
      border-radius: 6px;

      :hover {
        background-color: ${(props) => props.theme["green-300"]};
        transition: background-color 0.2s;
      }
    }
  }
`;

export const Close = styled(Dialog.Close)`
  line-height: 0;
  border: 0;
  background-color: transparent;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme["gray-500"]};
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme["gray-700"]};
  color: ${(props) => props.theme["gray-300"]};

  svg {
    color: ${(props) =>
      props.variant === "income"
        ? props.theme["green-300"]
        : props.theme["red-300"]};
  }

  &[data-state="checked"] {
    transition: background-color 0.2s;
    color: ${(props) => props.theme.white};
    background-color: ${(props) =>
      props.variant === "income"
        ? props.theme["green-500"]
        : props.theme["red-500"]};

    svg {
      transition: color 0.2s;
      color: ${(props) => props.theme.white};
    }
  }

  &[data-state="unchecked"]:hover {
    transition: background-color 0.2s;
    background-color: ${(props) => props.theme["gray-600"]};
  }
`;
