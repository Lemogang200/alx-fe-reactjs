import axios from 'axios';


const API_BASE = 'https://api.github.com/users/';


export async function getUser(username) {
    try {
        const res = await axios.get(API_BASE + username, {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY || ''}`,
                    },
            });
            return res.data;
        } catch (error) {
                console.error('User not found');
                return null;
            }
}