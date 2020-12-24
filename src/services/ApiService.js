export async function callApi(data, method = 'POST') {
    const endPoint = 'https://formspree.io/f/xoqwzlwn';
    const headers = {
        'Accept': 'application/json; charset=utf-8',
        'Content-Type': 'application/json'
    };

    try {
        const response = await fetch(endPoint, {
            method: method,
            body: JSON.stringify(data),
            headers: headers
        });
        return await response.json();
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('Request cancelled.');
            return;
        }
        console.error(error);
    }
}