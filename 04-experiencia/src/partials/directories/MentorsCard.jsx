import React from 'react';
import { Link } from 'react-router-dom';
import EditMenu from '../../components/DropdownEditMenu';

function MentorsCard(props) {
  return (
    <div className="col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-zinc-700 shadow-lg rounded-sm border border-slate-200 dark:border-zinc-700">
      <div className="flex flex-col h-full">
        {/* Card top */}
        <div className="grow p-5">
          {/* Menu button */}
          <div className="relative">
            <EditMenu align="right" className="absolute top-0 right-0 inline-flex">
              <li>
                <Link to={`/mentors/edit/${props.id}`} className="font-medium text-md text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3">Edit information</Link>
              </li>
              <li>
                <button onClick={() => props.onDelete(props.id)} className="font-medium text-md text-[#FD6F63] flex py-1 px-3" to="#0">Remove</button>
              </li>
            </EditMenu>
          </div>
          {/* BASICS: image, name, country, company, job position */}
          <header>
            <div className="flex justify-center mb-2">
              <img className="rounded-full" src={props.image} width="150" height="150" alt={props.name} />
            </div>
            <div className="text-center">
              <h2 className="text-xl leading-snug justify-center font-semibold">{props.name} {props.last_name}</h2>
            </div>
            <div className="flex justify-center items-center"><span>{props.residence_country}</span></div>
            <div className="flex justify-center items-center"><span>{props.company}</span></div>
            <div className="flex justify-center items-center"><span>{props.job_position}</span></div>
          </header>
        </div>
        {/* Card footer */}
        <div className="border-t border-slate-200 dark:border-zinc-600 bg-[#00BCB4] dark:opacity-90">
          <Link className="block text-center text-md text-white font-semibold px-3 py-4" to={`/mentor/profile/${props.id}`}>
            <div className="flex items-center justify-center">
              <span className='text-lg'>More info</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MentorsCard;
