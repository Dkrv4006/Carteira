import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { App } from './App';
import{createServer, Model} from 'miragejs'

const data = new Date()

createServer({

  

  models:{
    transactions: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id:1,
          title:'projetos',
          type: 'deposit',
          category: 'Javascript',
          valor: 4005,
          createdAt: data
        },
        {
          id:2,
          title:'Trabalho',
          type: 'withdraw',
          category: 'React js',
          valor: 1005,
          createdAt: new Date('2022-12-23 02:15:00')
        },
      ]
    })
  },
  routes(){
    this.namespace='api';

    this.get('transaction', () => {
       return this.schema.all('transactions')
    })

    this.post('transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transactions',data)
    })
  }
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProSidebarProvider>
      
    <App />
    </ProSidebarProvider>
  </React.StrictMode>
);
