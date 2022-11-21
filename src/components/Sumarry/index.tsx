import { Content } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      if (transaction.amount >= 1) {
        acc.deposits += transaction.price * transaction.amount;
        acc.totalTransactions += transaction.price * transaction.amount;
      } else {
        acc.deposits += transaction.price;
        acc.totalTransactions += transaction.price;
      }
    } else if (transaction.type === 'withdraw') {
      if (transaction.amount >= 1) {
        acc.withdraws += transaction.price * transaction.amount;
        acc.totalTransactions += transaction.price * transaction.amount;
      } else {
        acc.withdraws += transaction.price;
        acc.totalTransactions -= transaction.price;
      }
    }
    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    totalTransactions: 0,
  });

  return (
    <Content>
      <div>
        <nav>
          <p>Entradas</p>
          <img src={incomeImg} alt="" />
        </nav>
        <h1>{Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.deposits)}</h1>
      </div>

      <div>
        <nav>
          <p>Saídas</p>
          <img src={outcomeImg} alt="" />
        </nav>
        <h1> - {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.withdraws)}</h1>
      </div>

      <div>
        <nav>
          <p>Total</p>
          <img src={totalImg} alt="" />
        </nav>
        <h1> {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.totalTransactions)}</h1>
      </div>
    </Content>
  )
}