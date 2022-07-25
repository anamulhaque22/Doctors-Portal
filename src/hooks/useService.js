import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useService = (date) => {



    const { isLoading, error, data: services, refetch } = useQuery(['available', date], () =>
        axios.get(`https://doctors-portal-server-lac.vercel.app/available?date=${date}`)
    )
    // const [services, setServices] = useState([]);

    /*     useEffect(() => {
            axios.get(`https://doctors-portal-server-lac.vercel.app/available?date=${date}`)
                .then(res => setServices(res.data))
        }, [date]); */
    return { services, isLoading, error, refetch };
}
export default useService;