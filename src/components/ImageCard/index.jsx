import React from "react";
import styled from "styled-components";

const Card = styled.div`
    height: 90px;
    margin-right: .5rem;
    border-radius: .5rem;
    background-image: url(${(props) => props.photo});
    background-size: cover;
    color: white;
`;

const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular}
    color: #FFF;
    margin: .5rem;
    display: inline-block;
    text-shadow: 0 0 .5rem #000, 0 0 .5rem #000, 0 0 .5rem #000;
`;
const ImageCard = ({photo, title}) => <Card photo={photo}><Title>{title}</Title></Card>

export default ImageCard;