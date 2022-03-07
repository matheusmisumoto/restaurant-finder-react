import ReactDOM from "react-dom";

// PORTALS: https://en.reactjs.org/docs/portals.html

const PortalModal = ({children}) => {
    const portal = document.getElementById('modal-root');
    return ReactDOM.createPortal(children, portal);
};

export default PortalModal;