import styled from "styled-components";
// import Slider from "react-slick";

// import TextField from "@material/react-text-field";
import Logo from '/public/logo.svg';

export const Wrapper = styled.div`
    font-family: Inter, sans-serif;
`;

export const Container = styled.aside`
    background: ${(props) => props.theme.colors.blurredBackground};
    backdrop-filter: blur(10px);
    max-width: 90%;
    max-width: 300px;
    position: absolute;
    top: 2rem;
    left: 2rem;
    box-shadow: 0px 0px 6px 2px rgba(0,0,0,0.4);
    border-radius: 1.5rem;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    & + div {
        flex-grow: 2;
        position: relative;
    }
`;

export const Tastin = styled(Logo)`
    width: 80%;
    height: auto;
    margin: 0 auto .5rem;
    fill: ${(props) => props.theme.colors.primary};
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.background};
`;
/*
export const SearchForm = styled(TextField)`
    margin: .5rem 0;
    .mdc-floating-label--float-above.formLabel {
        color: ${(props) => props.theme.colors.text};
    }
    &.mdc-text-field--focused .formBorder > * {
        border-color: ${(props) => props.theme.colors.secondary} !important;
    }
`;
*/
export const CarouselTitle = styled.h2`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: -0.023em;
    line-height: 1.25rem;
    margin: 1.5rem 0;
`;
/*
export const Carousel = styled(Slider)`
    .slick-prev:before, .slick-next: before {
        color: black;
    }
    .slick-track {
        display: flex;
        column-gap: .75rem;
    }
`
*/

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