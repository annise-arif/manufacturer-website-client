import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const email = user?.email;
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    
    if (email) {
      fetch(`https://aqueous-fortress-84806.herokuapp.com/admin/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
        });
    }
  }, [user]);
  return [admin];
};

export default useAdmin;
