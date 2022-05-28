import { useEffect, useState } from "react"

const useUsers = user =>{
    const [users, setUsers] = useState('');
    useEffect(() =>{
        const email = user?.user?.email;
        // const currentUser = {email: email};
        // if(email){
        //     
        // }
    }, [user]);
    return [users];
}

export default useUsers;