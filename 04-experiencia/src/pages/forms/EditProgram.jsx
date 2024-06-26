import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useParams, useNavigate } from 'react-router-dom';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import Datepicker from '../../components/Datepicker';

const EditProgram = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Obtiene el ID desde la URL
  const { id } = useParams();

  const [programData, setProgramData] = useState({
    name: '',
    description: '',
    sponsor: '',
    sponsor_site: '',
    sponsor_picture: '',
    date_start: '',
    date_end: '',
    industry: '',
    picture: '',
    mentors_related: []
  });

  const url = 'https://programs-nvg.vercel.app/programs';

  // HTTP GET
  useEffect(() => {
    const obtenerPrograma = async () => {
      try {
        const response = await axios.get(`${url}/${id}`);
        const data = response.data;

        // Transformar datos del mentor
        const mentors = data.mentors_related.map(mentor => mentor.mentor_name);
        setProgramData({ ...data, mentors_related: mentors });
      } catch (error) {
        console.log('ERROR AL OBTENER DATA:', error);
      }
    };

    obtenerPrograma();
  }, [id]);

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm({
    defaultValues: programData,
  });

  // Referencias para los componentes Datepicker: date_start y date_end.
  const dateStartRef = useRef();
  const dateEndRef = useRef();

  // Actualiza los valores del formulario cuando se obtienen los datos del programa desde la API.
  useEffect(() => {
    // Actualiza los valores del formulario cuando se obtienen los datos del programa
    reset(programData);
    // Los campos específicos date_start y date_end también se actualizan explícitamente usando setValue
    setValue('date_start', programData.date_start);
    setValue('date_end', programData.date_end);

    // Este efecto se ejecuta cuando programData, reset o setValue cambian.
  }, [programData, reset, setValue]);

  // HTTP PUT
  const onSubmit = async (data) => {
    try {
      await axios.put(`${url}/${id}`, {
        ...data,
        // Asegura que las fechas se envíen sólo en formato 'YYYY-MM-DD'
        date_start: data.date_start ? data.date_start.split(' ')[0] : '',
        date_end: data.date_end ? data.date_end.split(' ')[0] : '',
      });
      // Alerta exitosa
      Swal.fire({
        icon: 'success',
        title: 'Changes applied!',
        showConfirmButton: false,
        timer: 2500
      });
      reset();
      navigate(`/programs`);
    } catch (error) {
      console.error('Error updating program:', error);
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
                <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">Edit program information</h1>
                <h2 className="text-xl text-slate-800 dark:text-slate-100 mb-6">Just change the details you need!</h2>
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
                          <label className="block text-lg font-bold mb-2" htmlFor="name">Program name</label>
                          <input name='name' id="name" className="form-input w-full px-4 py-3 text-lg" type="text" defaultValue={programData.name}
                            {...register('name', {
                              required: {
                                value: true,
                                message: 'This field is mandatory'
                              }
                            })} />
                          {errors.name && <span className='text-[#FD6F63] block mt-2 text-md'>{errors.name.message}</span>}
                        </div>

                        <div className='mb-8'>
                          <label className="block text-lg font-bold mb-2" htmlFor="description">Program description</label>
                          <textarea name="description" id="description" className='form-input w-full h-44 px-4 py-3 text-lg resize-none' defaultValue={programData.description}
                            {...register('description', {
                              required: {
                                value: true,
                                message: 'This field is mandatory'
                              }
                            })} ></textarea>
                          {errors.description && <span className='text-[#FD6F63] block mt-2 text-md'>{errors.description.message}</span>}
                        </div>

                        <div className='mb-8'>
                          <label className="block text-lg font-bold mb-2" htmlFor="sponsor">Program sponsor</label>
                          <input name="sponsor" id="sponsor" className="form-input w-full px-4 py-3 text-lg" type="text" defaultValue={programData.sponsor}
                            {...register('sponsor', {
                              required: {
                                value: true,
                                message: 'This field is mandatory'
                              }
                            })} />
                          {errors.sponsor && <span className='text-[#FD6F63] block mt-2 text-md'>{errors.sponsor.message}</span>}
                        </div>

                        <div className='mb-8'>
                          <label className="block text-lg font-bold mb-2" htmlFor="sponsor_site">Sponsor website</label>
                          <input name="sponsor_site" id="sponsor_site" className="form-input w-full px-4 py-3 text-lg" type="text" defaultValue={programData.sponsor_site}
                            {...register('sponsor_site', {
                              required: {
                                value: true,
                                message: 'This field is mandatory'
                              },
                              pattern: {
                                value: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/,
                                message: 'The URL format is invalid'
                              }
                            })} />
                          {errors.sponsor_site && <span className='text-[#FD6F63] block mt-2 text-md'>{errors.sponsor_site.message}</span>}
                        </div>

                        {/*                         <div className='mb-8'>
                          <div className="flex justify-between items-center">
                            <label className="block text-lg font-bold" htmlFor="sponsor_picture">Sponsor logo</label>
                            <input name="sponsor_picture" id="sponsor_picture" className="form-input w-3/4 px-4 py-3 text-lg" type="file"
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
                              })}
                            />
                          </div>
                        </div> */}

                        <div className='mb-8 flex gap-4 items-center'>
                          <label className="block text-lg font-bold">Program date start</label>
                          <Datepicker
                            ref={dateStartRef}
                            defaultValue={programData.date_start}
                            align="bottom"
                            onChange={(date) => setValue('date_start', date)}
                          />
                          <input
                            type="hidden"
                            {...register('date_start', {
                              required: {
                                value: true,
                                message: 'This field is mandatory'
                              }
                            })}
                          />
                        </div>

                        <div className='mb-8 flex gap-6 items-center'>
                          <label className="block text-lg font-bold">Program date end</label>
                          <Datepicker
                            ref={dateEndRef}
                            defaultValue={programData.date_end}
                            align="bottom"
                            onChange={(date) => setValue('date_end', date)}
                          />
                          <input
                            type="hidden"
                            {...register('date_end', {
                              required: {
                                value: true,
                                message: 'This field is mandatory'
                              }
                            })}
                          />
                        </div>

                        <div className='mb-8'>
                          <div className='flex gap-4 items-center'>
                            <label className="block text-lg font-bold" htmlFor="industry">Program industry</label>
                            <select id="industry" className="form-select" name='industry' defaultValue={programData.industry}
                              {...register('industry', {
                                required: {
                                  value: true,
                                  message: 'This field is mandatory'
                                }
                              })} >
                              <option value={''}>Select just one</option>
                              <option value={'Acceso a agua'}>Acceso a agua</option>
                              <option value={'Agricultura'}>Agricultura</option>
                              <option value={'Canales de distribución'}>Canales de distribución</option>
                              <option value={'Desarrollo económico'}>Desarrollo económico</option>
                              <option value={'Economía circular'}>Economía circular</option>
                              <option value={'Educación'}>Educación</option>
                              <option value={'Energía'}>Energía</option>
                              <option value={'Inclusión socioeconómica'}>Inclusión socioeconómica</option>
                              <option value={'Salud'}>Salud</option>
                              <option value={'Seguridad alimentaria'}>Seguridad alimentaria</option>
                              <option value={'Servicios financieros'}>Servicios financieros</option>
                              <option value={'Vivienda'}>Vivienda</option>
                            </select>
                            {errors.industry && <span className='text-[#FD6F63] block text-md'>{errors.industry.message}</span>}
                          </div>
                        </div>

                        {/*                         <div className='mb-8'>
                          <div className="flex justify-between items-center">
                            <label className="block text-lg font-bold" htmlFor="picture">Program picture</label>
                            <input name="picture" id="picture" className="form-input w-3/4 px-4 py-3 text-lg" type="file"
                              accept=".png, .jpg, .jpeg, .avif, .webp"
                              {...register('picture', {
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
                              })}
                            />
                          </div>
                        </div> */}

                        <div className='mb-8'>
                          <label className="block text-lg font-bold mb-2">Which mentors will be leading this program?</label>

                          <div className='grid grid-cols-3'>
                            {['John Doe', 'Jane Smith', 'Gloria Garcia', 'Alice Smith', 'Michael Brown', 'Emily Johnson'].map((mentor, index) => (
                              <span key={index} className="flex items-center">
                                <input type="checkbox" className="form-checkbox" value={mentor}
                                  {...register('mentors_related', {
                                    validate: value => value.length > 0 || 'At least one mentor must be selected'
                                  })} />
                                <p className="text-lg ml-4">{mentor}</p>
                              </span>
                            ))}
                          </div>
                          {errors.mentors_related && <span className='text-[#FD6F63] block mt-2 text-md'>{errors.mentors_related.message}</span>}
                        </div>

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

export default EditProgram