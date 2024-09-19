import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import {
  DeleteQuestion,
  DeleteQuizWithQUestions,
  editQuiz,
  GetQuiz,
  SearchQuiz,
  SendQuestion,
  SendQuiz,
  SendResult,
} from '../Apis/QuizApi'
import { GetUser } from '../Apis/UserAuthentication'

export function useQuizData(userId) {
  const { data, status, error } = useQuery({
    queryKey: ['QuizData', userId],
    queryFn: () => GetQuiz(userId),
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
export function GetUserData() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['userData'],
    queryFn: GetUser,
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

export function useSendResult() {
  const mutation = useMutation({
    mutationFn: SendResult,
  })
  return mutation
}

export function editquizApi(queryClient) {
  const { mutate: edit } = useMutation({
    mutationFn: ({id, data}) => editQuiz(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['QuizData'])
    },
    onError: (error) => {
      console.log(error)
    }
  })

  return edit
}
