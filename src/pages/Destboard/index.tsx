
import { Container, Header, Main } from "./style"
import { api } from "../../Servers/api";
import { Table } from "../../components/Table";
import { useContext } from "react";
import { TransactionContext } from "../../Transaction";

interface IProps {
  open: () => void;
}

export const Dashboard: React.FC<IProps> = ({open}) => {

api.get('transaction')
.then(data => console.log(data.data)
)

const { newtransactions } = useContext(TransactionContext)


let balance = 0
 newtransactions.map(item => {
  if(item.type == 'deposit') balance += item.valor 
  else balance -=  item.valor
})

let moviment = 0
 newtransactions.map(item => {
  if(item.type) moviment += item.valor 
})
let expenses = 0
 newtransactions.map(item => {
  
  if(item.type == 'withdraw') expenses += item.valor 

})

  return (
    <Container>
      <Header>
        <div className="dash">
          <h1>Dashboard</h1>
        </div>
        <div className="button">
          <button onClick={open} ><span>+</span> Add pague</button>
        </div>
      </Header>
    

      <Main>

        <div className="tap-left">
          <div className="header"><h2>Saldo</h2></div>
          <div className="prece">{new Intl.NumberFormat('pt-BR',{
              style: 'currency',
              currency: 'BRL'
            }).format(balance)}</div>
        </div>
        <div className="tap-center">
          <div className="header"><h2>Movimentação</h2></div>
          <div className="prece">{new Intl.NumberFormat('pt-BR',{
              style: 'currency',
              currency: 'BRL'
            }).format(moviment)}</div>
        </div>
        <div className="tap-right">
          <div className="header"><h2>Despesas</h2></div>
          <div className="prece">{new Intl.NumberFormat('pt-BR',{
              style: 'currency',
              currency: 'BRL'
            }).format(expenses)}</div>
        </div>
      </Main>

      <Table/>
      
    </Container>
  )
}