import { createContext, useContext, useReducer } from 'react'

const QuizContext = createContext()

function addOrReplace(list, newItem, index) {
  // If the index is within the bounds of the list, replace the item at that index
  if (index >= 0 && index < list.length) {
    list[index] = newItem
  } else {
    // If the index is out of bounds, add the new item to the end of the list
    list.push(newItem)
  }
  return list
}

const initialState = {
  QuizDescription: null,
  QuizData: [],
  No: 0,
  Score: '',
  status: '',
  name: '',
}

function reducer(state, action) {
  switch (action.type) {
    case 'setQuizDescription':
      return { ...state, QuizDescription: action.payload, status: 'quizLoaded' }
    case 'StartQuiz':
      return { ...state, status: 'Started', name: action.payload }
    case 'NextQuestion':
      return {
        ...state,
        QuizData: addOrReplace(
          state.QuizData,
          {
            userQuestion: action.payload.questionNo,
            userAnswer: action.payload.selected,
            CorrectAnswer: action.payload.correct,
            A: action.payload.A,
            B: action.payload.B,
            C: action.payload.C,
            D: action.payload.D,
            Question: action.payload.question,
          },
          state.No
        ),

        No: state.No + 1,
      }
    case 'PrevQuestion':
      return {
        ...state,
        No: state.No - 1,
      }
    case 'TimesUp':
      const resultTime = {
        ...state,
      }
      let number = 0
      resultTime.QuizData.forEach((score) => {
        if (score.userAnswer === score.CorrectAnswer) {
          number = number + Number(action.payload.point)
        }
      })
      return {
        ...state,
        status: 'finished',
        Score: number,
      }
    case 'Submit':
      const result = {
        ...state,
        QuizData: addOrReplace(
          state.QuizData,
          {
            userQuestion: action.payload.questionNo,
            userAnswer: action.payload.selected,
            CorrectAnswer: action.payload.correct,
            A: action.payload.A,
            B: action.payload.B,
            C: action.payload.C,
            D: action.payload.D,
            Question: action.payload.question,
          },
          state.No
        ),

        No: state.No + 1,
      }

      let no = 0
      result.QuizData.forEach((score) => {
        if (score.userAnswer === score.CorrectAnswer) {
          no = no + Number(action.payload.point)
        }
      })
      console.log(no)
      return { ...result, Score: no, status: 'finished' }
    case `reStart`:
      return {
        QuizDescription: null,
        QuizData: [],
        No: 0,
        Score: '',
        status: '',
        name: '',
      }
    default:
      return state
  }
}

export function QuizContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  )
}

export function takeQuizQuestion() {
  const context = useContext(QuizContext)
  if (context === undefined) throw new Error('State used Outside Context')
  return context
}
