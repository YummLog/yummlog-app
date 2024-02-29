import { ReactElement, createContext, useState } from 'react';
import { Restaurent, RestaurentContextType } from '../types/restaurent';

const defaultData = {
    restaurents:[],
}

export const Context = createContext<RestaurentContextType>(defaultData);

const RestaurentContext = ({children}:{children: ReactElement}) => {
    const [restaurents, setRestaurents] = useState<Restaurent[]>([]);

  return (
    <Context.Provider value={{restaurents, setRestaurents}}>{children}</Context.Provider>
  )
}

export default RestaurentContext