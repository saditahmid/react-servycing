import React from 'react';
import styled from "styled-components";
import LogoImg from "../../images/logos/logo.png"

const BrandLogoContainer = styled.div`
display: flex;
align-center: center;
`;

const LogoImage = styled.div`
width: ${({ size }) => (size ? size + "px" : "2em")};
height: ${({ size }) => (size ? size + "px" : "2em")};
img{
    width: 100%;
    height: 100%;
}
`;

const LogoTitle = styled.h2`
margin: 0;
font-size: ${({ size }) => (size ? size + "px" : "35 px")};
color: #fff;
font-width: 900;
`;

export function BrandLogo(props){

    const {logoSize, TextSize } = props;
    
    return <BrandLogoContainer>
    <LogoImage size = {logoSize}>
        <img src ={LogoImg} alt="Servycying Logo"/>
        </LogoImage>
        <LogoTitle size= {TextSize}>
            Sercycing 
        </LogoTitle>
        </BrandLogoContainer>
}