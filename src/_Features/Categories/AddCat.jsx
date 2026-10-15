import React from 'react';
import {useAddCategory} from "./apiHookCateg.js";

function AddCat(props) {
    const {isAdding, addCategory} = useAddCategory();

    const submitMe = () => {
        let formData={
            name: "Red"
        }
        addCategory(formData);
    }

    return (
        <>
            <button onClick={submitMe}>
                Add - red
            </button>
        </>
    );
}

export default AddCat;