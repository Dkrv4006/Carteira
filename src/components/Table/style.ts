import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: auto;


table{
    width: 100%;
    height: auto;
    margin-top: 20px;
    border-spacing: 0 0.5rem;
    color: ${props=> props.theme.colors.white};
   
}

td{
    margin-top: 10px;
    background: ${props=> props.theme.colors.secondary};
    text-align: center;
    padding: 10px;
    
}  

.deposit{
    color: rgba(6, 180, 0, 1);
}

.withdraw{
    color: rgba(255,0,0);
}
      
`