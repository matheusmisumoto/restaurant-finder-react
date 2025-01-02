import styled from "styled-components";
import Slider from "react-slick";

import FormControl from '@mui/material/FormControl';
import { OutlinedInput } from "@mui/material";
import Logo from '/public/logo.svg';

export const Wrapper = styled.div`
    font-family: Inter, sans-serif;
`;

export const Menu = styled.aside`
    background: ${(props) => props.theme.colors.blurredBackground};
    backdrop-filter: blur(10px);
    width: 90%;
    max-width: 320px;
    max-height: calc(100dvh - 6rem);
    position: absolute;
    top: 2rem;
    left: 2rem;
    box-shadow: 0px 0px 6px 2px rgba(0,0,0,0.4);
    border-radius: 1.5rem;
    overflow-y: hidden;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
    transition: height .5s ease-in-out;

    @media (max-width: 768px) {
        left: 50%;
        transform: translateX(-50%);
    }

    & + div {
        flex-grow: 2;
        position: relative;
    }
`;

export const LogoContainer = styled.div`
    padding: .5rem 0 0 0;
    height: 5rem;
    text-align: center;
`;

export const Tastin = styled(Logo)`
    height: 100%;
    aspect-ratio: 400/158;
    fill: ${(props) => props.theme.colors.primary};
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.background};
`;

export const SearchForm = styled(FormControl)`
  .MuiOutlinedInput-root {
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${(props) => props.theme.colors.primary};
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${(props) => props.theme.colors.primary};
    }

    .MuiOutlinedInput-input {
      &:focus {
        border-color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  .MuiInputLabel-root.Mui-focused {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;
    overflow-y: auto;
    flex: 1;

    /* WebKit browsers */
    &::-webkit-scrollbar {
        width: .25rem;
    }

    &::-webkit-scrollbar-track {
    background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.colors.box};
        border-radius: 1rem;
    }
}
`;

export const SectionTitle = styled.h2`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: -0.023em;
    line-height: 1.5em;
`;

export const Carousel = styled(Slider)`
    .slick-prev:before, .slick-next: before {
        color: black;
    }
    .slick-track {
        display: flex;
        column-gap: .75rem;
    }
`

export const Expand = styled.button`
    width: 100%;
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    font-size: 1rem;
    margin: 0 auto;
    padding: .25rem;
    font-weight: bold;
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