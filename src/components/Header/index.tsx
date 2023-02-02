
import { Container } from "./style"

import emojis from "../../utils/emjis"
import { useContext, useMemo } from "react"
import { ThemeContext } from "../../style/state"

interface IProps {
   open?: () => void;
}

export const Header: React.FC<IProps> = ({open}) => {

 const emojes = useMemo(() => {
     let index = Math.floor(Math.random() * emojis.length)
     return emojis[index]
 }, [])

 const { toggleTheme } = useContext(ThemeContext)

  return (
    <Container>
        
        
       <div className="profile">
        <h3>Olá,{emojes}</h3>
        
       </div>
       <button onClick={toggleTheme}>tema</button>
    </Container>
  )
}
export const Togle = () =>{
  return(

    <h1></h1>
  )
} 