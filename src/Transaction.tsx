
import { createContext, ReactNode, useEffect, useState }  from 'react'
import { api } from './Servers/api'

interface ITransaction {
    
    id:number,
    title:string,
    type: string,
    category: string,
    valor: number,
    createdAt: string
    
}

type TransactionInput = Omit<ITransaction, 'id' | 'createdAt'>

interface ITransactionProps {
    children: ReactNode
}

interface ITransactionData{
    newtransactions: ITransaction[]
    createTransaction: (transaction: TransactionInput) => Promise<void>

}
export const TransactionContext = createContext<ITransactionData>({} as ITransactionData)

export function TransactionProvaide({children}:ITransactionProps) {

    const [newtransactions, setnewtransaction] = useState<ITransaction[]>([])

useEffect(() => {
  api.get('transaction')
  .then(response => setnewtransaction(response.data.transactions)
  
  )
  
}, [])


async function createTransaction( transactionInput: TransactionInput ){
    console.log('1');
    const response = await api.post('/transaction', { 
        
        ...transactionInput, 
        createdAt: new Date()
    })
    const { transactions } = response.data
      console.log(transactions);
      
    setnewtransaction([
        ...newtransactions,
        transactions
    ])
      
}


    return(
        <TransactionContext.Provider value={{ newtransactions, createTransaction  }}>
            {children}
        </TransactionContext.Provider>
    )

}