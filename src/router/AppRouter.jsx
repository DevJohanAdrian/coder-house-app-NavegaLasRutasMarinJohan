import React from 'react'
import { NavbarMenu, HomePage, Footer, CartPage} from '../ui'

import {PicturePage, SculturePage, SearchPage, ProductPage }  from '../art'
// import { ArtRoutes } from '../art'
import { Routes, Route, Navigate } from 'react-router-dom'
import {CartProvider} from '../art/contexts/CartContext'
export const AppRouter = () => {
    return (
        <>
       
        <CartProvider>
        <NavbarMenu />
            <Routes>
                <Route path='home' element={<HomePage />} />


                {/* Ruta a componente login here */}

                {/* <Route path='/*' element={<ArtRoutes />} /> */}

                <Route path='picture' element={<PicturePage />} />
                <Route path='sculture' element={<SculturePage />} />
                {/* <Route path='search' element={<SearchPage />} /> */}
                <Route path='product/:id' element={<ProductPage />} />
                <Route path='cart' element={<CartPage />} /> 
                <Route path='/' element={<Navigate to="/home" />} />
                {/* Cambiar a pagina de inicio, si no encuentra la ruta se ira por esta y este componente es la pantalla de inicio */}
            </Routes>
        </CartProvider>
           

       

            <Footer />
            {/* FOOTER HERE */}

        </>
    )
}
