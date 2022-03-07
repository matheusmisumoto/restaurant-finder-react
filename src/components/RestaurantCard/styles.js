import styled from 'styled-components';

export const Restaurant = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-top: .5rem;
    padding: 1rem;
    background-color: #FFF;
    border-left: .3rem solid transparent;
    :hover {
        background-color: ${(props) => props.theme.colors.background};
        border-left-color: ${(props) => props.theme.colors.primary};
    }
`;

export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RestaurantName = styled.h3`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.5rem;
    margin-bottom: .5em;
    font-weight: bold;
`;

export const RestaurantAddress = styled.address`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 1rem;
    line-height: 1.25em;
    margin-top: .5rem;
`;

export const RestaurantPhoto = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 6px;
    object-fit: cover;
`;