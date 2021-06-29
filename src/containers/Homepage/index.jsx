import React from "react";
import styled from "styled-components";
import { serviceCard } from "../../components/serviceCard"
import { TopSection } from "./topSection";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer"
import { Navbar } from "../../components/navbar";
import { deviceSize } from "../../components/responsive";
const Title = styled.h1`
font-weight: 900;
color: #000;
`;

const ContentContainer =styled.div`
width: 100;
max-width: $(deviceSize.laptop)px;
display: flex;
flex-direction: column;
align-items: flex-start;
`;

const service = { "id": 1, "title": "I will landscape your garden", 
"thumbnailUrl": "http://localhost:9000/garden.jpg", "rate": 34,
"rating": 4, "specialist": { "id": 1, "fullName": "Mark brone" },
}


export function Homepage(props){
    return <pageContainer>
        <TopSection >
            <Navbar/>
            </TopSection>
            <InnerPageContainer>
               <ContentContainer>
                   <Title>
                    Most used services & more
                   </Title>
                   <serviceCard { ...service} />
               </ContentContainer>
            </InnerPageContainer>
</pageContainer>
}