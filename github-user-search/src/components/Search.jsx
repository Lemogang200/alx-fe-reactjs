import { useState } from 'react';
import { fetchUserData, advancedUserSearch } from '../services/githubService.js';


function Search({ setUser }) {
const [input, setInput] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [username, setUsername] = useState('');
const [location, setLocation] = useState('');
const [minRepos, setMinRepos] = useState('');


const handleSearch = async (e) => {
e.preventDefault();
if (!input) return;

setLoading(true);
setError(null);
setUser(null);

const data = await fetchUserData(input);
const advancedData = await advancedUserSearch({ username, location, minRepos });

if (!data || data.length === 0) {
setError("login", "Looks like we cant find the user");
setError("No users match the advanced search criteria");
}
else {
    setUser(data);
}

setLoading(false);
//setUser(data);
};


return (
<div className="p-4 bg-gray-100 rounded-xl shadow-md max-w-xl mx-auto mt-4">
    <form onSubmit={handleSearch} className="space-y-4">
        <div>
            <label className="block font-semibold">Username</label>
            <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Search by username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        </div>
            <div>
            <label className="block font-semibold">Location</label>
            <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Search by location(optional)..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
             />
        </div>
        
        <div>
            <label className="block font-semibold">Minimum Repositories</label>
            <input
            type="number"
            className="w-full p-2 border rounded"
            placeholder="e.g. 3"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
        />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Search</button>
    </form>
    <img src={user.avatar_url} width="100" alt="Avatar" />
    {loading && <p className="text-center mt-4">Loading...</p>}
    {error && <p className="text-center mt-4 text-red-600">{error}</p>}

    {users.map((user)=>(
            <div key={user.id} className="bg-white shadow p-4 rounded-lg">
                <img src={user.avatar_url} className="w-20 h-20 rounded-full mx-auto" />
                <h2 className="text-center mt-2 font-semibold">{user.login}</h2>
                <p className='text-center text-blue-600'>
                    <a href={user.html_url} target="_blank">View Profile</a>
                </p>
            </div>
        ))}
</div>
);
}


export default Search;