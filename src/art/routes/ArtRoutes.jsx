import React from 'react'
import {PicturePage, SculturePage}  from '../pages'
import {Routes, Route } from 'react-router-dom'

export const ArtRoutes = () => {
    return (
        <>
                <Routes>
                  
                    <Route path='picture' element={<PicturePage />} />
                    <Route path='sculture' element={<SculturePage />} />

                </Routes>

           
          
        </>
    )
}
