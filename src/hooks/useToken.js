import axios from "axios";
import { useEffect, useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const updateEmail = { email: email };
        if (email) {
            axios.put(`http://localhost:5000/user/${email}`, updateEmail)
                .then(res => {
                    console.log(res.data);
                    const accessToken = res.data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }
    }, [user]);

    return [token];
}
export default useToken;