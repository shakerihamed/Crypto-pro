import React, { useEffect, useState } from 'react';

//API
import { getCoin } from '../services/api';
//Gif
import Loading from '../Loading/Loading.js';
//Coin
import Coin from './Coin';
//style
import styles from "./Landing.module.css"



const Landing = () => {

    const [coins , setCoins] = useState([]);
    const [search , setSearch] = useState("");

    useEffect(() => {
        const fetchAPI = async () =>{
            const data = await getCoin()

            console.log(data);
            setCoins(data)
        }

        fetchAPI();

    },[]);

    const searchHandler = (event) => {
        setSearch(event.target.value);
    }

    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>  
            <h1>Global market of cryptocurrencies</h1>
            <input className={styles.input} type="text" placeholder='Search...' value={search} onChange={searchHandler}/>
            <p className={styles.Navbar}><span>Name Item </span><span>Symbol</span><span>Price</span><span>Market Cap</span><span>Price Change(24h)</span></p>
            {
                coins.length ? 
                    <div className={styles.coinContainer}>
                    {
                        searchCoins.map(item => <Coin 
                            key={item.id}
                            name={item.name}
                            image={item.image}
                            symbol={item.symbol}
                            price={item.current_price}
                            marketCap={item.market_cap}
                            priceChange={item.price_change_percentage_24h}
                            />)
                    }
                    </div> :
                <Loading />
            }
        </div>
    );
};

export default Landing;