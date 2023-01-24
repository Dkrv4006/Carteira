

import { Container } from "./style"

export const ContentHeader: React.FC = () => {
  return (
    <Container>
       <div className="user">
       <i className="fa-solid fa-user"></i>
          <h3>Daniel Kennedy</h3>
       <i className="fa-solid fa-angle-down"></i>
       </div>
    </Container>
  )
}