import React from "react"
import { StyledHeader, StyledCart, StyledLogo, StyledContador, StyledNumber } from "./styleHeader"
import carrinho from "../../assets/-shopping-cart_90604.png"
import logo from "../../assets/Logo.png"

export const Header = ({showCarrinhoHandler, contador}) => {

return(
    <StyledHeader>
        <StyledLogo src={logo}/>
        {contador>0 && (<StyledContador>
            <StyledNumber>{contador}</StyledNumber>
        </StyledContador>)}
        <StyledCart onClick = {showCarrinhoHandler} src={carrinho}/> 
    </StyledHeader>
)
}