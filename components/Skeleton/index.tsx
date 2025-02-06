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

interface LoadingSkeletonProps {
    width: string;
    height: string;
    margin?: string;
}

const LoadingSkeleton = styled.div<LoadingSkeletonProps>`
    background-color: ${(props) => props.theme?.colors?.box};
    display: block;
    border-radius: 6px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin || '0'};
    animation: ${KeyFrameLoading} 500ms infinite alternate;
`;

const LoadingSkeletonComponent: React.FC<LoadingSkeletonProps> = ({ width, height, margin }) => (
    <LoadingSkeleton width={width} height={height} margin={margin} />
);

export default LoadingSkeletonComponent;