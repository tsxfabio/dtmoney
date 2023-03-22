import { HeaderContainer } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { Modal } from "../Modal";

export function Header() {
  return (
    <HeaderContainer>
      <div className='navBar'>
        <div className='iconeLogo'>
          <img src='/src/assets/Ignitesimbol.svg' alt='logo' />
          <h1>DT Money</h1>
        </div>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className='novaTransacao'>Nova transação</button>
          </Dialog.Trigger>
          <Modal />
        </Dialog.Root>
      </div>
    </HeaderContainer>
  );
}
