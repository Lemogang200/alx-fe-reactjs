import axios from 'axios';


const API_BASE = 'https://api.github.com/search/users?q=${query}';


export async function advancedUserSearch(username) {
    try {
        let query = '';
        if (username) {
            query += `${username} in:login`;
        }
        if (location) {
            query += `location:${location}`;
        }
        if (minRepos) {
            query += `repos:>${minRepos}`; 
        }
        const res = await axios.get(API_BASE + username, {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY || ''}`,
                    },
            });
            return res.data;
        } catch (error) {
                console.error('User not found', error);
                return [];
            }
}