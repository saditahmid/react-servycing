import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
width : 300 px;
min-height : 250 px;
background-color: #fff;
box-shadow: 0 0 1px rgba(0,0,0,0.17); 
margin:  0.5 em;
margin-bottom: 1.3 em;

`;


const TopContainer = styled.div`

width: 100%;
`;

const ServiceThumbnail =styled.div`
width: 100%;
height 11em;

img {
    width: 100%;
    height: 100%;
}
`;

const ContentContainer = styled.div`
width: 100%
display: flex;
flex-direction: column;
flex: 1;
padding: 0 10 px;


`;

export function serviceCard(props){

}