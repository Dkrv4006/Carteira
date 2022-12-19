
import { Container } from "./style"

import emojis from "../../utils/emjis"
import { useMemo } from "react"
import { Toggle } from "../Toggle"

export const Header: React.FC = () => {

 const emojes = useMemo(() => {
     let index = Math.floor(Math.random() * emojis.length)
     return emojis[index]
 }, [])

  return (
    <Container>
        <Toggle/>
       <div className="profile">
        <h3>Olá,{emojes}</h3>
        <span>Meu nome e daniel</span>
       </div>
    </Container>
  )
}
export const Togle = () =>{
  return(

    <h1>daniel</h1>
  )
} 