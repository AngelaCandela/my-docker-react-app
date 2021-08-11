import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Index from '../pages/Index';
import Error from '../pages/Error';
import Create from '../pages/Create';
import Edit from '../pages/Edit';
import TablePage from '../pages/TablePage';
import Recipes from '../pages/Recipes';

const Router = () => (
    <div className="flex-grow-1">
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Index} />
                <Route path="/create" component={Create} />
                <Route path="/edit/:productID" component={Edit} />
                <Route path="/table" component={TablePage} />
                <Route path="/recipes" component={Recipes} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    </div>
);

export default Router;
