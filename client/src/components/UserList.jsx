import UserItem from "./UserItem"

const UserList = ({ users }) => {
    return (
        <div className="UserList">
            {users.map((user) => 
                <UserItem user={user} key={user.phone}/>
            )}
        </div>
    )
}



export default UserList