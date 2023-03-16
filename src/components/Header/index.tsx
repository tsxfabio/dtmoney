import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div className='navBar'>
        <div className='iconeLogo'>
          <img src='/src/assets/Ignitesimbol.svg' alt='logo' />
          <h1>DT Money</h1>
        </div>
        <button className='novaTransacao'>Nova transação</button>
      </div>
    </HeaderContainer>
  );
}
