import React, { useState, useEffect, createContext } from 'react';
import getState from './Flux';

export const Context = createContext(null);

const MyContext = ({children}) => {
    const [state, setState] = useState(getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: updatedStore =>
            setState({
                store: Object.assign(state.store, updatedStore),
                actions: { ...state.actions }
            })
    }));

    useEffect(() => {
      // ######## FETCH ACTIONS #########
      // Popular Films Full Info
      state.actions.get_popFilms();

      // Top Rated Films Full Info
      state.actions.get_topRated();

      // Similar Films Full Info
      state.actions.get_similarFilms();

      // Popular TV Shows
      state.actions.getPop_tvShows();

      // People
      state.actions.get_people();
		}, []);

    return (
      <Context.Provider value={state}>
        {children}
      </Context.Provider>
    );
  };

export default MyContext;