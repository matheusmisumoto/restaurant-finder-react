import styled from 'styled-components';

export const Restaurant = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-top: .5rem;
    padding: 1rem 1.5rem 1rem 1rem;
    background-color: ${(props) => props.theme.colors.background};
    border-left: .5rem solid transparent;
    :hover {
        background-color: ${(props) => props.theme.colors.hoverBackground};
        border-color: ${(props) => props.theme.colors.primary};
    }
`;

export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: .75rem;
`;

export const RestaurantName = styled.h3`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.125rem;
    line-height: 1.25em;
    margin-bottom: .5em;
    font-weight: bold;
`;

export const RestaurantAddress = styled.address`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: .875rem;
    font-weight: 500;
    line-height: 1.25em;
    margin-top: .875rem;
`;

export const RestaurantPhoto = styled.img`
    display: ${(props) => (props.imageLoaded ? 'block': 'none')};
    width: 100px;
    height: 140px;
    border-radius: 6px;
    object-fit: cover;
`;