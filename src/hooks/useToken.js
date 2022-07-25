import axios from "axios";
import { useEffect, useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const updateEmail = { email: email };
        if (email) {
            axios.put(`https://doctors-portal-server-lac.vercel.app/user/${email}`, updateEmail)
                .then(res => {
                    const accessToken = res.data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                    return;
                })
        }
    }, [user]);

    return [token];
}
export default useToken;