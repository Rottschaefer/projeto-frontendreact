import styled from "styled-components"
import fundo from "../../assets/hd-wallpaper-2675322.jpg" //Resolver qual foto colocar no fundo do header//


export const StyledHeader = styled.header`
    height: 7vh;
    padding-left: 1rem;
    /* padding-top: 11px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
    /* background-image: url(${fundo}) ; */
    background-color: white;
    font-family: 'Kanit', sans-serif;
`

export const StyledCart = styled.img`
    margin-right: 0.7rem;
    width: 4vh;
    height: 4vh;
    position: relative;
`

export const StyledLogo = styled.img`
    margin-left: -30px;
    width: 25vh;
    height: 5vh;
`

export const StyledContador = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    color: white;
    background-color: black;
    position: absolute;
    right: 8px;
    top: 5px;
    border-radius: 50px;
    width: 20px;
    height: 20px;
`

export const StyledNumber = styled.p`
    position: absolute;
    right: 4px;
    bottom: 17px;
    color: white;
    width: 10px;
    height: 5px;
    z-index: 10;
`
