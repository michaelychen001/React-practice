function MyButton() {
    return (
        <button>I'm a button</button>
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    );
}

import React from 'react';
import ReactDOM from 'react-dom';
import MyButton from './MyApp'; // Import your React component

ReactDOM.render(<MyApp />, document.getElementById('section'));
