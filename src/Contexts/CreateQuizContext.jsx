import { createContext, useContext, useReducer } from 'react'

const createQuizContext = createContext()

const initialState = {}

function reducer(state, action) {
  switch (action.type) {
    case 'MutateData':
      return {
        ...state,
        No: state.No - 1,
      }
    case 'LoadData':
      return {
        ...state,
      }

    default:
      return state
  }
}

export function createQuizContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <createQuizContext.Provider value={{ state, dispatch }}>
      {children}
    </createQuizContext.Provider>
  )
}

export function createQuizQuestion() {
  const context = useContext(createQuizContext)
  if (context === undefined) throw new Error('State used Outside Context')
  return context
}
