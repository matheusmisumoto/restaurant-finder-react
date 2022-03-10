import React from 'react';
import Lottie from 'react-lottie-player';

import animationData from '../../assets/restaurants-loading.json';

export default () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return <Lottie options={defaultOptions} />;
}