import React, { useState } from 'react'

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState("");

    const handledChanged = ( e ) => {
        setInputValue( e.target.value );
    }

    const handledSubmit = ( e) => {
        e.preventDefault();
        if (inputValue !== '' ) {
            setCategories(cats => [inputValue, ...cats ]);
            setInputValue("");
        }else {
            
        }
    }

    return (
        <>
        <form onSubmit={ handledSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handledChanged }
            />   
        </form>
        </>
    )
}
