import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  const portalRoot = document.getElementById('modal-root')
  
  if (!portalRoot) return null;

  return createPortal(children, portalRoot);
};

export default Portal;