import styled from "styled-components"

export const Container = styled.div`
      grid-area: CT;
      height: 100vh;
      width: 100%;
      background-color: ${props=> props.theme.colors.primary};

      display: flex;
      flex-direction: column;
      align-items: center;
      
`