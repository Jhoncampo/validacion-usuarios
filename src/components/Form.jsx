//Componente de prueba: aquí manejamos la mayor parte de la logica del formulario

import { useState } from 'react'

const Form = ({children, initialState, onSubmit}) => {
    const [valores, setValores ] = useState(initialState)

    const handleSubmit = (e)=>{
        e.preventDefault()
        onSubmit(valores)
    }

    const handleChange = (e) =>{
        const { name, type, checked, value} = e.target
        setValores({...valores, [name]: type === "checkbox" ? checked: value})
    }

  return children({valores, handleChange, handleSubmit})
}

export default Form