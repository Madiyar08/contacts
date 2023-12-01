import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateMarket = () => {
  let navigate = useNavigate();
  const [marketName, setMarketName] = useState("");
  const [marketWorkTime, setMarketWorkTime] = useState("");
  const [marketAdress, setMarketAdress] = useState("");
  const [marketLandmark, setMarketLandmark] = useState("");
  const [marketPhone, setMarketPhone] = useState("");
  const [marketGrill, setMarketGrill] = useState("");
  const [managerFullName, setManagerFullName] = useState("");
  const [managerPhone, setManagerPhone] = useState("");
  const [managerWorkTime, setManagerWorkTime] = useState("");
  const [managerDayOff, setManagerDayOff] = useState("");
  const [supervisorOneFullName, setSupervisorOneFullName] = useState("");
  const [supervisorOnePhone, setSupervisorOnePhone] = useState("");
  const [supervisorOneWorkTime, setSupervisorOneWorkTime] = useState("");
  const [supervisorOneDayOff, setSupervisorOneDayOff] = useState("");
  const [supervisorTwoFullName, setSupervisorTwoFullName] = useState("");
  const [supervisorTwoPhone, setSupervisorTwoPhone] = useState("");
  const [supervisorTwoWorkTime, setSupervisorTwoWorkTime] = useState("");
  const [supervisorTwoDayOff, setSupervisorTwoDayOff] = useState("");
  const [seiorCashierFullName, setSeiorCashierFullName] = useState("");
  const [seiorCashierPhone, setSeiorCashierPhone] = useState("");
  const [seiorCashierWorkTime, setSeiorCashierWorkTime] = useState("");
  const [seiorCashierDayOff, setSeiorCashierDayOff] = useState("");

  function add() {
    axios
      .post("http://localhost:3000/markets", {
        marketName: marketName,
        marketWorkTime: marketWorkTime,
        marketAdress: marketAdress,
        marketLandmark: marketLandmark,
        marketPhone: marketPhone,
        marketGrill: marketGrill,
        managerFullName: managerFullName,
        managerPhone: managerPhone,
        managerWorkTime: managerWorkTime,
        managerDayOff: managerDayOff,
        supervisorTwoPhone: supervisorTwoPhone,
        supervisorTwoWorkTime: supervisorTwoWorkTime,
        supervisorTwoDayOff: supervisorTwoDayOff,
        supervisorTwoFullName: supervisorTwoFullName,
        seiorCashierFullName: seiorCashierFullName,
        seiorCashierPhone: seiorCashierPhone,
        seiorCashierWorkTime: seiorCashierWorkTime,
        seiorCashierDayOff: seiorCashierDayOff,
      })
      .then((response) => {
        navigate(`/loginform`);

        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setMarketName("");
    setMarketWorkTime("");
    setMarketAdress("");
    setMarketLandmark("");
    setMarketPhone("");
    setMarketGrill("");
    setManagerFullName("");
    setManagerPhone("");
    setManagerWorkTime("");
    setManagerDayOff("");
    setSupervisorOneFullName("");
    setSupervisorOnePhone("");
    setSupervisorOneWorkTime("");
    setSupervisorOneDayOff("");
    setSupervisorTwoFullName("");
    setSupervisorTwoPhone("");
    setSupervisorTwoWorkTime("");
    setSupervisorTwoDayOff("");
    setSeiorCashierFullName("");
    setSeiorCashierPhone("");
    setSeiorCashierWorkTime("");
    setSeiorCashierDayOff("");
  }

  return (
    <>
      
      <h1 className="text-4xl font-bold p-5 text-center text-blue-500">
        Добавить маркет
      </h1>
      <form className="mx-auto w-[80%] grid grid-cols-2 gap-4">
        <div className="mb-4 space-y-2 flex flex-col justify-center">
          <label className="block text-lg font-medium text-gray-700">
            Называния маркета
          </label>
          <input
            value={marketName}
            onChange={(e) => setMarketName(e.target.value)}
            placeholder="Напиример: Туркменский"
            type="text"
            className="border rounded   px-3 py-2 outline-blue-500"
          />
        </div>

        <div className="mb-4 space-y-2 flex flex-col justify-center">
          <label className="block text-lg font-medium text-gray-700">
            Режим работы:
          </label>
          <input
            value={marketWorkTime}
            onChange={(e) => setMarketWorkTime(e.target.value)}
            placeholder="Напиример: 08:00-00:00 или Круглосуточно и т.д"
            type="text"
            className="border rounded  px-3 py-2 outline-blue-500"
          />
        </div>

        <div className="mb-4 space-y-2 flex flex-col justify-center">
          <label className="block text-lg font-medium text-gray-700">
            Адресс маркета
          </label>
          <input
            value={marketAdress}
            onChange={(e) => setMarketAdress(e.target.value)}
            placeholder="Напиример: ул. Ю.Х.Ходжиб, 1А"
            type="text"
            className="border rounded  px-3 py-2 outline-blue-500"
          />
        </div>

        <div className="mb-4 space-y-2 flex flex-col justify-center">
          <label className="block text-lg font-medium text-gray-700">
            Ориентир
          </label>
          <input
            value={marketLandmark}
            onChange={(e) => setMarketLandmark(e.target.value)}
            placeholder="Напиример: бывший Туркменский рынок, МВД"
            type="text"
            className="border rounded  px-3 py-2 outline-blue-500"
          />
        </div>

        <div className="mb-4 space-y-2 flex flex-col justify-center">
          <label className="block text-lg font-medium text-gray-700">
            Городской номер
          </label>
          <input
            value={marketPhone}
            onChange={(e) => setMarketPhone(e.target.value)}
            placeholder="Напиример: 712009988"
            type="text"
            className="border rounded  px-3 py-2 outline-blue-500"
          />
        </div>

        <div className="mb-4 space-y-2 flex flex-col justify-center">
          <label className="block text-lg font-medium text-gray-700">
            Гриль:
          </label>
          <input
            value={marketGrill}
            onChange={(e) => setMarketGrill(e.target.value)}
            placeholder="Напиример: 933002040"
            type="text"
            className="border rounded  px-3 py-2 outline-blue-500"
          />
        </div>

        {/* Менеджер */}

        <div className="mb-4 space-y-2 flex flex-col justify-center border-t-8 border-blue-500 pt-4">
          <label className="block text-lg font-medium text-gray-700">
            Ф.И. Менеджера
          </label>
          <input
            value={managerFullName}
            onChange={(e) => setManagerFullName(e.target.value)}
            placeholder="Напиример: Абдусаматов Мадиёр"
            type="text"
            className="border rounded  px-3 py-2 outline-blue-500"
          />
        </div>

        <div className="mb-4 space-y-2 flex flex-col justify-center border-t-8  border-blue-500 pt-4">
          <label className="block text-lg font-medium text-gray-700">
            Номер телефона Менеджера
          </label>
          <input
            value={managerPhone}
            onChange={(e) => setManagerPhone(e.target.value)}
            placeholder="Напиример: 900040277"
            type="text"
            className="border rounded  px-3 py-2 outline-blue-500"
          />
        </div>

        <div className="mb-4 space-y-2 flex flex-col justify-center">
          <label className="block text-lg font-medium text-gray-700">
            Режим работы Менеджера
          </label>
          <input
            value={managerWorkTime}
            onChange={(e) => setManagerWorkTime(e.target.value)}
            placeholder="Напиример: 10:00-19:00"
            type="text"
            className="border rounded  px-3 py-2 outline-blue-500"
          />
        </div>

        <div className="mb-4 space-y-2 flex flex-col justify-center">
          <label className="block text-lg font-medium text-gray-700">
            Выходной день Менеджера
          </label>
          <input
            value={managerDayOff}
            onChange={(e) => setManagerDayOff(e.target.value)}
            placeholder="Напиример: Вторник"
            type="text"
            className="border rounded  px-3 py-2 outline-blue-500"
          />
        </div>
        {/* Менеджер */}

        {/* Супервайзер-1 */}
        <div className="mb-4 space-y-2 flex flex-col justify-center border-t-8 border-blue-500 pt-4">
          <label className="block text-lg font-medium text-gray-700">
            Ф.И. Заведующий залом 1-смена
          </label>
          <input
            value={supervisorOneFullName}
            onChange={(e) => setSupervisorOneFullName(e.target.value)}
            placeholder="Напиример: Абдусаматов Мадиёр"
            type="text"
            className="border rounded  px-3 py-2 outline-blue-500"
          />
        </div>

        <div className="mb-4 space-y-2 flex flex-col justify-center border-t-8 border-blue-500 pt-4">
          <label className="block text-lg font-medium text-gray-700">
            Номер телефона Заведующий залом 1-смена
          </label>
          <input
            value={supervisorOnePhone}
            onChange={(e) => setSupervisorOnePhone(e.target.value)}
            placeholder="Напиример: 900040277"
            type="text"
            className="border rounded  px-3 py-2 outline-blue-500"
          />
        </div>

        <div className="mb-4 space-y-2 flex flex-col justify-center">
          <label className="block text-lg font-medium text-gray-700">
            Режим работы Заведующий залом 1-смена
          </label>
          <input
            value={supervisorOneWorkTime}
            onChange={(e) => setSupervisorOneWorkTime(e.target.value)}
            placeholder="Напиример: 10:00-19:00"
            type="text"
            className="border rounded  px-3 py-2 outline-blue-500"
          />
        </div>

        <div className="mb-4 space-y-2 flex flex-col justify-center">
          <label className="block text-lg font-medium text-gray-700">
            Выходной день Заведующий залом 1-смена
          </label>
          <input
            value={supervisorOneDayOff}
            onChange={(e) => setSupervisorOneDayOff(e.target.value)}
            placeholder="Напиример: Вторник"
            type="text"
            className="border rounded  px-3 py-2 outline-blue-500"
          />
        </div>
        {/* Супервайзер-1 */}

        {/* Супервайзер-2 */}
        <div className="mb-4 space-y-2 flex flex-col justify-center border-t-8 border-blue-500 pt-4">
          <label className="block text-lg font-medium text-gray-700">
            Ф.И. Заведующий залом 2-смена
          </label>
          <input
            value={supervisorTwoFullName}
            onChange={(e) => setSupervisorTwoFullName(e.target.value)}
            placeholder="Напиример: Абдусаматов Мадиёр"
            type="text"
            className="border rounded  px-3 py-2 outline-blue-500"
          />
        </div>

        <div className="mb-4 space-y-2 flex flex-col justify-center border-t-8 border-blue-500 pt-4">
          <label className="block text-lg font-medium text-gray-700">
            Номер телефона Заведующий залом 2-смена
          </label>
          <input
            value={supervisorTwoPhone}
            onChange={(e) => setSupervisorTwoPhone(e.target.value)}
            placeholder="Напиример: 900040277"
            type="text"
            className="border rounded  px-3 py-2 outline-blue-500"
          />
        </div>

        <div className="mb-4 space-y-2 flex flex-col justify-center">
          <label className="block text-lg font-medium text-gray-700">
            Режим работы Заведующий залом 2-смена
          </label>
          <input
            value={supervisorTwoWorkTime}
            onChange={(e) => setSupervisorTwoWorkTime(e.target.value)}
            placeholder="Напиример: 10:00-19:00"
            type="text"
            className="border rounded  px-3 py-2 outline-blue-500"
          />
        </div>

        <div className="mb-4 space-y-2 flex flex-col justify-center">
          <label className="block text-lg font-medium text-gray-700">
            Выходной день Заведующий залом 2-смена
          </label>
          <input
            value={supervisorTwoDayOff}
            onChange={(e) => setSupervisorTwoDayOff(e.target.value)}
            placeholder="Напиример: Вторник"
            type="text"
            className="border rounded  px-3 py-2 outline-blue-500"
          />
        </div>
        {/* Супервайзер-2 */}

        {/* Супервайзер-3 */}
        <div className="mb-4 space-y-2 flex flex-col justify-center border-t-8 border-blue-500 pt-4">
          <label className="block text-lg font-medium text-gray-700">
            Ф.И. Старшего Кассира
          </label>
          <input
            value={seiorCashierFullName}
            onChange={(e) => setSeiorCashierFullName(e.target.value)}
            placeholder="Напиример: Абдусаматов Мадиёр"
            type="text"
            className="border rounded  px-3 py-2 outline-blue-500"
          />
        </div>

        <div className="mb-4 space-y-2 flex flex-col justify-center border-t-8 border-blue-500 pt-4">
          <label className="block text-lg font-medium text-gray-700">
            Номер телефона Старшего Кассира
          </label>
          <input
            value={seiorCashierPhone}
            onChange={(e) => setSeiorCashierPhone(e.target.value)}
            placeholder="Напиример: 900040277"
            type="text"
            className="border rounded  px-3 py-2 outline-blue-500"
          />
        </div>

        <div className="mb-4 space-y-2 flex flex-col justify-center">
          <label className="block text-lg font-medium text-gray-700">
            Режим работы Старшего Кассира
          </label>
          <input
            value={seiorCashierWorkTime}
            onChange={(e) => setSeiorCashierWorkTime(e.target.value)}
            placeholder="Напиример: 10:00-19:00"
            type="text"
            className="border rounded  px-3 py-2 outline-blue-500"
          />
        </div>

        <div className="mb-4 space-y-2 flex flex-col justify-center">
          <label className="block text-lg font-medium text-gray-700">
            Выходной день Старшего Кассира
          </label>
          <input
            value={seiorCashierDayOff}
            onChange={(e) => setSeiorCashierDayOff(e.target.value)}
            placeholder="Напиример: Вторник"
            type="text"
            className="border rounded  px-3 py-2 outline-blue-500"
          />
        </div>
        {/* Супервайзер-3 */}
      </form>
      <div className="flex justify-center">
        <button
          onClick={add}
          type="submit"
          className="w-full md:w-[50%] lg:w-[30%] text-lg bg-blue-500 hover:bg-blue-700 text-white font-semibold py-4 px-4 rounded m-10"
        >
          Сохранить
        </button>
      </div>
    </>
  );
};

export default CreateMarket;
