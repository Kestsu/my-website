import React from 'react';
import { Route } from 'react-router-dom';
import TelaInicial from '../pages/TelaInicial'

function Routes() {
    return (
        <Route exact path="/" component={ TelaInicial } />

    );
}

export default Routes;
