function Coin({coin}) {
    return (
        <div className="flex items-center gap-4 card-blur-background ">
          <p className="text-4xl">#{coin.rank}</p>
            <div>
                <p className="font-bold">{coin.name}</p>
                <p>${coin.price_usd}</p>
            </div>
        </div>
    );
}

export default Coin;