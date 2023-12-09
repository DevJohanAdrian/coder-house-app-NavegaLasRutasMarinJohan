import React, { useState, useContext, useEffect } from "react";
import { CartContext } from '../../art/contexts/CartContext';
import { Navigate } from 'react-router-dom'
import { doc, addDoc, collection, writeBatch } from 'firebase/firestore';
import { db } from '../../firebase/config'
import Swal from 'sweetalert2'
import { CardCart } from '../../art/components'
import { useForm } from '../../hooks/useForm'


let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};



const initialForm = {
  name: "",
  email: "",
  lastName: "",
  telephone: "",
  identification: "",
  address: "",
  city: "",
  postalCode: ""
}


const validateForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  // let regexComments = /^.{1,255}$/;
  let regexTel = /^.{1,10}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.lastName.trim()) {
    errors.lastName = "El campo 'Apellido' es requerido";
  }

  if (!form.telephone.trim()) {
    errors.telephone = "El campo 'Telefono' es requerido";
  }else if (!regexTel.test(form.telephone.trim())) {
    errors.telephone =
      "El campo 'Comentarios' no debe exceder los 255 caracteres";
  }

  if (!form.identification.trim()) {
    errors.identification = "El campo 'Identification' es requerido";
  }


  if (!form.address.trim()) {
    errors.address = "El campo 'Direccion' es requerido";
  }


  if (!form.city.trim()) {
    errors.city = "El campo 'Ciudad' es requerido";
  }

  if (!form.postalCode.trim()) {
    errors.postalCode = "El campo 'postalCode' es requerido";
  }


  // if (!form.comments.trim()) {
  //   errors.comments = "El campo 'Comentarios' es requerido";
  // } else if (!regexComments.test(form.comments.trim())) {
  //   errors.comments =
  //     "El campo 'Comentarios' no debe exceder los 255 caracteres";
  // }

  return errors;
};

export const CartPage = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useForm(initialForm, validateForm);

  const [cart] = useContext(CartContext)




  if (cart.length <= 0 || !cart) {

    Swal.fire({
      title: 'Error!',
      text: 'No hay productos agregados al carrito.',
      icon: "error",
      allowEscapeKey: false,
      allowOutsideClick: false,
      // showCancelButton: true,
      // cancelButtonColor: "#d33",
      confirmButtonColor: "#212529",
      confirmButtonText: "Okay"
    })
    return <Navigate to="/home" />


  }

  // const formSubmitHandle = (e) => {

  //   debugger
  //   e.preventDefault();

  //   const newOrder = {
  //     order: {
  //       ...form
  //     }
  //   }
  //   const orderCollection = collection(db, "orders"); // para crear orden.
  //   addDoc(orderCollection, newOrder).then((resp) => {
  //     if (resp.id) {
  //       var batch = writeBatch(db);
  //       cart.forEach((item) => {
  //         // useEffect(() => {
  //         let artRef = doc(db, "Art", item.id)
  //         batch.update(artRef, { status: "sold", orderId: resp.id })
  //         // }, [item.id])
  //       });

  //       batch.commit().then(() => {
  //         // message can be saved to db or email can be sent from here!
  //         Swal.fire({
  //           title: 'Sent!',
  //           text: 'Pedido realizado satisfactoriamente!',
  //           icon: 'success',
  //           confirmButtonText: 'Cool'
  //         })
  //       })


  //     }

  //   })


  // }

  return (
    <>

      <div className="container text-start">
        <div className="row">

          <div className="col-md-6 col-6 mx-auto">
            <form noValidate className="needs-validation" onSubmit={handleSubmit}>
              <div className="my-5">
                <h2 className="text-start">Detalles del cliente</h2>
              </div>
              <div className="mb-4 ">
                <label htmlFor="email" className="form-label">
                  Email para confirmacion de pedido*
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="name@example.com"
                />
                {errors.email && <p style={styles}>{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="form-label">
                  Nombre*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="ingrese un nombre"
                />
                {errors.name && <p style={styles}>{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="form-label">
                  Apellido*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="ingrese un apellido"
                />
                {errors.lastName && <p style={styles}>{errors.lastName}</p>}

              </div>
              <div className="mb-4">
                <label htmlFor="telephone" className="form-label">
                  Telefono*
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="tele"
                  name="telephone"
                  value={form.telephone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="ingrese un telefono"
                />
                {errors.telephone && <p style={styles}>{errors.telephone}</p>}

              </div>

              <div className="mb-4">
                <label htmlFor="identification" className="form-label">
                  Identification*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="identification"
                  name="identification"
                  value={form.identification}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="ingrese una identification"
                />
                {errors.identification && <p style={styles}>{errors.identification}</p>}

              </div>
              <div className="my-5">
                <h2 className="text-start">Detalles de envío</h2>
              </div>

              <div className="mb-4">
                <label htmlFor="address" className="form-label">
                  Dirección*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="ingrese una dirección"
                />
                {errors.address && <p style={styles}>{errors.address}</p>}

              </div>

              <div className="mb-4">
                <label htmlFor="city" className="form-label">
                  Ciudad*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="ingrese una ciudad"
                />
                {errors.city && <p style={styles}>{errors.city}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="postalCode" className="form-label">
                  Codigo postal*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="postalCode"
                  name="postalCode"
                  value={form.postalCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="ingrese un codigo postal"
                />
                {errors.postalCode && <p style={styles}>{errors.postalCode}</p>}

              </div>

              <div className="mb-3">
                <div className="col-12">
                  <button className="btn btn-outline-primary mt-3" type="submit">
                    Finalizar
                  </button>
                </div>
              </div>

            </form>
          </div>




          {/* descripcion del producto */}
          <div className="col-md-6 col-6 mx-auto ">
            <div className="row g-2">
              {cart.map((item) => (
                <CardCart key={item.id}
                  {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
