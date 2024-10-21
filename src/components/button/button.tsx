import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    height?: string;
    width?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, height = 'auto', width = 'auto' }) => {
    return (
        <button onClick={onClick} style={{ height: height, width: width }}>
            {label}
        </button>
    );
};

export default Button;
