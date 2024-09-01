import { useMutation, useQuery } from '@tanstack/react-query'
import { GetQuiz, SearchQuiz, SendQuestion, SendQuiz } from '../Apis/QuizApi'

export function useQuizData() {
  const { data, status, error } = useQuery({
    queryKey: ['QuizData'],
    queryFn: GetQuiz,
  })
  return { data, status, error }
}

export function getUserQuestion(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['questions', id],
    queryFn: GetQuestion(Number(id)),
  })
  return { data, isLoading, error }
}
export function getQuizDescription(dispatch, navigate, state) {
  const mutation = useMutation({
    mutationFn: SearchQuiz,
    onSuccess: (data) => {
      console.log(data)
    },
  })
  return mutation
}

export function EditQuizData(setForm) {
  const mutation = useMutation({
    mutationFn: SendQuiz,
    onSuccess: async () => {
      setForm(false)
    },
  })
  return mutation
}

export function SendQuizQuestion(setForm) {
  const mutation = useMutation({
    mutationFn: SendQuestion,
    onSuccess: async () => {
      setForm(false)
    },
  })
  return mutation
}
