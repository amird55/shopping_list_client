import { backURL } from "../../vars";

async function AddCategory(formData) {
    let url=`${backURL}/CTG`;
    const strToSend = JSON.stringify(formData);
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: strToSend,
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}


async function GetAllCategorys() {
    let url=`${backURL}/CTG`;
    console.log(url)
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}
export {
    GetAllCategorys,
    AddCategory,
}