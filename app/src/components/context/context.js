import { createContext } from "react";

export const AgendaContext = createContext({});
export const ProductsContext = createContext({});

export const AgendaProvider = AgendaContext.Provider;
export const ProductsProvider = ProductsContext.Provider;
