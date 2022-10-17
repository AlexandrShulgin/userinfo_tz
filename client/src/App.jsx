import { useState } from "react";
import { useEffect } from "react";
import { useFetching } from "./hooks/useFetching";
import UserService from "./API/UserService";
import UserList from "./components/UserList";
import "./App.css"
import SearchBar from "./components/SearchBar";
import search from "./assets/search.png"
import MyModal from "./components/MyModal";

function App() {
    const [users, setUsers] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [fetchUsers, isUsersLoading, usersError] = useFetching(async () => {
        const users = await UserService.getAll(searchQuery);
        setUsers(users.data);
    })


    useEffect( () => {
        fetchUsers()
    }, [searchQuery])


    
    return ( 
        <>
        <SearchBar 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            />
        <img className="search" src={search} alt="Search"></img>

        {usersError &&
            <h1>Ошибка: ${usersError}</h1>
        }

        {isUsersLoading
            ? <h1>Загрузка</h1>
            : <UserList users={users}/>
        }
        </>
     );

}

export default App;