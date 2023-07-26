const users = [
    {
        "id": 1,
        "name": "John Doe",
        "age": 30,
        "email": "john.doe@example.com"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "age": 25,
        "email": "jane.smith@example.com"
    },
    {
        "id": 3,
        "name": "Bob Johnson",
        "age": 28,
        "email": "bob.johnson@example.com"
    }
]


function UserList() {
    return <>
        <h1>List Users</h1>
        {users.length <= 0 ? <p>no users</p> : null}
        <ul>
            {users.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
    </>
}

export default UserList