import axios from "axios";
import { useEffect, useState } from "react";

const useService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/service')
            .then(res => setServices(res.data))
    }, []);

    return [services, setServices];
}
export default useService;