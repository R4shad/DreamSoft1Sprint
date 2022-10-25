import { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Boton,FormInputs, FormContraseña} from '../Elementos/ElementosForms';
import {signInWithEmailAndPassword, verifyBeforeUpdateEmail} from "firebase/auth";
import { auth } from '../Firebase/ConexionBD';
import { UserContext } from '../context/userProvider';
import { useNavigate } from "react-router-dom"

export default function ModalCmp({show, handleClose, setShow}) {
  const {loginUser, user} = useContext(UserContext);
  const navegate = useNavigate();
  const [password, cambiarPassword] = useState({campo: "", valido: null});
  const [correo, cambiarCorreo] = useState({campo: "", valido: null});
  const [formValido, cambiarFormValido] = useState({campo: "", valido: null});
  const expresiones = {
      nombreJugador: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras, numeros y espacios, pueden llevar acentos.
      password: /^.{6,10}$/, // 4 a 12 digitos.
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      telefono: /^\d{7,8}$/, // 7 a 14 numeros.
      ci: /^\d{7,8}$/ // 7 a 14 numeros.
  }
  
  useEffect(() => {
    if(user){
     //navegate("/")
    }
 }, [user]);
 
  async function iniciarSesion(e){
    e.preventDefault();
    if( correo.valido === 'true' && password.valido === 'true'){
        cambiarFormValido(true);
        cambiarCorreo({campo:'',valido:null});
           
        try{
          await loginUser(correo.campo,password.campo);
          setShow(false);
          correo.campo="";
          password.campo="";

          navegate("/")
      }catch(error){
          if(error.code === "auth/wrong-password"){
              alert("Contraseña incorrecta")
          }else{
              alert("Esta cuenta no esta registrada")
          }
          //console.log(error.code);
          

      }
    }
  }

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Inicio de Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FormInputs
            estado={correo}
            cambiarEstado={cambiarCorreo} 
            expresionRegular = {expresiones.correo}   
            label="Correo:"
            placeholder="name@example.com"
            alerta="Formato valido name@example.com"
            id="3"
            />

            <FormContraseña
            label="Contraseña:"
            placeholder="123456"
            estado={password}
            cambiarEstado={cambiarPassword}
            expresionRegular={expresiones.password}
            alerta="Debe tener entre 6 y 10 caracteres"
            id="5"
            />   
        </Modal.Body>
        <Modal.Footer>
          <Boton type='submit'
          texto='Iniciar'
          manejarClic={iniciarSesion}/>
          
        </Modal.Footer>
      </Modal>
  );
}

