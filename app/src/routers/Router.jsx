import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "../components/Navbar";

import Index from "../pages/Index";
import Error from "../pages/Error";
import Create from '../pages/Create';
import Edit from '../pages/Edit';
import Ejercicio from '../pages/Ejercicio';
import Recipes from '../pages/Recipes';

export default function Router() {
    return (
        <div className="flex-grow-1">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route path="/create" component={Create} />
                    <Route path="/edit/:productID" component={Edit} />
                    <Route path="/Ejercicio" component={Ejercicio} />
                    <Route path="/recipes" component={Recipes} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
