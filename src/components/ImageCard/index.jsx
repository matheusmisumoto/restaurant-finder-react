import React from "react";
import styled from "styled-components";

const Card = styled.div`
    height: 10rem;
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
    font-size: .875rem;
    line-height: 1.25rem;
    text-shadow: 0 0 .5em #000, 0 0 .5em #000, 0 0 .5em #000;
`;
const ImageCard = ({photo, title}) => <Card photo={photo}><Title>{title}</Title></Card>

export default ImageCard;