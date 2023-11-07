import React from 'react'
import { NavbarMenu, Home } from '../ui'
import {PicturePage, SculturePage, SearchPage, ProductPage }  from '../art'
// import { ArtRoutes } from '../art'
import { Routes, Route, Navigate } from 'react-router-dom'

export const AppRouter = () => {
    return (
        <>

            <NavbarMenu />

            <Routes>
                <Route path='home' element={<Home />} />


                {/* Ruta a componente login here */}

                {/* <Route path='/*' element={<ArtRoutes />} /> */}

                <Route path='picture' element={<PicturePage />} />
                <Route path='sculture' element={<SculturePage />} />
                <Route path='search' element={<SearchPage />} />
                <Route path='product/:id' element={<ProductPage />} />

                <Route path='/' element={<Navigate to="/home" />} />
                {/* Cambiar a pagina de inicio, si no encuentra la ruta se ira por esta y este componente es la pantalla de inicio */}
            </Routes>

            {/* FOOTER HERE */}

        </>
    )
}
