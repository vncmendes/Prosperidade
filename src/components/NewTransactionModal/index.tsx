// import { Container, Content } from "./styles";
import Modal from 'react-modal';
import { FormEvent, useContext, useState } from 'react';
import close from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import { BoxActions, FormContainer, TransactionBoxActions } from '../Header/styles';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("deposit");
  const [category, setCategory] = useState("");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      name,
      price,
      amount,
      type,
      category
    })

    setName('');
    setPrice(0);
    setAmount(0);
    setType('deposit');
    setCategory('');

    onRequestClose();

  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay" //setando essas classes os estilos padrões são resetados.
      className="react-modal-content" //setando essas classes os estilos padrões são resetados.
    >
      <button
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={close} alt="" />
      </button>

      <FormContainer onSubmit={handleCreateNewTransaction}>
        <h1>Cadastrar Transação</h1>

        <input
          type="text"
          placeholder='Nome'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          placeholder='Preço'
          value={price}
          min={1}
          onChange={(event) => setPrice(Number(event.target.value))}
        />
        <input
          type="number"
          placeholder='Quantidade'
          value={amount}
          min={1}
          onChange={(event) => setAmount(Number(event.target.value))}

        />
        <TransactionBoxActions>
          <BoxActions
            type="button"
            onClick={() => { setType('deposit'); }}
            isActive={type === 'deposit'}
            activeColor={'green'}
          >
            <img src={income} alt="abrir" />
            Entrada
          </BoxActions>
          <BoxActions
            type="button"
            onClick={() => { setType('withdraw'); }}
            isActive={type === 'withdraw'}
            activeColor={'red'}
          >
            <img src={outcome} alt="fechar" />
            Saída
          </BoxActions>

        </TransactionBoxActions>

        <input
          type="text"
          placeholder='Categoria'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </FormContainer>
    </Modal>
  )

}