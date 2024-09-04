import supabase from './Supabase'
export async function GetQuiz() {
  let { data: Quizzes, error } = await supabase.from('Quizzes').select('*')
  if (error) throw new Error(error.message)
  return { Quizzes, error }
}
export async function SendQuiz(QuizData) {
  const { data, error } = await supabase
    .from('Quizzes')
    .insert([QuizData])
    .select()

  if (error) throw new Error(error.message)
}
export async function SendQuestion(QuestionData) {
  const { data, error } = await supabase
    .from('Questions')
    .insert([QuestionData])
    .select()

  if (error) throw new Error(error.message)
}

export async function GetQuizQuestion(Id) {
  const { data, error } = await supabase
    .from('Quizzes')
    .select('*')
    .eq('Title', Id)

  if (error) throw new Error(error.message)
  return { data, error }
}

export async function GetQuestion(Id) {
  const { data, error } = await supabase
    .from('Questions')
    .select('*')
    .eq('quizId', Id)

  if (error) {
    console.error('Error fetching quiz question:', error)
    return null
  }

  return data
}

export async function DeleteQuestion(id) {
  const { error } = await supabase.from('Questions').delete().eq('id', id)
}
export async function DeleteQuizWithQUestions(id) {
  const { error: quizError } = await supabase
    .from('Quizzes')
    .delete()
    .eq('id', id)
  const { error: QuestionError } = await supabase
    .from('Questions')
    .delete()
    .eq('quizId', id)
}

export async function SearchQuiz(quizCode) {
  let { data: Quizzes, error } = await supabase
    .from('Quizzes')
    .select('*')
    .eq('Code', quizCode)
  if (error) {
    console.log(error)
  }
  console.log(Quizzes)
  return Quizzes
}
