import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../css/additional-styles/sweetAlert.css';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

const Events = () => {

  // Recuperar los datos del usuario desde el local storage
  const user = JSON.parse(localStorage.getItem('user'));

  const url = 'https://events-nvg.vercel.app/events';
  const [evento, setEvento] = useState();

  useEffect(() => {
    const obtenerEventos = async () => {
      try {
        const response = await axios.get(url);
        setEvento(response.data);
      } catch (error) {
        console.log('ERROR AL OBTENER DATA:', error);
      }
    }

    obtenerEventos();
  }, []);

  const handleDeleteEvent = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, continue',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'alert-confirm',
        cancelButton: 'alert-cancel'
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`${url}/${id}`);

          if (response.status === 200 || response.status === 204) {
            // Después de eliminar el evento, actualizar la lista
            const updatedEvents = evento.filter(event => event.id !== id);
            // Actualizar el estado con los eventos restantes
            setEvento(updatedEvents);

            Swal.fire({
              title: 'Deleted!',
              text: 'The event has been deleted',
              icon: 'success',
              showConfirmButton: false,
              timer: 2500
            });
          } else {
            Swal.fire({
              title: 'Error!',
              text: 'There was an error deleting the event',
              icon: 'error',
              showConfirmButton: false,
              timer: 2500
            });
          }
        } catch (error) {
          console.error('ERROR AL ELIMINAR EVENTO', error);
          Swal.fire({
            title: 'Error!',
            text: 'There was an error deleting the event',
            icon: 'error',
            showConfirmButton: false,
            timer: 2500
          });
        }
      }
    });
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Formatear la fecha, de 06-18-2024 a June 18th, 2024
  const formatDate = (dateString) => {
    // Opciones para formatear la fecha con año, mes completo y día numérico
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    // Divide la cadena de fecha en componentes de mes, día y año
    const [month, day, year] = dateString.split('-');
    // Crea un nuevo objeto Date usando el formato ISO (yyyy-mm-dd)
    const date = new Date(`${year}-${month}-${day}T00:00:00`);
    // Convierte la fecha al formato de cadena local usando las opciones definidas
    const formattedDate = date.toLocaleDateString('en-US', options);
    // Obtiene el día del mes como un número entero
    const dayOfMonth = parseInt(day, 10);

    // Función para obtener el sufijo correcto para el día (st, nd, rd, th)
    const daySuffix = (day) => {
      if (day > 3 && day < 21) return 'th'; // Maneja 11-20
      switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };

    // Reemplaza el día en la cadena formateada con el día y su sufijo
    return formattedDate.replace(dayOfMonth, `${dayOfMonth}${daySuffix(dayOfMonth)}`);
  };

  return (
    <div className="flex h-[100dvh] overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white dark:bg-zinc-900">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Our Incredible Schedule 🚀</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

                {/* Add event button + Manejo de permisos */}
                {(user?.userType === 'superadmin' || user?.userType === 'admin' || user?.userType === 'auxiliar') && (
                  <Link to={`/events/create`} className="btn bg-[#FD6F63] hover:bg-[#00BCB4] dark:opacity-85 text-white">
                    <svg className="w-4 h-4 fill-current opacity-70 shrink-0" viewBox="0 0 16 16">
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="ml-2">Add Event</span>
                  </Link>
                )}
              </div>
            </div>

            <div className="border-t border-slate-200 dark:border-zinc-600">
              <div className="max-w-3xl m-auto mt-8">

                {/* Crear eventos dinámicamente */}
                {evento && evento.map(({ id, name, about, date, image }) => (
                  <article key={id} className="pt-6">
                    <div className="xl:flex">
                      <div className="grow pb-6 border-b border-slate-200 dark:border-zinc-700">
                        <header>
                          <h2 className="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-3">{name}</h2>
                          <div className="flex flex-nowrap items-center space-x-2 mb-4">
                            <img src={image} alt={`Image about ${name}`} />
                          </div>
                          <p className='text-xl my-4 font-bold'>{formatDate(date)}</p>
                        </header>
                        <div className="space-y-3 text-lg">
                          <p className='text-justify'>{about}</p>
                        </div>
                        <div className="mt-5">
                          <button className='btn bg-[#000] hover:bg-zinc-600 dark:bg-zinc-600 dark:hover:bg-zinc-500 text-white font-medium text-lg mr-4'><span>Join now</span></button>

                          {/* Botones + Manejo de permisos */}
                          {(user?.userType === 'superadmin' || user?.userType === 'admin' || user?.userType === 'auxiliar') && (
                            <>
                              <Link to={`/events/edit/${id}`} className='btn bg-[#00BCB4] hover:bg-[#000] dark:bg-[#00BCB4] dark:opacity-90 dark:hover:bg-zinc-600 text-white font-medium text-lg mr-4'>
                                <span>Edit details</span>
                              </Link>

                              <button onClick={() => handleDeleteEvent(id)} className='btn bg-[#FD6F63] hover:bg-[#000] dark:bg-[#FD6F63] dark:opacity-85 dark:hover:bg-zinc-600 text-white font-medium text-lg'>
                                <span>Remove</span>
                              </button>
                            </>
                          )}

                        </div>
                      </div>
                    </div>
                  </article>
                ))}

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Events