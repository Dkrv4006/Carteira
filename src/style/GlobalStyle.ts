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

.modal{
    width: 100%;
    max-width: 550px;
    height: 80%;
    margin: 0 auto;
    background: ${props=> props.theme.colors.primary};
    position: relative;
    border-radius: 10px;

}

.overlay{
    
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0, 0.6);

    display: flex;
    align-items: center;
    justify-content: center;

    
}
.btn{
    position: absolute;
   right: 0;
    padding: 10px;
    background: transparent;
    i{
        color: ${props=> props.theme.colors.white};
        font-size: 20px;
    }
}
    
`