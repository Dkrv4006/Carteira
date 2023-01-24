import styled from "styled-components"

export const Container = styled.div`
    padding: 25px 0;
    width: 800px;
    height: 80%;
    background: ${props=> props.theme.colors.primary};

    h1{
        font-weight:900;
        color: ${props=> props.theme.colors.white};
    }
`

export const Header = styled.header`
    width: 100% ;
    height: 80px;

    display: flex ;
    justify-content: space-between;


button{
    padding: 10px;
    background: ${props=> props.theme.colors.success};
    font-size: 20px;
    color: ${props=> props.theme.colors.white};
    border-radius: 10px;

    transition: filter 0.3s;

    &:hover{
        filter: brightness(0.9);
    }
}
`

export const Main = styled.div`
    width: 100%;
    height: 200px;

    display: flex;
    justify-content: space-between;

.tap-left, .tap-center, .tap-right{
    width: 32%;
    
    height: 95%;
    background: ${props=> props.theme.colors.secondary};
}
.tap-left{
    border-radius: 10px;
    border-top: 4px solid green;
}
.tap-center{
    border-radius: 10px;
    border-top: 4px solid blue;
}
.tap-right{
    border-radius: 10px;
    border-top: 4px solid royalblue;
}

`