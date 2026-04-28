import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import AppView from "./views/AppView";
import OtraView from "./views/OtraView";
import ExtraView from "./views/ExtraView";
import ParamView from "./views/ParamView";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path='/main' element={<AppView/>} />
                    <Route path='/otra' element={<OtraView/>} />
                    <Route path='/extra' element={<ExtraView/>} />
                    <Route path='/parametro/:id' element={<ParamView/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}