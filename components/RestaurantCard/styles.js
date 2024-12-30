import styled from 'styled-components';

export const Restaurant = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: .75rem;
    background-color: ${(props) => props.theme.colors.background};
    border: 1px solid ${(props) => props.theme.colors.box};
    border-radius: .75rem;
    max-width: 90%;

    &:hover {
        background-color: ${(props) => props.theme.colors.hoverBackground};
    }
`;

export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: .25rem;
    flex: 1;
`;

export const RestaurantName = styled.h3`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.125rem;
    line-height: 1.25em;
    font-weight: bold;
`;

export const RestaurantAddress = styled.address`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: .875rem;
    font-weight: 500;
    line-height: 1.25em;
`;

export const RestaurantPhoto = styled.img`
    display: ${(props) => (props.imageLoaded ? 'block': 'none')};
    width: 100px;
    height: 140px;
    border-radius: 6px;
    object-fit: cover;
`;