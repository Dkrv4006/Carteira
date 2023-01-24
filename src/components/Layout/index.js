

import { Aside } from "../Aside"
import { Contents } from "../Content"
import { Header } from "../Header"
import { Container } from "./style"
import { BrowserRouter} from 'react-router-dom'
import  Modal  from 'react-modal'
import { useState } from "react"
export const Layout = ( { children }) => {

  const [isNewTresictionOpenModal, setIsNewTresictionOpenModal] = useState(false)

  function hadleOpen(){
    setIsNewTresictionOpenModal(true)
  }
  function hadleClose(){
    setIsNewTresictionOpenModal(false)
  }

  return (
      
    <BrowserRouter>
    
        <Container>
            <Aside/>
            
            <Contents>
              {children}
            </Contents>
            <Header open={hadleOpen}/>

            <Modal
            // appElement={document.getElementById("hereIsYourRootElementId")}
        isOpen={isNewTresictionOpenModal}
        ariaHideApp={false}
        onRequestClose={hadleClose}
        appElement={document.getElementById('#root')}
        contentLabel="Example Modal"
      ></Modal>

        </Container>
    </BrowserRouter>
    

  )
}