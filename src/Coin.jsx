import {useParams} from "react-router";
import {useEffect, useState} from "react";

function Coin() {
    const [coin, setCoin] = useState([]);
    const {id} = useParams();

    async function fetchData() {

        const response = await fetch(`https://api.coinlore.net/api/ticker/?id=${id}`);
        const text = await response.text();
        const data = JSON.parse(text);
        console.log(data)
        setCoin(data[0]);
        console.log(id);
        console.log(coin);
    }

    useEffect(() => {
        fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-orange-400">{coin.name}</div>
    );
}

export default Coin;