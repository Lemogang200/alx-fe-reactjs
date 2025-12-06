import { useState } from 'react';
import SearchBar from './components/SearchBar.jsx';
import Search from './components/Search.jsx';

function App() {
const [users, setUsers] = useState(null);
const [user, setUser] = useState([]);


return (
<div className="p-6">
<h1 className="text-3xl font-bold text-center mb-4">GitHub User Search</h1>
<SearchBar setUsers={setUsers} />
<Search setUsers={setUsers} />


{user.length > 0 && (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
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
    )}
</div>
);
}


export default App;