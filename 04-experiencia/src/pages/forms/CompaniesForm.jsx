import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

const CompaniesForm = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = () => {
    Swal.fire({
      icon: 'success',
      title: 'Company registered!',
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
                <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">Register a new Company</h1>
                <h2 className="text-xl text-slate-800 dark:text-slate-100 mb-6">Just fill out the following fields to complete the company registration! <span className='font-bold underline'>All of them are required.</span></h2>
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
                          <label className="block text-lg font-bold mb-2" htmlFor="name">Company name</label>
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
                          <div className="flex flex-wrap items-center">
                            <label className="block text-lg font-bold" htmlFor="name">Company status</label>
                            <div className="ml-6">
                              <label className="flex items-center">
                                <input type="radio" name="radio-buttons" className="form-radio" value="active" defaultChecked />
                                <span className="text-md ml-2">Active</span>
                              </label>
                            </div>

                            <div className="ml-6">
                              <label className="flex items-center">
                                <input type="radio" name="radio-buttons" className="form-radio" value="inactive" />
                                <span className="text-md ml-2">Inactive</span>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className='mb-8'>
                          <label className="block text-lg font-bold mb-2" htmlFor="about">Company about</label>
                          <textarea name="about" id="about" className='form-input w-full px-4 py-3 text-lg resize-none'
                            {...register('about', {
                              required: {
                                value: true,
                                message: 'This field is mandatory'
                              }
                            })} ></textarea>
                          {errors.about && <span className='text-[#FD6F63] block mt-2 text-md'>{errors.about.message}</span>}
                        </div>

                        <div className='mb-8'>
                          <label className="block text-lg font-bold mb-2" htmlFor="site">Company website</label>
                          <input name="site" id="site" className="form-input w-full px-4 py-3 text-lg" type="text"
                            {...register('site', {
                              required: {
                                value: true,
                                message: 'This field is mandatory'
                              },
                              pattern: {
                                value: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/,
                                message: 'The URL format is invalid'
                              }
                            })} />
                          {errors.site && <span className='text-[#FD6F63] block mt-2 text-md'>{errors.site.message}</span>}
                        </div>

                        <div className='mb-8'>
                          <div className='flex gap-4 items-center'>
                            <label className="block text-lg font-bold" htmlFor="country">Country</label>
                            <select id="country" className="form-select" name="country"
                              {...register('country', {
                                required: {
                                  value: true,
                                  message: 'This field is mandatory'
                                }
                              })} >
                              <option value={''}>Select a country</option>
                              <option value={'Argentina'}>Argentina</option>
                              <option value={'Bolivia'}>Bolivia</option>
                              <option value={'Brasil'}>Brasil</option>
                              <option value={'Chile'}>Chile</option>
                              <option value={'Colombia'}>Colombia</option>
                              <option value={'Costa Rica'}>Costa Rica</option>
                              <option value={'Cuba'}>Cuba</option>
                              <option value={'España'}>España</option>
                              <option value={'Ecuador'}>Ecuador</option>
                              <option value={'El Salvador'}>El Salvador</option>
                              <option value={'Guatemala'}>Guatemala</option>
                              <option value={'Haití'}>Haití</option>
                              <option value={'Honduras'}>Honduras</option>
                              <option value={'México'}>México</option>
                              <option value={'Nicaragua'}>Nicaragua</option>
                              <option value={'Panamá'}>Panamá</option>
                              <option value={'Paraguay'}>Paraguay</option>
                              <option value={'Perú'}>Perú</option>
                              <option value={'República Dominicana'}>República Dominicana</option>
                              <option value={'Uruguay'}>Uruguay</option>
                              <option value={'Venezuela'}>Venezuela</option>
                            </select>
                            {errors.country && <span className='text-[#FD6F63] block text-md'>{errors.country.message}</span>}
                          </div>
                        </div>

                        <div className='mb-8'>
                          <div className='flex gap-4 items-center'>
                            <label className="block text-lg font-bold" htmlFor="business_activity">Business activity</label>
                            <select id="business_activity" className="form-select" name="business_activity"
                              {...register('business_activity', {
                                required: {
                                  value: true,
                                  message: 'This field is mandatory'
                                }
                              })} >
                              <option value={''}>Select just one</option>
                              <option value={'Information Technology'}>Information Technology</option>
                              <option value={'Marketing'}>Marketing</option>
                              <option value={'Environmental Services'}>Environmental Services</option>
                              <option value={'Healthcare'}>Healthcare</option>
                              <option value={'Finance'}>Finance</option>
                            </select>
                            {errors.business_activity && <span className='text-[#FD6F63] block text-md'>{errors.business_activity.message}</span>}
                          </div>
                        </div>

                        {/*                         <div className='mb-8'>
                          <div className="flex justify-between items-center">
                            <label className="block text-lg font-bold" htmlFor="image">Company logo</label>
                            <input name="image" id="image" className="form-input w-3/4 px-4 py-3 text-lg" type="file"
                              accept=".png, .jpg, .jpeg, .svg, .avif, .webp"
                              {...register('sponsor_picture', {
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
                              })} />
                          </div>
                        </div> */}

                        <div className="mt-12">
                          <button className='btn block mx-auto bg-[#000] hover:bg-[#00BCB4] dark:bg-[#FD6F63] dark:hover:bg-[#00BCB4] dark:opacity-85 text-white font-medium text-lg'>
                            <span>Save information</span>
                          </button>
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

export default CompaniesForm