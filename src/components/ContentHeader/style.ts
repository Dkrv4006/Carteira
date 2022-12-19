import styled from "styled-components"

export const Container = styled.div`
    width: 800px;
    display: flex;
    justify-content: end;
    align-items: center;
    background: ${props=> props.theme.colors.primary};
    border-bottom: 2px solid ${props=> props.theme.colors.gray};


input{
    padding: 10px;
    border-radius: 20px;

}
.fa-user{
    background-color: ${props=> props.theme.colors.white};
    border-radius: 50%;
    padding: 10px;
}
h3{
    padding: 10px;
    font-weight: 200;
    color: ${props=> props.theme.colors.white};
}
.fa-angle-down{
    color: ${props=> props.theme.colors.white};
    border-radius: 50%;
    
}
.user{
    display: flex;
    align-items: center;
    width: auto;
    padding: 15px;

}
`