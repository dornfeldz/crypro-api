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
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="flex items-baseline gap-4">
                <p className="text-6xl text-orange-400 italic">#{coin.rank}</p>
                <div className="flex items-baseline gap-2">
                    <p className="text-5xl font-bold">{coin.name}</p>
                    <p className="">({coin.symbol})</p>
                    <p className="">{coin.price_usd}</p>
                </div>
            </div>
            <p className="">{coin.percent_change_1h}</p>
            <p className="">{coin.percent_change_24h}</p>
            <p className="">{coin.percent_change_7d}</p>
            <p className="">{coin.market_cap_usd}</p>
            <p className="">{coin.volume24}</p>
            <p className="">{coin.volume24a}</p>
            <p className="">{coin.csupply}</p>
            <p className="">{coin.tsupply}</p>
            <p className="">{coin.msupply}</p>
        </div>
    );
}

export default Coin;