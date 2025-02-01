import { useEffect, useState } from "react";
import styled from "styled-components";

import Skeleton from '../Skeleton';

interface CardProps {
    photo: string;
}

const Card = styled.div<CardProps>`
    display: flex;
    width: 120px;
    height: 10rem;
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

const SkeletonCard = styled(Skeleton)`
        display: flex;
        border-radius: .5rem;
`

const ImageCard = ({photo, title, onClick}:{photo: string, title: string, onClick: () => void}) => {
    const [ cardLoaded, setCardLoaded ] = useState(false);

    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = photo;

        // Native event instead of React
        imageLoader.onload = () => setCardLoaded(true);
    }, [photo]);

    return (
        <>
            {cardLoaded ? (
                <Card photo={photo} onClick={onClick}>
                    <Title>{title}</Title>
                </Card>
            ) : (
                <SkeletonCard width="120px" height="10rem" margin="0" />
            )}
        </>
    )
}

export default ImageCard;