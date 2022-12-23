import styled from "styled-components"

export const Container = styled.div`
       grid-area: NL;
      background-color: ${props=> props.theme.colors.secondary};
      position: sticky;
      top: 0;
      height: 100vh;
      

h2{
      color: blue;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.logo{
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 10px;
      transition: all 2s;
}

.sidebar{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      width: 100%;
      height: 100vh;
      transition: all 1s;
      padding: 20px 0;
}
.link{
      display: flex;
      justify-content: start;
      align-items: center;
      width: 100%;
      height: 40px;
      margin-top:10px;
      padding: 0 5px;
    
      transition: all .5s;

      &:hover{
            background:${props=> props.theme.colors.tertiary};
      }
}
.icon{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      
      color: blue;

      > i{
            color: ${props=> props.theme.colors.white};
            font-size: 20px;
      }
    

}
.active{
      background: ${props=> props.theme.colors.tertiary};
      position: relative;
      &:hover{
            opacity: 0.2;
      }
}
.link > i{
      color: ${props=> props.theme.colors.white};
      margin: 10px;
      font-size: 30px;

      
}
.button{
      text-align: center;
      width: 100%;
      height: 50px;
      color: ${props=> props.theme.colors.white};
      font-size: 25px;
      padding: 10px;
   
     position: relative;
      
    
     
}
.fa-angles-left{
      position: absolute;
      right: 10px;
      top:5px;
      
      animation-duration: 5s;
      animation-name: slidein;

      &:hover{
            cursor: pointer;
            
      }
}

span{
      
      float: right;
      animation-duration: 5s;
      animation-name: slidein;
}
.fa-list{
      
            animation-duration: 5s;
            animation-name: slide;

            &:hover{
            cursor: pointer;
            ;
           
      }
      }

.text{
      color: ${props=> props.theme.colors.white};
      font-size: 20px;
      font-weight: 400;
      padding: 20px;
      transition: all 1s;
      animation-duration: 5s;
      animation-name: slidein;
}

@keyframes slidein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
@keyframes slide {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

`