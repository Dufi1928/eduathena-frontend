import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    height?: string;
    width?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button onClick={onClick}>{label}</button>
    );
};

export default Button;
