
import { useContext, useEffect, useState } from "react"
import { api } from "../../Servers/api"
import { Transaction } from "../../Transaction"
import { Container } from "./style"



export const Table: React.FC = () => {

  const transactions = useContext(Transaction)

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