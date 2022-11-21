import FlordaVida from '../../assets/flordavida.png';
import { Container, Content, NavContainer } from './styles';

interface HeaderProps {
  onRequestOpenModal: () => void;
}

export function Header({ onRequestOpenModal }: HeaderProps) {
  // const [transations, setTransactions] = useState<Transaction[]>([]);
  return (
    <Container>
      <Content>
        <NavContainer>
          <nav>
            <h1>Prosperidade</h1>
          </nav>
          <div>
            <img src={FlordaVida} />
          </div>
          <div>
            <button onClick={onRequestOpenModal}>Nova Transação</button>
          </div>
        </NavContainer>
      </Content>
    </Container >
  )
}