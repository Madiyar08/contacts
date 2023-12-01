import { useEffect, useState } from "react";
import Market from "./components/Market";
import axios from "axios";

function Main() {
  const [market, setMarket] = useState([]);
  const headers = {
    "Content-Type": "application/json",
  };
  const config = {
    headers: headers,
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/markets", config)
      .then(function (response) {
        // handle success
        setMarket(response.data);
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  return (
    <>
      <header className="bg-red-800">
        <a className="flex space-x-3 p-5" target="_parent" href="nasvyazi.uz">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          <h1 className="text-white font-bold text-xl">
            Контактные номера магазинов
          </h1>
        </a>
      </header>
      <div class="grid grid-cols-6 bg-blue-300 text-center text-lg font-bold  ">
        <div className="border">Маркет</div>
        <div className="border">Менеджер магазина</div>
        <div className="text-center border">
          Заведующий залом <br />
          1-смена
        </div>
        <div className="text-center border">
          Заведующий залом <br />
          2-смена
        </div>
        <div className="text-center border">Старший Кассир</div>
        <div className="text-center border">Дополнительная информация</div>
      </div>
      <div className="flex justify-center bg-red-100">
        <h1 className="text-red-600 font-bold text-3xl">Korzinka</h1>
      </div>

      {
        (market != null,
        market.map((market) => (
          <Market
            key={market.id}
            marketNumber={market.id}
            marketName={market.marketName}
            marketAddress={market.marketAdress}
            landmark={market.marketLandmark}
            workTime={market.marketWorkTime}
            grillPhoneNumber={`9.${market.marketGrill}`}
            phone={`9.${market.marketPhone}`}
            managerFullName={market.managerFullName}
            managerPhone={`9.${market.managerPhone}`}
            managerWorkTime={market.managerWorkTime}
            managerDayOff={market.managerDayOff}
            supervisorOneFullName={market.supervisorOneFullName}
            supervisorOnePhone={`9.${market.supervisorOnePhone}`}
            supervisorOneWorkTime={market.supervisorOneWorkTime}
            supervisorOneDayOff={market.supervisorOneDayOff}
            supervisorTwoFullName={market.supervisorTwoFullName}
            supervisorTwoPhone={`9.${market.supervisorTwoPhone}`}
            supervisorTwoWorkTime={market.supervisorTwoWorkTime}
            supervisorTwoDayOff={market.supervisorTwoDayOff}
            senoirCashierFullName={market.seiorCashierFullName}
            senoirCashierPhone={`9.${market.seiorCashierPhone}`}
            senoirCashierWorkTime={market.seiorCashierWorkTime}
            senoirCashierDayOff={market.seiorCashierDayOff}
          />
        )))
      }
    </>
  );
}

export default Main;
