import Coin from "./Coin.jsx";
import {useState, useEffect} from "react";


function Coins() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.coinlore.net/api/tickers/?start=0&limit=20');
      const data = await response.json();
      setCoins(data.data);
    }

    fetchData();
  }, []);

  return (
        <div className="flex flex-col w-48 gap-4">
          {coins.map(coin => <Coin coin={coin} key={coin.id} />)}
        </div>
    );
}

export default Coins;