import { Container } from "./style"
import Switch from 'react-switch'
import { useState } from "react"


export const Toggle: React.FC = () => {
  let [state, setState] = useState(false)


  return (
    <Container>
        <Switch 
        onChange={() => setState(!state)}
        uncheckedIcon={false}
        checkedIcon={false}
        checked={state}
         />
    </Container>
  )
}