import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs';
import { App } from './App'

createServer({
  models: { //modelo do banco de dados, inserindo uma transação.
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          name: 'LotoFácil',
          price: 1500000,
          total: 1500000,
          amount: 1,
          type: 'deposit',
          category: 'Prosperidade',
          createdAt: new Date()
        },
        {
          id: 2,
          name: 'LotoMania',
          price: 2500000,
          total: 2500000,
          amount: 1,
          type: 'deposit',
          category: 'Prosperidade',
          createdAt: new Date()
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      // const data = request.requestBody;
      return schema.create('transaction', data);
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
