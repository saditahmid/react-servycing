import React from  "react";
import styled from "styled-components";

import TopSectionBackgroundImage from "../../images/landing-page.jpg";
import TheBestSpecialistImage from  
const TopSectionContainer= styled.div`
width: 100%;
height: 800px;
background: url(${TopSectionBackgroundImage});
background-position: 0px -150px;
background-size: cover;

`;

const BackgroundFilter = styled.div`
width: 100%;
height: 100%;
background-color: rgba(38,70,83,0.9);
display: flex;
flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-contents: space-evenly;
`;

const StandOutImages =styled.div`
width:37em;
height: 32em;
img(
    width: 100%;
    height: 100%
)
`;


export function TopSection(props){
    return <TopSectionContainer>
        <BackgroundFilter><StandOutImages>
            <img src() alt = "Best in the field:"</StandOutImages></BackgroundFilter></TopSectionContainer>
}