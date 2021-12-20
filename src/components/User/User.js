import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {  useCartContext } from '../../Context/CartContext'


const Schema = Yup.object().shape({
    email: Yup.string().required('This field is required'),
    cemail: Yup.string().when('email', {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
        [Yup.ref('email')],
        'Ambos correos deben ser iguales'
    )
    })
})

function User() {
    const {addBuyer} = useCartContext()
    const [sentForm, setSentForm] = useState(false);
    return (
        <Formik initialValues={{name:'',phone:'',email:'',cemail:''}}
            validate={(data)=>{
                let err ={}

                if(!data.name){
                    err.name = 'Ingrese su nombre'
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(data.name)){
                    err.name = 'El nombre solo puede contener letras y espacios'
                }

                if(!data.phone){
                    err.phone = 'Ingrese su nombre'
                } else if(!/^\d{7,14}$/.test(data.phone)){
                    err.phone = 'El teléfono solo puede contener numeros de 7 a 14 dígitos'
                }

                if(!data.email){
                    err.email = 'Campo obligatorio'
                } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(data.email)){
                    err.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo'
                }

                if(!data.cemail){
                    err.cemail = 'Campo obligatorio'
                } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(data.cemail)){
                    err.cemail = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo'
                }
                return err
            }}
            validationSchema={Schema}

            onSubmit={(data, {resetForm}) =>{
                resetForm()
                setSentForm(true);
                addBuyer(data);
            }}
        >
        {( {errors} ) => (
            <Form>
                <div >
                    <label htmlFor='name' className='form-label'>Nombre</label>
                    <Field type='text' className='form-control' id='name' aria-describedby='nameHelp' placeholder='Ingrese su nombre' name='name'/>
                    <ErrorMessage name='name' component={()=>(<div id='nameHelp' className='form-text'>{errors.name}</div>)}/>
                </div>
                <div >
                    <label htmlFor='phone' className='form-label'>Teléfono</label>
                    <Field type='number' className='form-control' id='phone' aria-describedby='phoneHelp' placeholder='Ingrese su teléfono' name='phone'/>
                    <ErrorMessage name='phone' component={()=>(<div id='phoneHelp' className='form-text'>{errors.phone}</div>)}/>
                </div>
                <div >
                    <label htmlFor='email' className='form-label'>Correo Electrónico</label>
                    <Field type='email' className='form-control' id='email' aria-describedby='emailHelp' placeholder='Ingrese su correo' name='email'/>
                    <ErrorMessage name='email' component={()=>(<div id='emailHelp' className='form-text'>{errors.email}</div>)}/>
                </div>
                <div >
                    <label htmlFor='cemail' className='form-label'>Confirmar Correo Electrónico</label>
                    <Field type='email' className='form-control' id='cemail' aria-describedby='cemailHelp' placeholder='Confirme su correo' name='cemail'/>
                    <ErrorMessage name='cemail' component={()=>(<div id='cemailHelp' className='form-text'>{errors.cemail}</div>)}/>
                </div>
                <button type='submit' className='btn btn-primary'>REGISTRAR</button>
                {sentForm && <p className='succes'>Registrado con exito!</p>}
            </Form>
		)}
        </Formik>
    )
}

export default User
