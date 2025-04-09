import React, { ReactNode } from 'react';

interface IModalProps {
    children: ReactNode;
};

const Modal = ({ children }: IModalProps) => {
    return (
        <div>
            {children}
        </div>
    )
};

export default Modal;