import styled from "styled-components"

interface Iprops{
    isType: Boolean;
    color: 'gren' | 'red'
}

export const Container = styled.form`
    width: 100%;
    height: 100%;

    padding: 40px;

    

input{
    width: 100%;
    padding: 1.5rem;
    margin-bottom: 20px;
    background: ${props=> props.theme.colors.secondary};

    font-size: 20px;
    color: rgba(150,150,150);
    border-radius: 20px;
    &::placeholder{
        color: rgba(150,150,150);
        font-size: 20px;
    }
}

.buttonForm{
    width: 100%;
    padding: 1.5rem;
    background: ${props=> props.theme.colors.success};
    font-size: 20px;
    color: ${props=> props.theme.colors.white};
    border-radius: 20px;

    transition: filter 0.3s;

    &:hover{
        filter: brightness(0.9);
    }
}

h2{
    color: ${props=> props.theme.colors.white};
    margin-bottom: 20px;
}

      
`

export const TransactionButton = styled.div`
display: flex;
justify-content: space-between;



`

const conlo = {
    gren: 'rgba(6, 180, 0, 0.2)',
    red: 'rgba(255,0,0,0.2)'
}

export const Button = styled.button<Iprops>`
    width: 48%;
    margin-bottom: 20px;
    color: ${props=> props.theme.colors.text};
    padding: 1.5rem;
    background: ${props=> props.isType ? conlo[props.color] : props=> props.theme.colors.secondary};
    font-size: 20px;
    border-radius: 20px;

    transition: filter 0.3s;

    &:hover{
        filter: brightness(0.9);
    }


    > .fa-arrow-trend-up{
        color: rgba(6, 180, 0, 1);
        

    }

    > .fa-arrow-trend-down{
        color: rgba(255,0,0,0.7);

    }



`