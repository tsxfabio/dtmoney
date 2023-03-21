import * as Dialog from "@radix-ui/react-dialog";
import { Overlay } from "./styles";

export function Modal() {
  return (
    <div>
      <Overlay />
      <Dialog.Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <Dialog.Close />
      </Dialog.Content>
    </div>
  );
}
