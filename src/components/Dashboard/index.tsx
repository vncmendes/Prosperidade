import { Container, MainContainer } from "./styles"
import { TransactionsTable } from "../TransactionsTable";
import { Summary } from "../Sumarry";

export function Dashboard() {

  return (
    <MainContainer>
      <Container>
        <Summary />
        <TransactionsTable />
      </Container>

    </MainContainer>
  )
}