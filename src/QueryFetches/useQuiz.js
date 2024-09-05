import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import {
  DeleteQuestion,
  DeleteQuizWithQUestions,
  GetQuiz,
  SearchQuiz,
  SendQuestion,
  SendQuiz,
} from '../Apis/QuizApi'

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

export function EditQuizData(setForm, queryClient) {
  const mutation = useMutation({
    mutationFn: SendQuiz,
    onSuccess: async (data) => {
      queryClient.invalidateQueries(['QuizData'])
      setForm(false)
      console.log(data)
      return data
    },
  })
  return mutation
}

export function SendQuizQuestion(setForm, invalidatequery) {
  const mutation = useMutation({
    mutationFn: SendQuestion,
    onSuccess: () => {
      invalidatequery()
      console.log('ran')
      setForm(false)
    },
  })
  return mutation
}

export function deleteQuiz(invalidatequery) {
  const mutation = useMutation({
    mutationFn: DeleteQuestion,
    onSuccess: () => {
      invalidatequery()
    },
  })

  return mutation
}
export function deleteQuizQuestion(queryClient) {
  const mutation = useMutation({
    mutationFn: DeleteQuizWithQUestions,
    onSuccess: () => {
      queryClient.invalidateQueries(['QuizData'])
    },
  })

  return mutation
}

export function useSearchQuiz(quizcode, enabled) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['takeQuiz', quizcode],
    queryFn: () => SearchQuiz(quizcode),
    enabled: enabled,
  })
  return { data, isLoading, error }
}
