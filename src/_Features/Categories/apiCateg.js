import { backURL } from "../../vars";

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
}