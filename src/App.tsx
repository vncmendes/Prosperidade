import Modal from 'react-modal';
import { GlobalStyles } from "../src/styles/global"
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard"
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function openNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function closeNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onRequestOpenModal={openNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={closeNewTransactionModal} />
      <GlobalStyles />
    </TransactionsProvider>
  )
}
