import React from "react";
import CopyButton from "./CopyButton";

function Market({
  id,
  market_name,
  market_address,
  market_orientation,
  market_work_time,
  market_phone,
  market_grill,
  manager_full_name,
  manager_phone,
  manager_work_time,
  manager_day_off,
  supervisor_one_full_name,
  supervisor_one_phone,
  supervisor_one_work_time,
  supervisor_one_day_off,
  supervisor_two_full_name,
  supervisor_two_phone,
  supervisor_two_work_time,
  supervisor_two_day_off,
  supervisor_three_full_name,
  supervisor_three_phone,
  supervisor_three_work_time,
  supervisor_three_day_off,
  additional_info,
  isDarkMode,
  updated_at
})

{
  const borderColor = isDarkMode ? 'border-gray-600' : 'border-gray-300';
  const cellBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const formattedDate = new Date(updated_at).toLocaleString("ru-RU", {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    // timeZoneName: 'short', // Указывает временную зону
  });

  

  return (
    <div className={`grid grid-cols-8 text-center text-sm font-bold border-b ${borderColor}`}>
    
    <div className={`border ${borderColor} ${cellBg} p-2 space-y-2`}>
        <p>{id}</p>
      </div>

      <div className={`border ${borderColor} ${cellBg} p-2 space-y-2`}>
        <div className="flex justify-center items-center space-x-1">
          
          <h2 className="truncate">{market_name}</h2>
        </div>
        <p className={` text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} `}>Адрес: {market_address}</p>
        <p className={`italic text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} `}>Ориентир: {market_orientation}</p>
        <p className={`${isDarkMode ? 'text-red-400' : 'text-red-600'} text-xs`}>
          Режим работы:<br />{market_work_time}
        </p>
      </div>
      <div className={`border ${borderColor} ${cellBg} p-2 space-y-3`}>
        {manager_full_name !== null && manager_full_name !== "" && (<> <h2 className="truncate">{manager_full_name}</h2>
          <CopyButton textToCopy={manager_phone} isDarkMode={isDarkMode} />
          <p className="text-xs">
            Режим работы: {manager_work_time}
          </p>
          <p className={`${isDarkMode ? 'text-red-400' : 'text-red-600'} text-xs`}>
            Выходной: {manager_day_off}
          </p>
        </>)}
      </div>
      <div className={`border ${borderColor} ${cellBg} p-2 space-y-3 `}>
     {( supervisor_one_full_name !== null && supervisor_one_full_name !== "" && <> <h2 className="truncate">{supervisor_one_full_name}</h2>
        <CopyButton textToCopy={supervisor_one_phone} isDarkMode={isDarkMode} />
        <p className="text-xs">
          Режим работы: {supervisor_one_work_time}
        </p>
        <p className={`${isDarkMode ? 'text-red-400' : 'text-red-600'} text-xs`}>
          Выходной: {supervisor_one_day_off}
          </p>
          </>)}
      </div>
      <div className={`border ${borderColor} ${cellBg} p-2 space-y-3`}>
        {supervisor_two_full_name !== null && supervisor_two_full_name !== "" && (<><h2 className="truncate">{supervisor_two_full_name}</h2>
          <CopyButton textToCopy={supervisor_two_phone} isDarkMode={isDarkMode} />
          <p className="text-xs">
            Режим работы:{supervisor_two_work_time}
          </p>
          <p className={`${isDarkMode ? 'text-red-400' : 'text-red-600'} text-xs`}>
            Выходной: {supervisor_two_day_off}
          </p>
        </>)}
      </div>
      <div className={`border ${borderColor} ${cellBg} p-2 space-y-3`}>
        {supervisor_three_full_name !== null && supervisor_three_full_name !== ""  && ( 
         <><h2 className="truncate">{supervisor_three_full_name}</h2>
        <CopyButton textToCopy={supervisor_three_phone} isDarkMode={isDarkMode} />
        <p className="text-xs">
          Режим работы: {supervisor_three_work_time}
        </p>
        <p className={`${isDarkMode ? 'text-red-400' : 'text-red-600'} text-xs`}>
          Выходной: {supervisor_three_day_off}
        </p>
        </> ) }
      </div>
      <div className={`border ${borderColor} ${cellBg} p-2 space-y-3`}>
        <p className="text-xs mb-1">{additional_info}</p>
        <p className="text-xs">
          Городской номер:
           <CopyButton textToCopy={market_phone} isDarkMode={isDarkMode} />
        </p>
        <p className="text-xs">
          Гриль: <CopyButton textToCopy={market_grill} isDarkMode={isDarkMode} />
        </p>
        <p className="text-[10px]">Данные маркета обновлены в: {formattedDate}</p>
      </div>

      <div className={`border ${borderColor} ${cellBg} p-2 space-y-3`}>
        <p className="text-xs mb-1">{additional_info}</p>
        <p className="text-[10px]">Данные маркета обновлены в: {formattedDate}</p>
      </div>
    </div>
  );
}

export default Market;