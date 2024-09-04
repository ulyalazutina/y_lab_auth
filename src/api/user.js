/* eslint-disable no-unreachable */
const API_URL = 'http://localhost:3000/login';

export const authUser = async({email, password}) => {
    try {
        return await fetch(API_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            }),
        })
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            throw new Error(`Ошибка: ${error.message}`);
        });
    } catch (error) {
        throw new Error("Ошибка соединения с сервером");
    }
}