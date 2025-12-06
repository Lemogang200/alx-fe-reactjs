import { useState } from 'react';
import { fetchUserData, getUser } from '../services/githubService.js';


function Search({ setUser }) {
const [input, setInput] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);


const handleSearch = async (e) => {
e.preventDefault();
if (!input) return;

setLoading(true);
setError(null);
setUser(null);

const data = await fetchUserData(input);

if (!data) {
setError("login", "Looks like we cant find the user");
}
else {
    setUser(data);
}

setLoading(false);
//setUser(data);
};


return (
<div>
    <form onSubmit={handleSearch}>
        <input
            type="text"
            placeholder="Search GitHub username..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
    </form>
    <img src={user.avatar_url} width="100" alt="Avatar" />
    {loading && <p>Loading...</p>}
    {error && <p style={{ color: 'red' }}>{error}</p>}
</div>
);
}


export default Search;