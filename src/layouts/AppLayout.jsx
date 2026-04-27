import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AppLayout(){
    return (
        <>
            <div className="bg-gray-300">
                <div>
                    <h1>Este es un layout</h1>
                </div>
                <div>
                    <Outlet />
                </div>
                <div className="bg-amber-700 flex flex-row gap-y-5">
                    <Link to={'/main'}>
                                Ir a main view desde layout
                    </Link>
                    <Link to={'/extra'}>
                                Ir a extra view desde layout
                    </Link>
                    <Link to={'/otra'}>
                                Ir a otra view desde layout
                    </Link>
                </div>
                <footer className="bg-amber-400 flex flex-row gap-x-5">
                    <p>Footer xde</p>
                    <p>Segunda linea de footer</p>
                </footer>
            </div>
        </>
    )
}