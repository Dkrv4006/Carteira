import styled from "styled-components"

export const Container = styled.div`
      background: red;
      grid-area: NL;
      width: 100%;

.active{
      display: none;
      font-size: 30px;
}

.a{
      width: 100px;
      height: 100px;
      cursor: pointer;
}

.a:hover .active{
      display: inline;
}

`