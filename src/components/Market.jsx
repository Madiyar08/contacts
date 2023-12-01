import CopyButton from "./CopyButton";
function Market({
  marketNumber,
  marketName,
  marketAddress,
  landmark,
  workTime,
  phone,
  grillPhoneNumber,
  managerFullName,
  managerPhone,
  managerWorkTime,
  managerDayOff,
  supervisorOneFullName,
  supervisorOnePhone,
  supervisorOneWorkTime,
  supervisorOneDayOff,
  supervisorTwoFullName,
  supervisorTwoPhone,
  supervisorTwoWorkTime,
  supervisorTwoDayOff,
  senoirCashierFullName,
  senoirCashierPhone,
  senoirCashierWorkTime,
  senoirCashierDayOff,
  additionalInformation,
}) {
  return (
    <>
      <div class="grid grid-cols-6 text-center text-lg font-bold mb-[10px]">
        <div className="market border space-y-2  ">
          <div className="flex justify-center">
            <span>{marketNumber}.</span>
            <h2>{marketName}</h2>
          </div>
          <div>
            <p className="italic text-base text-gray-700">{marketAddress}</p>
            <p className="italic text-base text-gray-700">
              Ориентир: {landmark}
            </p>
          </div>
          <div className="text-red-600">
            <p>Режим работы:</p>
            <p>{workTime}</p>
          </div>
        </div>
        <div className="manager border space-y-2 ">
          <h2>{managerFullName}</h2>
          <CopyButton textToCopy={managerPhone} />
          <p>
            Режим работы: <br /> {managerWorkTime}
          </p>
          <p className="text-red-600">
            Выходной: <br /> {managerDayOff}
          </p>
        </div>
        <div className="supervisorOne border space-y-2">
          <h2>{supervisorOneFullName}</h2>
          <CopyButton textToCopy={supervisorOnePhone} />
          <p>
            Режим работы: <br /> {supervisorOneWorkTime}
          </p>
          <p className="text-red-600">
            Выходной: <br /> {supervisorOneDayOff}
          </p>
        </div>
        <div className="supervisorTwo border space-y-2 ">
          <h2>{supervisorTwoFullName}</h2>
          <CopyButton textToCopy={supervisorTwoPhone} />
          <p>
            Режим работы: <br />
            {supervisorTwoWorkTime}
          </p>
          <p className="text-red-600">
            Выходной: <br /> {supervisorTwoDayOff}
          </p>
        </div>

        <div className="seniorCashier border space-y-2 ">
          <h2>{senoirCashierFullName}</h2>
          <CopyButton textToCopy={senoirCashierPhone} />
          <p>
            Режим работы: <br />
            {senoirCashierWorkTime}
          </p>
          <p className="text-red-600">
            Выходной: <br />
            {senoirCashierDayOff}
          </p>
        </div>

        <div className="additionalInformation border ">
          <p>{additionalInformation}</p>
          <div className="space-y-1">
            <p>
              Городской номер:
              <span>
                <CopyButton textToCopy={phone} />
              </span>
            </p>
            <p>
              Гриль: <CopyButton textToCopy={grillPhoneNumber} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Market;
