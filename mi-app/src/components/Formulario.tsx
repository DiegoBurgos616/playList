import { ChangeEvent, useState } from "react"
import { useForm } from "./hooks/useForm"


interface FormData{
    email:string,
    nombre:string,
    edad:number
}

export const Formulario = () => {

    //custom hook
    const { formulario, handleChange } = useForm<FormData>({
        email: 'diego.db593@gmail.com',
        nombre: 'Diego Burgos',
        edad: 21
    });




    //const [formulario, setFormulario] = useState({
    //   email: '',
    //    nombre: ''
    // });


    //const handleChange=({target}:ChangeEvent<HTMLInputElement>)=>{
    //const{name,value}=target;
    //    ...formulario,
    //      [name]:value
    //    })
    //}


    return (
        <form autoComplete="off">
            <div className="bm-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" onChange={handleChange} value={formulario.email} />

            </div>


            <div className="bm-3">
                <label className="form-label">Nombre</label>
                <input type="text" name="nombre" className="form-control" onChange={handleChange} value={formulario.nombre} />
            </div>


            <div className="bm-3">
                <label className="form-label">Edad</label>
                <input type="number" name="edad" className="form-control" onChange={handleChange} value={formulario.edad} />
            </div>

            <pre> {JSON.stringify(formulario)} </pre>


        </form>
    )



}