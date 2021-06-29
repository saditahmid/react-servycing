import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
align-items: flex-start;
padding: 15px 14px;

`;

const BottomContainer = styled.div`
width: 100%;
height: 32px;
display: flex;
align-items: center;
justify-content: space-between;
border-top: 1px solid rgba(15,15,15,0.19);
padding: 0 10px;

`;

const Title = styled.h2`
margin: 0;
font-size: 24px;
color: #000;
font-weight: 500;

`;

const specialistName = styled.h4`
margin: 0;
color: rgba(150,151,151,1);
font-size: 12px;
font-weight: 400;
`;

const RatingContainer=styled.div`
display: flex;
color: #EBE204;
`;
const StaringAtText = styled.h6`
margin: 0;
color: rgba(161,161,161,0.9);
font-weight: 400;
`;

const PriceContainer =styled.div`
display: flex;
rgba(161,161,161,0.9)
`;

const PriceText=styled.div`
margin-left: 3px;
color: #2A9D8F;
font-weight:500;
`;


export function serviceCard(props){
    const { thumbnailUrl,specialist,id,title,rate, rating} = props;

    return<CardContainer>
        <TopContainer>
            <ServiceThumbnail>
            <img src={thumbnailUrl} alt="{title}"/>
            </ServiceThumbnail>
        </TopContainer>
        <ContentContainer>
            <Title>{title}</Title>
            <Marginer direction= "vertical" Margin={10}/>
        <specialistName>
            {specialist.fullName}
        </specialistName>
        </ContentContainer>
        <BottomContainer>
            <RatingContainer>
                <FontAwesomeIcon icon= {faStar} size= "sm"/>
                {rating}
            </RatingContainer>
            <PriceContainer>
                <StaringAtText>Starting at </StaringAtText>
                <PriceText> ${ rating}/hr </PriceText>
            </PriceContainer>
        </BottomContainer>
    </CardContainer>
}