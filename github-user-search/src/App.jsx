import { useState } from 'react';
import SearchBar from './components/SearchBar.jsx';

function App() {
const [user, setUser] = useState(null);


return (
<div style={{ padding: '2rem' }}>
<h1>GitHub User Search</h1>
<SearchBar setUser={setUser} />


{user && (
    <div style={{ marginTop: '1rem' }}>
        <h2>{user.name || user.login}</h2>
        <img src={user.avatar_url} width="100" alt="Avatar" />
        <p>
            <a href={user.html_url} target="_blank">View Profile</a>
        </p>
    </div>
    )}
</div>
);
}


export default App;