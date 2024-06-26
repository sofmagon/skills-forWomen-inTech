import React from 'react';
import { Link } from 'react-router-dom';
import EditMenu from '../../components/DropdownEditMenu';

function CompaniesCard(props) {
  return (
    <div className="col-span-full sm:col-span-6 xl:col-span-6 bg-white dark:bg-zinc-700 shadow-lg rounded-sm border border-slate-200 dark:border-zinc-700">
      <div className="flex flex-col h-full">
        {/* Card top */}
        <div className="grow p-5">
          <div className="flex justify-between items-start">
            {/* BASICS: image, name, country, business activity */}
            <header>
              <div className="flex mb-2">
                <img className="relative inline-flex items-start mr-5 rounded-full" src={props.image} width="100" height="100" alt={props.name} />
                <div className="mt-1 pr-1">
                  <h2 className="text-xl leading-snug justify-center font-semibold mb-2">{props.name}</h2>
                  <div className="flex items-center mb-2"><span>{props.country}</span></div>
                  <div className="flex items-center"><span>{props.business_activity}</span></div>
                </div>
              </div>
            </header>
            {/* Menu button */}
            <EditMenu align="right" className="relative inline-flex shrink-0">
              <li>
                <Link to={`/companies/edit/${props.id}`} className="font-medium text-md text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3">Edit information</Link>
              </li>
              <li>
                <button onClick={() => props.onDelete(props.id)} className="font-medium text-md text-[#FD6F63] flex py-1 px-3" to="#0">Remove</button>
              </li>
            </EditMenu>
          </div>
          {/* About */}
          <div className="mt-2">
            <div className="text-lg">{props.about}</div>
          </div>
        </div>
        {/* Card footer */}
        <div className="border-t border-slate-200 dark:border-zinc-600">
          <div className="flex divide-x divide-slate-200 dark:divide-slate-700">
            <a className="block flex-1 text-center text-md font-bold text-[#00BCB4] hover:text-[#FD6F63] px-3 py-4" href={props.site} target='_blank' rel='noopener noreferrer'>
              Website
            </a>
            <Link className="block flex-1 text-center text-md  font-bold text-[#FD6F63] hover:text-[#00BCB4] px-3 py-4 group" to={`/company/profile/${props.id}`}>
              <div className="flex items-center justify-center">
                <span>More details</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompaniesCard;