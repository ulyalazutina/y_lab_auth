/* eslint-disable no-unreachable */
const API_URL = 'http://api-url/users';

export const authUser = async({email, password}) => {
    try {
        await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
        })
        .then((res) => {return res.json()})
        .catch((error) => {
            throw new Error(`Ошибка: ${error.message}`);
        });
    } catch (error) {
        throw new Error("Ошибка соединения с сервером");
    }
}