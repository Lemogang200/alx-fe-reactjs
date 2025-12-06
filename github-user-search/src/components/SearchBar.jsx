import { useState } from 'react';
import { getUser } from '../services/githubServices.js';


function SearchBar({ setUser }) {
const [input, setInput] = useState('');


const handleSearch = async () => {
if (!input) return;
const data = await getUser(input);
setUser(data);
};


return (
<div>
<input
type="text"
placeholder="Search GitHub username..."
value={input}
onChange={(e) => setInput(e.target.value)}
/>
<button onClick={handleSearch}>Search</button>
</div>
);
}


export default SearchBar;