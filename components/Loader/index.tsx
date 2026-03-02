import Lottie from 'lottie-react';

import animationData from '../../public/restaurants-loading.json';

export default () => {
    return <Lottie loop animationData={animationData} autoPlay rendererSettings={{preserveAspectRatio: 'xMidYMid slice'}} style={{margin: '2rem 0'}} />;
}