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
    background-color: #DFDFDF;
    border-radius: 6px;
    margin: ${(props) => props.margin};
    min-width: ${(props) => props.width};
    height: ${(props) => props.height};
    animation: ${KeyFrameLoading} 500ms intinite alternate;
`;

export default ({width, height, margin}) => <LoadingSkeleton width={width} height={height} margin={margin} />