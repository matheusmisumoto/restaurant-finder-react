import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 320px;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    & + div {
        flex-grow: 2;
        position: relative;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    font-family: Inter, sans-serif;
`;

export const Logo = styled.img`
    min-width: 50%;
    max-width: 75%;
    height: auto;
    margin: 0 auto 1rem;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #FFFFFF;
    padding: 1.5rem;
`;

export const CarouselTitle = styled.h2`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: -0.023em;
    line-height: 1.25rem;
    margin: 1.5rem 0;
`;

export const Carousel = styled(Slider)`
    .slick-prev:before, .slick-next: before {
        color: black;
    }
`

export const ModalTitle = styled.h2`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.25em;
    letter-spacing: -0.023em;
    margin-bottom: 1rem;
`;

export const ModalContent = styled.p`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.025rem;
    line-height: 1.25em;
    letter-spacing: -0.023em;
    margin-bottom: 1rem;
`;