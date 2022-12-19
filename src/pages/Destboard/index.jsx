
import { ContentHeader } from "../../components/ContentHeader"
import { Container, Header, Main } from "./style"

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <div className="dash">
          <h1>Dashboard</h1>
        </div>
        <div className="btn">
          <button><span>+</span> Add pague</button>
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
      
    </Container>
  )
}