import React from 'react';
import { useRouteError } from 'react-router-dom';

export const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
        <h1>Opps! Something went wrong</h1>
        <h3>
            {err.status} : {err.statusText}
        </h3>
    </div>
  )
}
