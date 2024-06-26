import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useParams, useNavigate } from 'react-router-dom';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import Datepicker from '../../components/Datepicker';

const EditEvent = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Obtiene el ID desde la URL
  const { id } = useParams();

  const [eventData, setEventData] = useState({
    name: '',
    about: '',
    date: '',
    url: '',
    image: ''
  });

  const url = 'https://events-nvg.vercel.app/events';

  // HTTP GET
  useEffect(() => {
    const obtenerEvento = async () => {
      try {
        const response = await axios.get(`${url}/${id}`);
        setEventData(response.data);
      } catch (error) {
        console.log('ERROR AL OBTENER DATA:', error);
      }
    };

    obtenerEvento();
  }, [id]);

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm({
    defaultValues: eventData,
  });

  // Referencia para el componente Datepicker: date
  const dateRef = useRef();

  // Se ejecutará cada vez que eventData o reset cambien
  useEffect(() => {
    // Actualiza los valores del formulario cuando se obtienen los datos del evento
    reset(eventData);
    // date también se actualiza explícitamente usando setValue
    setValue('date', eventData.date);
  }, [eventData, reset, setValue]);

  // HTTP PUT
  const onSubmit = async (data) => {
    try {
      await axios.put(`${url}/${id}`, {
        ...data,
        date: data.date ? data.date.split(' ')[0] : '',
      });
      Swal.fire({
        icon: 'success',
        title: 'Changes applied!',
        showConfirmButton: false,
        timer: 2500
      });
      reset();
      navigate(`/events`);
    } catch (error) {
      console.error('Error updating event:', error);
    }
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
            <div className="sm:flex sm:justify-between sm:items-center">
              {/* Title & instructions */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">Edit the details</h1>
                <h2 className="text-xl text-slate-800 dark:text-slate-100 mb-6">Just change the information you need!</h2>
              </div>
            </div>

            {/* Body */}
            <div className="border-t border-slate-200 dark:border-zinc-600">
              <div className="max-w-3xl m-auto mt-8">
                <div className="xl:flex">
                  <div className="grow pb-6 dark:border-zinc-700">
                    <div className="flex justify-between flex-nowrap items-center space-x-2 mb-4">
                      <form onSubmit={handleSubmit(onSubmit)} className='w-full'>

                        <div className='mb-8'>
                          <label className="block text-lg font-bold mb-2" htmlFor="name">Event name</label>
                          <input name="name" id="name" className="form-input w-full px-4 py-3 text-lg" type="text" defaultValue={eventData.name}
                            {...register('name', {
                              required: {
                                value: true,
                                message: 'This field is mandatory'
                              }
                            })} />
                          {errors.name && <span className='text-[#FD6F63] block mt-2 text-md'>{errors.name.message}</span>}
                        </div>

                        <div className='mb-8'>
                          <label className="block text-lg font-bold mb-2" htmlFor="about">Event description</label>
                          <textarea name="about" id="about" className='form-input w-full h-44 px-4 py-3 text-lg resize-none' defaultValue={eventData.about}
                            {...register('about', {
                              required: {
                                value: true,
                                message: 'This field is mandatory'
                              }
                            })} ></textarea>
                          {errors.about && <span className='text-[#FD6F63] block mt-2 text-md'>{errors.about.message}</span>}
                        </div>

                        <div className='mb-8 flex gap-4 items-center'>
                          <label className="block text-lg font-bold" htmlFor="dateStart">Event date</label>
                          <Datepicker
                            ref={dateRef}
                            defaultValue={eventData.date}
                            align="bottom"
                            onChange={(date) => setValue('date', date)}
                          />
                          <input
                            type="hidden"
                            {...register('date', {
                              required: {
                                value: true,
                                message: 'This field is mandatory'
                              }
                            })}
                          />
                        </div>

                        <div className='mb-8'>
                          <label className="block text-lg font-bold mb-2" htmlFor="url">Event website or Register link</label>
                          <input name="url" id="url" className="form-input w-full px-4 py-3 text-lg" type="text" defaultValue={eventData.url}
                            {...register('url', {
                              required: {
                                value: true,
                                message: 'This field is mandatory'
                              },
                              pattern: {
                                value: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/,
                                message: 'The URL format is invalid'
                              }
                            })} />
                          {errors.url && <span className='text-[#FD6F63] block mt-2 text-md'>{errors.url.message}</span>}
                        </div>

                        {/*                         <div className='mb-8'>
                          <div className="flex justify-between items-center">
                            <label className="block text-lg font-bold" htmlFor="image">Event picture</label>
                            <input name="image" id="image" className="form-input w-3/4 px-4 py-3 text-lg" type="file"
                              accept=".png, .jpg, .jpeg, .avif, .webp"
                              {...register('image', {
                                validate: value => {
                                  // Si no se ha seleccionado ningún archivo, se considera válido
                                  if (!value && value.length === 0) return true;

                                  const validExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.avif', '.webp'];

                                  // Si hay un archivo seleccionado, verifica su extensión
                                  if (value && value.length > 0) {
                                    // Obtiene la extensión
                                    const fileExtension = value[0].name.split('.').pop().toLowerCase();
                                    // Verifica si la extensión está en la lista de válidas
                                    return validExtensions.includes('.' + fileExtension) || 'Invalid file type';
                                  }

                                  // Si no hay archivo seleccionado, se considera válido
                                  return true;
                                }
                              })} />
                            {errors.image && <span className='text-[#FD6F63] block mt-2 text-md'>{errors.image.message}</span>}
                          </div>
                        </div> */}

                        <div className="mt-12">
                          <button className='btn block mx-auto bg-[#000] hover:bg-[#00BCB4] dark:bg-[#FD6F63] dark:hover:bg-[#00BCB4] dark:opacity-85 text-white font-medium text-lg'><span>Save changes</span></button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default EditEvent