import { useReducer, useContext, createContext } from 'react'

const Context = createContext();
const dispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'PROVIDE-WINDOW':
            return  { ...state, deviceWindow: action.payload };
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
}

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, 0)
    return (
        <dispatchContext.Provider value={dispatch}>
            <Context.Provider value={state}>
                {children}
            </Context.Provider>
        </dispatchContext.Provider>
    )
}

export const useMainContext = () => useContext(Context)
export const useDispatchMainContext = () => useContext(dispatchContext)