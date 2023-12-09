import { useState, useContext } from "react";
import { doc, addDoc, collection, writeBatch } from 'firebase/firestore';
import { db } from '../firebase/config'
import Swal from 'sweetalert2'
import { CartContext } from '../art/contexts/CartContext';
import { Navigate } from 'react-router-dom'


// import { helpHttp } from "../helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {
    const [cart] = useContext(CartContext)


    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));
        debugger
        if (Object.keys(errors).length === 0) {
            //   alert("Enviando Formulario");
            //   setLoading(true);
            //   helpHttp()
            //     .post("https://formsubmit.co/ajax/jonmircha@gmail.com", {
            //       body: form,
            //       headers: {
            //         "Content-Type": "application/json",
            //         Accept: "application/json",
            //       },
            //     })
            //     .then((res) => {
            //       setLoading(false);
            //       setResponse(true);
            //       setForm(initialForm);
            //       setTimeout(() => setResponse(false), 5000);
            //     });


            const newOrder = {
                order: {
                    ...form
                }
            }

            const orderCollection = collection(db, "orders"); // para crear orden.
            addDoc(orderCollection, newOrder).then((resp) => {
                if (resp.id) {
                    var batch = writeBatch(db);
                    cart.forEach((item) => {
                        // useEffect(() => {
                        let artRef = doc(db, "Art", item.id)
                        batch.update(artRef, { status: "sold", orderId: resp.id })
                        // }, [item.id])
                    });

                    batch.commit().then(() => {
                        // message can be saved to db or email can be sent from here!
                        Swal.fire({
                            title: 'Sent!',
                            text: 'Pedido realizado satisfactoriamente!',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        }).then(() => {

                        });
                    })


                }

            })




        } else {
            return;
        }
    };

    return {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
    };
};