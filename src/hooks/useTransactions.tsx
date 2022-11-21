import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Transaction {
  id: number;
  name: string;
  price: number;
  total: number;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

// interface TransactionInput { // mesma coisa que o código abaixo.
//   name: string;
//   price: number;
//   total: number;
//   type: string;
//   amount: number;
//   category: string;
// }

type TransactionInput = Omit<Transaction, 'id' | 'createdAt' | 'total'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions') //busca as informações da API
      .then(response => setTransactions(response.data.transactions)); //salva as informações buscadas no estado
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    // transactionInput.total = transactionInput.price * transactionInput.amount;

    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })

    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction,
    ]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}


