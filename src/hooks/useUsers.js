import { useEffect, useState } from "react"

const useUsers = user =>{
    const [users, setUsers] = useState('');
    useEffect(() =>{

    }, [user]);
    return [users];
}

export default useUsers;