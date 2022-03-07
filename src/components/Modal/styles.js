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
    flex-direction: column;
    justify-content: space-between;
    max-height: calc(100% - 144px);
    width: 500px;
    padding: 1.5rem;
    background-color: #FFF;
    border-radius: .5rem;
    box-shadow: 0 0 32px rgba(78,89,131,.2);
`;