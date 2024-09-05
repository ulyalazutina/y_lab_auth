/* eslint-disable no-unreachable */
const API_URL = 'https://back-auth-jtou.onrender.com/login';

export const authUser = async({email, password}) => {
    try {

        const response = await fetch(API_URL, {
            mode: 'cors',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
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