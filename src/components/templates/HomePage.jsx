import { useEffect, useState } from "react";

import { getCoinList } from "../../services/cryptoApi";
import TableCoin from "../modules/Tablecoin";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);
  useEffect(() => {
    const getData = async () => {
     try {
      setIsLoading(true);
      const res = await fetch(getCoinList(page, currency));
      const jason = await res.json();
      setCoins(jason);
      setIsLoading(false);
     } catch (error) {
      console.log(error);
     }
    };

    getData();
  }, [page, currency]);

  return (
    <div>
      <Search  currency={currency} setCurrency={setCurrency}/>
      <TableCoin coins={coins} isLoading={isLoading}  setChart={setChart}/>
      <Pagination page={page} setPage={setPage} />
      {!!chart && <Chart chart={chart} setChart={setChart}/>}
    </div>
  );
}

export default HomePage;
