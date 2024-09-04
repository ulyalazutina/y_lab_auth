/* eslint-disable no-unreachable */
const API_URL = 'http://localhost:3000/login';

export const authUser = async({email, password}) => {
    try {

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            }),
        });
        
        if (response.status === 400) {
            throw new Error("Пользователь не найден");
        }

        if (response.status === 200) {
            return response.json();
        }

    } catch (error) {
        throw new Error(error.message);
    }
}