import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgba(78,89,131,.5);
    backdrop-filter: blur(5px);
    z-index: 999;
`;

export const Dialog = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: space-between;
    max-height: calc(100% - 144px);
    width: 90dvw;
    max-width: 500px;
    padding: 1.25rem;
    background-color: #FFF;
    border-radius: 1.25rem;
    box-shadow: 0 0 32px rgba(78,89,131,.2);
    box-sizing: border-box;
`;

export const Cover = styled.div`
    width: 100%;
    border-radius: .75rem;
    overflow: hidden;

    img {
        width: 100%;
        aspect-ratio: 16/9;
        object-fit: cover;
    }
`;

export const ModalTitle = styled.h2`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.75rem;
    font-weight: bold;
    line-height: 1.25em;
    letter-spacing: -0.023em;
`;

export const ModalContent = styled.div`
    flex: 2;
`;

export const ModalDetail = styled.p`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.025rem;
    line-height: 1.25em;
    letter-spacing: -0.023em;
    margin: .5em 0;
`
export const Open = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    background-color: ${(props) => (props.$isOpen == 'true' ? 'green': 'darkred')};
    color: #FFF;
    font-size: .75rem;
    padding: .5em 1em;
    border-radius: 1rem;
    margin-right: .5rem;
`
export const Rating = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    background-color: goldenrod;
    color: #000;
    font-size: .75rem;
    padding: .5em 1em;
    border-radius: 1rem;
    margin-right: .5rem;
`
export const Price = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    background-color: darkgreen;
    color: #FFF;
    font-size: .75rem;
    padding: .5em 1em;
    border-radius: 1rem;
    margin-right: .5rem;
`
export const Close = styled.button`
    width: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    border: none;
    color: #FFF;
    cursor: pointer;
    font-size: 1rem;
    margin: 1rem 0 0 0;
    padding: .75rem;
    border-radius: .75rem;
    font-weight: bold;
`;