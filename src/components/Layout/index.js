

import { Aside } from "../Aside"
import { Contents } from "../Content"
import { Header } from "../Header"
import { Container } from "./style"
import { BrowserRouter} from 'react-router-dom'
import { Sidbar } from "../Sidbar";
export const Layout = ( { children }) => {
  return (
      
    <BrowserRouter>
    
        <Container>
            <Header/>
            
            <Contents>
              {children}
            </Contents>
            <Aside/>
        </Container>
    </BrowserRouter>
    

  )
}