import Lottie from 'lottie-react';

import animationData from '../../public/restaurants-loading.json';

export default () => {
    return <Lottie loop animationData={animationData} play rendererSettings={{preserveAspectRatio: 'xMidYMid slice'}} style={{margin: '2rem 0'}} />;
}