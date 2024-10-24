import { useEffect, useState } from "react";
import Market from "./components/Market";
import ChatComponent from "./components/ChatComponent";
import axios from "axios";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Component() {
  const [market, setMarket] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const IsNotNumber = 'Нет'
  const headers = {
    "Content-Type": "application/json",
  };
  const config = {
    headers: headers,
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/markets/", config)
      .then(function (response) {
        if (Array.isArray(response.data)) {
          const filteredMarkets = response.data.filter(market => market.market_format === 'Korzinka');
          setMarket(filteredMarkets);
        } else {
          console.error('Expected an array but got:', response.data)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-red-800'} p-4 flex justify-between items-center`}>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
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
        </div>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${
            isDarkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'
          } flex items-center justify-center`}
        >
          {isDarkMode ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
        </button>
      </header>

      <div className={`grid grid-cols-6 ${isDarkMode ? 'bg-gray-700' : 'bg-blue-300'} text-center text-sm font-bold`}>
        <div className="border p-2">Маркет</div>
        <div className="border p-2">Менеджер магазина</div>
        <div className="border p-2">
          Заведующий залом <br />
          1-смена
        </div>
        <div className="border p-2">
          Заведующий залом <br />
          2-смена
        </div>
        <div className="border p-2">
        Заведующий залом 3-смена  или <br /> Старший Кассир <br /> 
        </div>
        <div className="border p-2">Дополнительная информация</div>
      </div>

      <div className={`flex justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-red-100'} p-4`}>
        <h1 className={`${isDarkMode ? 'text-red-400' : 'text-red-600'} font-bold text-3xl`}>Korzinka</h1>
      </div>

      <div className="flex-grow overflow-auto">
      {
        (market != null,
        market.map((market) => (
          <Market
          isDarkMode={isDarkMode}
            key={market.id}
            id={market.id}
            market_name={market.market_name}
            market_address={market.market_address}
            market_orientation={market.market_orientation}
            market_work_time={market.market_work_time}
            market_grill={market.market_grill ? `9.${market.market_grill}`: IsNotNumber }
            market_phone={market.market_phone ? `9.${market.market_phone} `: IsNotNumber }
            manager_full_name={market.manager_full_name }
            manager_phone={`9.${market.manager_phone}`}
            manager_work_time={market.manager_work_time}
            manager_day_off={market.manager_day_off}
            supervisor_one_full_name={market.supervisor_one_full_name}
            supervisor_one_phone={`9.${market.supervisor_one_phone}`}
            supervisor_one_work_time={market.supervisor_one_work_time}
            supervisor_one_day_off={market.supervisor_one_day_off}
            supervisor_two_full_name={market.supervisor_two_full_name}
            supervisor_two_phone={`9.${market.supervisor_two_phone}`}
            supervisor_two_work_time={market.supervisor_two_work_time}
            supervisor_two_day_off={market.supervisor_two_day_off}
            supervisor_three_full_name={market.supervisor_three_full_name}
            supervisor_three_work_time={market.supervisor_three_work_time}
            supervisor_three_day_off={market.supervisor_three_day_off}
            supervisor_three_phone={`9.${market.supervisor_three_phone}`}
            additional_info={market.additional_info}
            updated_at={market.updated_at}
          />
        )))
      }
      </div>

      <ChatComponent isDarkMode={isDarkMode} />
    </div>
  );
}