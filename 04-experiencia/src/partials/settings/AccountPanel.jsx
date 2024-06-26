import React, { useState } from 'react';

import Image from '../../images/logos/NVG-blue.png';

function AccountPanel() {

  const [sync, setSync] = useState(false);

  return (
    <div className="grow">
      {/* Panel body */}
      <div className="p-6 space-y-6">
        <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-5">My Account</h2>
        {/* Picture */}
        <section>
          <div className="flex items-center">
            <div className="mr-4">
              <img className="w-32" src={Image} width="80" height="80" alt="User upload" />
            </div>
            <button className="btn-sm bg-[#FD6F63] hover:bg-[#000] text-white">Change</button>
          </div>
        </section>
        {/* Business Profile */}
        <section>
          <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">Your information</h2>
          <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
            <div className="sm:w-1/3">
              <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
              <input id="name" className="form-input w-full" type="text" />
            </div>
            <div className="sm:w-1/3">
              <label className="block text-sm font-medium mb-1" htmlFor="business-id">Job Position</label>
              <input id="business-id" className="form-input w-full" type="text" />
            </div>
            <div className="sm:w-1/3">
              <label className="block text-sm font-medium mb-1" htmlFor="location">Location</label>
              <input id="location" className="form-input w-full" type="text" />
            </div>
          </div>
        </section>
        {/* Email */}
        <section>
          <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">Email</h2>
          <div className="flex flex-wrap mt-5">
            <div className="mr-2">
              <input id="email" className="form-input" type="email" />
            </div>
            <button className="btn bg-[#FD6F63] hover:bg-[#000] shadow-sm text-white">Change</button>
          </div>
        </section>
        {/* Password */}
        <section>
          <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">Password</h2>
          <div className="mt-5">
            <button className="btn border-slate-200 dark:border-slate-700 shadow-sm text-white">Set New Password</button>
          </div>
        </section>
      </div>
      {/* Panel footer */}
      <footer>
        <div className="flex flex-col px-6 py-5 border-t border-slate-200 dark:border-slate-700">
          <div className="flex self-end">
            <button className="btn dark:bg-zinc-700 border-slate-200 dark:border-slate-300 hover:border-slate-300 dark:hover:border-slate-500 text-slate-600 dark:text-slate-300">Cancel</button>
            <button className="btn bg-[#00BCB4] hover:bg-[#FD6F63] text-white ml-3">Save Changes</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AccountPanel;