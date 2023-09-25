import React from 'react';

function Form() {
    const [value, setValue] = React.useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="p-4">
            <label htmlFor="inputField" className="block text-sm font-medium text-gray-700">
                Input Field
            </label>
            <input
                id="inputField"
                type="text"
                value={value}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border rounded-md"
            />
        </div>
    );
}

export default Form;
