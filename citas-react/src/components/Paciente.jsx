import React from 'react'

const Paciente = () => {
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {" "}<span className='font-normal normal-case'>Hook</span> </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {" "}<span className='font-normal normal-case'>Joao</span> </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {" "}<span className='font-normal normal-case'>correr@correo.com</span> </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {" "}<span className='font-normal normal-case'>10/12/23</span> </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {" "}<span className='font-normal normal-case'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi magnam odit perferendis voluptates nihil repellendus, officiis explicabo praesentium labore sed exercitationem laborum natus quasi laudantium aliquam magni dicta accusantium nobis.</span> </p>
  </div>
  )
}

export default Paciente