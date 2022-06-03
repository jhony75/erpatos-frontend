/* eslint-disable react/function-component-definition */
import Link from 'next/link';

const Header = () => (
  <>
    <p>Pato</p>
    <nav>
      <Link href="plans">
        <a>Planos</a>
      </Link>
      <Link href="tools">
        <a>Ferramentas</a>
      </Link>
      <Link href="contact">
        <a>Fale Conosco</a>
      </Link>
      <Link href="login">
        <a>Login</a>
      </Link>
      <Link href="signup">
        <a>Assine Agora!</a>
      </Link>
    </nav>
  </>
);

export { Header };
