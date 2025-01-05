import React from 'react';
import styled, { keyframes } from 'styled-components';

const KeyFrameLoading = keyframes`
    0% {
        opacity: .5;
    }
    100% {
        opacity: 1;
    }
`;

const LoadingSkeleton = styled.div`
    background-color: ${(props) => props.theme.colors.box};
    display: block;
    border-radius: 6px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    animation: ${KeyFrameLoading} 500ms infinite alternate;
`;

export default ({width, height, margin}) => <LoadingSkeleton width={width} height={height} />