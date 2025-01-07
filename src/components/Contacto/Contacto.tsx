// import { SetStateAction, useState } from 'react';
import './Contacto.css'
import { useForm } from 'react-hook-form';

const Contacto = () => {
    //PRIMERA FORMA DE LLAMAR FORMS
    // const [nombre, setNombre] = useState("");
    // const [email, setEmail] = useState("");

    // const handleNombre = (e: { target: { value: string; }; }) => {
    //     setNombre(e.target.value);
    // }

    // const handleEmail = (e: { target: { value: string; }; }) => {
    //     setEmail(e.target.value);
    // }

    //SEGUNDA FORMA DE LLAMAR FORMS
    // const [valores, setValores] = useState({
    //     nombre: "",
    //     email: "",
    //     telefono: 0
    // });

    // const handleValores = (e: any) => {
    //     setValores({
    //         ...valores,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const handleSubmit = (e: { preventDefault: () => void; }) => {
    //     e.preventDefault();
    //     // console.log("Enviado", { valores });
    // }

    // TERCERA FORMA instalar "npm install react-hook-form"
    const {register, handleSubmit} = useForm();

    const enviar = (data:any) => {
        console.log("Enviado", data);
    }

    return (
        <div>
            <div className="container">
                <h1 className="contacto">Contacto</h1>
                {/* <form action="" className="formulario" onSubmit={handleSubmit}> */}
                <form action="" className="formulario" onSubmit={handleSubmit(enviar)}>
                <input
                        type="text"
                        placeholder='Ingrese su nombre'
                        {...register("nombre")}
                    />
                    <input
                        type="email"
                        placeholder='Ingrese su correo'
                        {...register("email")}
                    />
                    <input
                        type="phone"
                        placeholder='Ingrese su telefono'
                        {...register("telefono")}
                    />

                    {/* <input
                        type="text"
                        placeholder='Ingrese su nombre'
                        // value={nombre}
                        // onChange={handleNombre}
                        value={valores.nombre}
                        onChange={handleValores}
                        name="nombre"
                    />
                    <input
                        type="email"
                        placeholder='Ingrese su correo'
                        // value={valores.email}
                        // onChange={handleEmail}
                        value={valores.email}
                        onChange={handleValores}
                        name="email"
                    />
                    <input
                        type="phone"
                        placeholder='Ingrese su telefono'
                        value={valores.telefono}
                        onChange={handleValores}
                        name="telefono"
                    /> */}

                    <button className="enviar" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contacto
