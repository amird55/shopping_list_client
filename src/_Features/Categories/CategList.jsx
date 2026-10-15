import React from 'react';
import { useGetCategories } from './apiHookCateg';

function CategList() {
    const {  data: catList = {}, isLoading, isError, error} = useGetCategories();

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;
    
    return (
        <>
            {catList.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </>
    );
}

export default CategList;