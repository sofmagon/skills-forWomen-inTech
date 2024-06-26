import React from 'react';

import NVG_logo from '../../images/logos/NVG-main.png';

function EnrolledPrograms(props) {
  return (
    <div className={`shadow-lg border px-5 py-4 ${props.type === 'Featured'
      ? 'bg-amber-50 dark:bg-amber-400/10 border-amber-300 dark:border-amber-400/50'
      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
      }`}
    >
      <div className="md:flex justify-between items-center space-y-4 md:space-y-0 space-x-2">
        {/* Left side */}
        <div className="space-x-3 md:space-x-4">
          <div className="shrink-0 mt-1">
            <img src={NVG_logo} width="70" height="70" alt={props.nv_program} />
          </div>
        </div>
        {/* Center */}
        <p className="text-xl font-medium">{props.nv_program}</p>
        {/* Right side */}
        <div className="flex items-center space-x-4 md:pl-0">
          <div className="text-md text-slate-500 dark:text-slate-400 italic whitespace-nowrap">{props.nvp_year}</div>
        </div>
      </div>
    </div>
  );
}

export default EnrolledPrograms;