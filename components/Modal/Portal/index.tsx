"use client"

import React, { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const root = document.getElementById('modal-root');
    setPortalRoot(root);
  }, []);

  if (!portalRoot) return null;

  return createPortal(children, portalRoot);
};

export default Portal;