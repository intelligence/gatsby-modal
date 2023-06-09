import * as React from 'react'

export const Modal = ({ children }) => (
  <div style={{
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2000,
    opacity: 0.3,
  }}>
    { children }
  </div>
)