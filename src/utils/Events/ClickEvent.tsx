import React from 'react';

function ClickEvent() {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Button clicked:', event.currentTarget);
    };

    return <button onClick={handleClick}>Click Me</button>;
}

export default ClickEvent;
