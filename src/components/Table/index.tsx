
import { useEffect, useState } from "react"
import { api } from "../../Servers/api"
import { Container } from "./style"

interface ITransaction {
  
    id:number,
    title:string,
    type: string,
    category: string,
    valor: number,
    createdAt: string

}

export const Table: React.FC = () => {

const [transactions, setnewtransaction] = useState<ITransaction[]>([])

useEffect(() => {
  api.get('transaction')
  .then(response => setnewtransaction(response.data.transactions)
  )

}, [])
  return (
    <Container>

<table>
    <thead>
        <tr>
            
            <th>Title</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
        </tr>
    </thead>
    <tbody>
      {transactions.map(transaction => {

        return(
        <tr key={transaction.id}>

            <td>{transaction.title}</td>
            <td className={transaction.type} >{new Intl.NumberFormat('pt-BR',{
              style: 'currency',
              currency: 'BRL'
            }).format(transaction.valor)}</td>
            <td>{transaction.category}</td>
            <td>{new Intl.DateTimeFormat('pt-BR').format(
              new Date(transaction.createdAt)
            )}</td>
            
        </tr>
        );
      })}
    </tbody>
</table>
    </Container>
  )
}