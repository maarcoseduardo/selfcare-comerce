import { Switch, Route } from "react-router-dom";
import { Details } from "./Pages/Details";

import { Main } from './Pages/Main';

export function Routes() {

    return (

        <Switch>
            <Route exact path="/">
                <Main />
            </Route>
            <Route exact path="/details/:identificationPage">
                <Details />
            </Route>
        </Switch>
    );
}