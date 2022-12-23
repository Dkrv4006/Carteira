
import { Container } from "./style"

import emojis from "../../utils/emjis"
import { useMemo } from "react"
import { Toggle } from "../Toggle"

interface IProps {
   open?: () => void;
}

export const Header: React.FC<IProps> = ({open}) => {

 const emojes = useMemo(() => {
     let index = Math.floor(Math.random() * emojis.length)
     return emojis[index]
 }, [])

  return (
    <Container>
        
        
       <div className="profile">
        <h3>Olá,{emojes}</h3>
        
       </div>
    </Container>
  )
}
export const Togle = () =>{
  return(

    <h1></h1>
  )
} 