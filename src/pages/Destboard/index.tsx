
import { Container, Header, Main } from "./style"
import { api } from "../../Servers/api";
import { Table } from "../../components/Table";

interface IProps {
  open: () => void;
}

export const Dashboard: React.FC<IProps> = ({open}) => {

api.get('transaction')
.then(data => console.log(data.data)
)

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
          <div className="header"></div>
          <div className="prece"></div>
        </div>
        <div className="tap-center">
          <div className="header"></div>
          <div className="prece"></div>
        </div>
        <div className="tap-right">
          <div className="header"></div>
          <div className="prece"></div>
        </div>
      </Main>

      <Table/>
      
    </Container>
  )
}