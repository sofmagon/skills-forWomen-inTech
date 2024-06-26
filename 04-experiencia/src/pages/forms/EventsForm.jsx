import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import Datepicker from '../../components/Datepicker';

const EventsForm = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  // Referencia para el componente Datepicker
  const dateRef = useRef(null);

  const onSubmit = () => {
    Swal.fire({
      icon: 'success',
      title: 'Event created!',
      showConfirmButton: false,
      timer: 2500
    });
    reset();
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
                <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">Create a new Event</h1>
                <h2 className="text-xl text-slate-800 dark:text-slate-100 mb-6">Just fill out the following fields to create a new one! <span className='font-bold underline'>All of them are required.</span></h2>
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
                          <input name="name" id="name" className="form-input w-full px-4 py-3 text-lg" type="text"
                            {...register('name', {
                              required: {
                                value: true,
                                message: 'This field is mandatory'
                              }
                            })} />
                          {errors.name && <span className='text-[#FD6F63] block mt-2 text-md'>{errors.name.message}</span>}
                        </div>

                        <div className='mb-8'>
                          <label className="block text-lg font-bold mb-2" htmlFor="description">Event description</label>
                          <textarea name="description" id="description" className='form-input w-full px-4 py-3 text-lg resize-none'
                            {...register('description', {
                              required: {
                                value: true,
                                message: 'This field is mandatory'
                              }
                            })} ></textarea>
                          {errors.description && <span className='text-[#FD6F63] block mt-2 text-md'>{errors.description.message}</span>}
                        </div>

                        <div className='mb-8 flex gap-6 items-center'>
                          <label className="block text-lg font-bold" htmlFor="dateStart">Event date</label>
                          <Datepicker name="date" ref={dateRef} />
                        </div>

                        <div className='mb-8'>
                          <label className="block text-lg font-bold mb-2" htmlFor="url">Event website or Register link</label>
                          <input name="url" id="url" className="form-input w-full px-4 py-3 text-lg" type="text"
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
                                validate: {
                                  validFileType: value => {
                                    // Si no se ha seleccionado ningún archivo, se considera válido
                                    if (!value[0]) return true;
                                    const validExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.avif', '.webp'];
                                    // Obtiene la extensión del archivo seleccionado
                                    const fileExtension = value[0].name.split('.').pop().toLowerCase();
                                    // Verificando si la extensión del archivo es una de las extensiones válidas
                                    return validExtensions.includes('.' + fileExtension);
                                  }
                                }
                              })}
                            />
                          </div>
                        </div> */}

                        <div className="mt-12">
                          <button className='btn block mx-auto bg-[#000] hover:bg-[#00BCB4] dark:bg-[#FD6F63] dark:hover:bg-[#00BCB4] dark:opacity-85 text-white font-medium text-lg'><span>Save information</span></button>
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

export default EventsForm