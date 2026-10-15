import React from 'react';

function CategList() {
    let catList = ["a","b"];
    return (
        <>
            {catList.map((item) => (
                <div key={item}>{item}</div>
            ))}
        </>
    );
}

export default CategList;