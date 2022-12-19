import styled from "styled-components"

export const Container = styled.header`
      grid-area: NR;

     
      padding: 15px;
      /* border-bottom: 1px solid ${props=> props.theme.colors.gray} ; */
      background-color: ${props=> props.theme.colors.secondary};
      

      h3, span{
            color: ${props=> props.theme.colors.white};
      }
      
`