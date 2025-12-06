import { useState } from 'react';
import { getUser } from '../services/githubService.js';


function SearchBar({ setUser }) {
const [input, setInput] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);


const handleSearch = async (e) => {
e.preventDefault();
if (!input) return;

setLoading(true);
setError(null);
setUser(null);

const data = await getUser(input);

if (!data) {
setError('Looks like we can\'t find the user.');
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