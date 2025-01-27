import React from 'react';

const InputEvent: React.FC = () => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Input value:', event.target.value);
    };

    return <input type="text" onChange={handleInputChange} />;
};

export default InputEvent;
