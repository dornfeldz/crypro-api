import Coin from "./Coin.jsx";
import {useState, useEffect} from "react";


function Coins() {
  const [coins, setCoins] = useState([]);

  async function fetchData() {
    const response = await fetch('https://api.coinlore.net/api/tickers/?start=0&limit=50');
    const data = await response.json();
    setCoins(data.data);
  }

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
      <table className="w-[90%] max-w-[80rem] mx-auto">
        <thead className="text-md">
          <th className="text-start px-2">#</th>
          <th className="text-start px-2">Name</th>
          <th className="text-start px-2">Price (USD)</th>
          <th className="text-start px-2">Hour</th>
          <th className="text-start px-2">Day</th>
          <th className="text-start px-2">Week</th>
          <th className="text-start px-2">Market cap (USD)</th>
        </thead>
        <tbody className="text-lg">
          {coins.map(coin =>(
              <tr className="hover:bg-black" key={coin.symbol}>
                <td className="px-2">{coin.rank}</td>
                <td className="px-2"><span  className="text-2xl font-semibold">{coin.name}</span> <span className="text-orange-400 text-sm">({coin.symbol})</span></td>
                <td className="px-2">${coin.price_usd}</td>
                <td className="px-2">{coin.percent_change_1h}</td>
                <td className="px-2">{coin.percent_change_24h}</td>
                <td className="px-2">{coin.percent_change_7d}</td>
                <td className="px-2">${Math.trunc(coin.market_cap_usd / 1000000000)}M</td>
              </tr>
          ))}
        </tbody>
      </table>
  );
}

export default Coins;