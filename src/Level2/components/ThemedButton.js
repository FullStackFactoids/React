import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export function ThemedButton() {
    const theme = useContext(ThemeContext);

    return (
        <button className={`p-2 rounded ${theme === 'light' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'}`}>
            I am {theme}
        </button>
    );
}
