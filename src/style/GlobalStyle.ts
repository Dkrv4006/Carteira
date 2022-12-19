import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --primary: ;
    --secondary: ;
    --tertiary: ;
    --quartenary: ;
    --quinary: ;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:  sans-serif;
}

body, html, #root{
    height: 100%;
}

*,button,input{
    border: 0;
    outline: 0;
  

}
button{
    cursor: pointer;
} 

a{
    text-decoration: none;
    
}

.flex{
    display: flex;
}
.f-direc{
    flex-direction: column;
}

.f-just{
    justify-content: center;
}
.a-intem{
    align-items: center;
}
    
`