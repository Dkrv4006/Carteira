
import { Button } from "@mui/material"
import { SelectInput } from "../SelectInput"
import { Container } from "./style"
import { MdOutlineSearch } from "react-icons/md";
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