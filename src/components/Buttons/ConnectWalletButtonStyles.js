import styled from "styled-components";


export const ConnectButton = styled.div`

    // background: rgb(89,115,254);
    border: none;
    border-radius: 15px;
    width: 180px;
    height: 30px;
    background: ${(props) => props.col};
    padding: 5px 10px;
    color: #fff;
    font-size: 17px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    vertical-align: middle;
    


    &:hover {
        transition: all 0.2s ease-in-out;
        background: rgb(77, 102, 235);
    }
`


export const Logo = styled.div`

   width: 50px;
   height: 50px;
   float: left;
   align-items: center;
   line-height: 40px;

   
`;

export const ButtonText = styled.div`
     
    line-height: 30px;
    letter-spacing: 1px; 
    text-align: left;
`
export const ButtonText1 = styled.div`
     
    line-height: 30px;
    letter-spacing: 1px; 
    text-align: center;
`

