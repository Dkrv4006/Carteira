
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

interface ITransactionProps {
    children: ReactNode
}
export const Transaction = createContext<ITransaction[]>([])

export function TransactionProvaide({children}:ITransactionProps) {

    const [transactions, setnewtransaction] = useState<ITransaction[]>([])

useEffect(() => {
  api.get('transaction')
  .then(response => setnewtransaction(response.data.transactions)
  )

}, [])


    return(
        <Transaction.Provider value={transactions}>
            {children}
        </Transaction.Provider>
    )

}