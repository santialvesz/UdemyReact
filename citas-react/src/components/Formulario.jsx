import React from 'react'
import { useState, useEffect} from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    


  return (
    <div className="md:w-1/2 lg:w-2/5">
    <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
    <p className=' text-lg mt-5 text-center mb-10'>
      Anade pacientes y {" "}
      <span className='text-indigo-600 font-bold'>Administralos</span>
    </p>
    <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
        <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='mascota' type="text" placeholder='Nombre de la Mascota' value={nombre} onChange={ (e) => setNombre(e.target.value) }/>
        </div>
        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre Propitario</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='propietario' type="text" placeholder='Nombre de el Propietario' value={propietario} onChange={ (e) => setPropietario(e.target.value) }/>
        </div>
        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='email' type="email" placeholder='Email' value={email} onChange={ (e) => setEmail(e.target.value) }/>
        </div>
        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='alta' type="date" value={fecha} onChange={ (e) => setFecha(e.target.value) }/>
        </div>
        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
          <textarea name="" id="sintomas" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Describe los Sintomas' value={sintomas} onChange={ (e) => setSintomas(e.target.value) }></textarea>
        </div>

        <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' value={"Agregar Paciente"}/>
    </form>
    </div>
  )
}

export default Formulario