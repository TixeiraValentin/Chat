import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Chat from "./Component/Chat/Chat";


export default function Routs() {
    


return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Chat/>} />
        </Routes>
        </BrowserRouter>


    )
}