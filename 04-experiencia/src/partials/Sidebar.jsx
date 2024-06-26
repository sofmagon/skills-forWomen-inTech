import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBookOpenReader, faAddressBook, faNewspaper, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';

import SidebarLinkGroup from './SidebarLinkGroup';
import whiteLogo from '../images/logos/NVG-white.png';

function Sidebar({
  sidebarOpen,
  setSidebarOpen
}) {

  // Recuperar los datos del usuario desde el local storage
  const user = JSON.parse(localStorage.getItem('user'));

  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div className="min-w-fit">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-[#00BCB4]  z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-teal-900 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'
          }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/" className="block mx-auto">
            <img src={whiteLogo} width={140} alt="New Ventures Logo" />
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Section group */}
          <div>
            <h3 className="text-sm uppercase text-slate-300 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Menu</span>
            </h3>

            <ul className="mt-3">

              {/* Home */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname === '/' ? 'bg-[#000]' : ''}`}>
                <NavLink
                  end
                  to="/"
                  className={({ isActive }) => `block text-slate-200 truncate transition duration-150 ${isActive ? 'text-[#FD6F63]' : ''} ${pathname === '/' ? 'hover:text-slate-200' : 'hover:text-white'}`}
                >
                  {({ isActive }) => (
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faHouse} className='text-slate-50 text-2xl' />
                      <span className={`text-xl font-bold ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ${isActive ? 'text-[#FD6F63]' : 'text-slate-50'} hover:text-[#00BCB4]'`}>
                        Home
                      </span>
                    </div>
                  )}
                </NavLink>
              </li>

              {/* Programs */}
              <SidebarLinkGroup activecondition={pathname.includes('/programs')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('programs') ? 'hover:text-slate-200' : 'hover:text-white'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <FontAwesomeIcon icon={faBookOpenReader} className='text-slate-50 text-2xl' />
                            <span className="text-slate-50 text-xl font-bold hover:text-[#00BCB4] ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Programs
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/programs"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-[#FD6F63]' : 'text-slate-50 hover:text-[#00BCB4]')
                              }
                            >
                              <span className="text-lg font-bold lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Programs List
                              </span>
                            </NavLink>
                          </li>
                          {/* Link + Manejo de permisos */}
                          {(user?.userType === 'superadmin' || user?.userType === 'admin' || user?.userType === 'auxiliar') && (
                            <>
                              <li className="mb-1 last:mb-0">
                                <NavLink
                                  end
                                  to="/programs/create"
                                  className={({ isActive }) =>
                                    'block transition duration-150 truncate ' + (isActive ? 'text-[#FD6F63]' : 'text-slate-50 hover:text-[#00BCB4]')
                                  }
                                >
                                  <span className="text-lg font-bold lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                    Create a program
                                  </span>
                                </NavLink>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* Directories */}
              <SidebarLinkGroup activecondition={pathname.includes('/mentors') || pathname.includes('/companies')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('community') ? 'hover:text-slate-200' : 'hover:text-white'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <FontAwesomeIcon icon={faAddressBook} className='text-slate-50 text-2xl' />
                            <span className="text-slate-50 text-xl font-bold hover:text-[#00BCB4] ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Directories
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/mentors"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-[#FD6F63]' : 'text-slate-50 hover:text-[#00BCB4]')
                              }
                            >
                              <span className="text-lg font-bold lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Mentors List
                              </span>
                            </NavLink>
                          </li>
                          {/* Link + Manejo de permisos */}
                          {(user?.userType === 'superadmin' || user?.userType === 'admin' || user?.userType === 'auxiliar') && (
                            <>
                              <li className="mb-1 last:mb-0">
                                <NavLink
                                  end
                                  to="/mentors/create"
                                  className={({ isActive }) =>
                                    'block transition duration-150 truncate ' + (isActive ? 'text-[#FD6F63]' : 'text-slate-50 hover:text-[#00BCB4]')
                                  }
                                >
                                  <span className="text-lg font-bold lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                    Register a mentor
                                  </span>
                                </NavLink>
                              </li>
                            </>
                          )}
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/companies"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-[#FD6F63]' : 'text-slate-50 hover:text-[#00BCB4]')
                              }
                            >
                              <span className="text-lg font-bold lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Companies List
                              </span>
                            </NavLink>
                          </li>
                          {/* Link + Manejo de permisos */}
                          {(user?.userType === 'superadmin' || user?.userType === 'admin' || user?.userType === 'auxiliar') && (
                            <>
                              <li className="mb-1 last:mb-0">
                                <NavLink
                                  end
                                  to="/companies/create"
                                  className={({ isActive }) =>
                                    'block transition duration-150 truncate ' + (isActive ? 'text-[#FD6F63]' : 'text-slate-50 hover:text-[#00BCB4]')
                                  }
                                >
                                  <span className="text-lg font-bold lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                    Register a company
                                  </span>
                                </NavLink>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* Events */}
              <SidebarLinkGroup activecondition={pathname.includes('events')}>
                {(handleClick, open) => (
                  <React.Fragment>
                    <a
                      href="#0"
                      className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('events') ? 'hover:text-slate-200' : 'hover:text-white'}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick();
                        setSidebarExpanded(true);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={faNewspaper} className='text-slate-50 text-2xl' />
                          <span className={`text-xl font-bold ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-slate-50`}>
                            Events
                          </span>
                        </div>
                        <div className="flex shrink-0 ml-2">
                          <svg
                            className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`}
                            viewBox="0 0 12 12"
                          >
                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                      <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                        <li className="mb-1 last:mb-0">
                          <NavLink
                            end
                            to="/events"
                            className={({ isActive }) => `block transition duration-150 truncate ${isActive ? 'text-[#FD6F63]' : 'text-slate-50 hover:text-[#00BCB4]'}`}
                          >
                            <span className="text-lg font-bold lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              All Events
                            </span>
                          </NavLink>
                        </li>
                        {user?.userType === 'superadmin' || user?.userType === 'admin' || user?.userType === 'auxiliar' ? (
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/events/create"
                              className={({ isActive }) => `block transition duration-150 truncate ${isActive ? 'text-[#FD6F63]' : 'text-slate-50 hover:text-[#00BCB4]'}`}
                            >
                              <span className="text-lg font-bold lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Create an event
                              </span>
                            </NavLink>
                          </li>
                        ) : null}
                      </ul>
                    </div>
                  </React.Fragment>
                )}
              </SidebarLinkGroup>

              {/* Virtual Library, Resources and more */}
              <SidebarLinkGroup activecondition={pathname === '/under-construction'}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('resources') ? 'hover:text-slate-200' : 'hover:text-white'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <FontAwesomeIcon icon={faBuildingColumns} className='text-slate-50 text-2xl' />
                            <span className="text-slate-50 text-xl font-bold hover:text-[#00BCB4] ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Library
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/under-construction"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-[#FD6F63]' : 'text-slate-50 hover:text-[#00BCB4]')
                              }
                            >
                              <span className="text-lg font-bold lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Resources
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-slate-300" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-slate-300" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;