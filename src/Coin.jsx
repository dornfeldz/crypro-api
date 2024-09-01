import { useParams } from "react-router";
import { useEffect, useState } from "react";

function Coin() {
  const [coin, setCoin] = useState([]);
  const { id } = useParams();

  function formatNumber(num) {
    return num.toLocaleString();
  }

  async function fetchData() {
    const response = await fetch(
      `https://api.coinlore.net/api/ticker/?id=${id}`
    );
    const text = await response.text();
    const data = JSON.parse(text);
    console.log(data);
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
    <div className="px-4 max-w-[500px] mx-auto">
      <div className="flex items-baseline gap-4">
        <p className="text-6xl text-orange-400 italic">#{coin.rank}</p>
        <div className="flex items-baseline gap-2">
          <p className="text-5xl font-bold">{coin.name}</p>
          <p className="">({coin.symbol})</p>
          <p className="">${coin.price_usd}</p>
        </div>
      </div>

      <table className="mx-auto mt-5 w-[400px]">
        <tr className="border-b">
          <td>Market cap:</td>
          <td>${Math.trunc(coin.market_cap_usd / 1000000000)}M</td>
        </tr>
        <tr className="border-b">
          <td className="">Trading volume for last 24h:</td>
          <td>${coin.volume24}</td>
        </tr>
        <tr className="border-b">
          <td>Circulating Supply:</td>
          <td>{coin.csupply}</td>
        </tr>
        <tr className="border-b">
          <td>Total Supply:</td>
          <td>{coin.tsupply}</td>
        </tr>
        <tr>
          <td>Maximum Supply:</td>
          <td>{coin.msupply}</td>
        </tr>
      </table>
      <table className="my-6 mx-auto">
        <thead>
          <tr className="border-b border-b-neutral-500">
            <th className="pr-3">Time period</th>
            <th>Market value</th>
          </tr>
        </thead>
        <tbody className="font-semibold">
          <tr className="border-b border-b-neutral-500">
            <td>1h</td>
            <td>
              <p className="">{coin.percent_change_1h}</p>
            </td>
          </tr>
          <tr className="border-b border-b-neutral-500">
            <td>24h</td>
            <td>
              <p className="">{coin.percent_change_24h}</p>
            </td>
          </tr>
          <tr className="border-b border-b-neutral-500">
            <td>1d</td>
            <td>
              <p className="">{coin.percent_change_7d}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Coin;
