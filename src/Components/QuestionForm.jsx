import React from 'react'
import { useForm } from 'react-hook-form'
import {
  editquizApi,
  EditQuizData,
  SendQuizQuestion,
} from '../QueryFetches/useQuiz'
import { useQueryClient } from '@tanstack/react-query'
import { editQuiz } from '../Apis/QuizApi'

export default function QuestionForm({
  setForm,
  id,
  type = undefined,
  editData,
}) {
  const queryClient = useQueryClient()
  function invalidatequery() {
    queryClient.invalidateQueries(['questions', id])
  }
  const mutation = SendQuizQuestion(setForm, invalidatequery)
  const edit = editquizApi(queryClient)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { ...editData } })
  const onSubmit = (data) => {
    if (type) {
      console.log(data)
      edit({ id: editData.id, data })
      setForm(false)
      return
    }
    const questionData = { ...data, quizId: +id }
    console.log(questionData)
    mutation.mutate(questionData)
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="fixed h-full w-full inset-0 my-auto flex justify-center place-items-center "
    >
      <div className=" w-full md:w-3/5 bg-white px-5 py-5  h-fit rounded-lg">
        <p onClick={() => setForm(false)} className="text-right">
          ✖️
        </p>
        <img className="mx-auto mt-10 w-20" src="/src/assets/logo.svg" />
        <h2 className="text-center mt-5 font-Montserrat font-extrabold text-xl text-purple">
          {type ? 'Edit Form' : 'Add Question'}
        </h2>
        <div className="flex flex-col my-7">
          <input
            {...register('Question', { required: true })}
            className="p-4 ring-0 outline-none bg-purple-100 rounded-lg font-Lato font-light text-sm mb-2"
            type="text"
            placeholder="Question"
          ></input>
          <input
            {...register('A', { required: true })}
            className="p-4 ring-0 outline-none bg-purple-100 rounded-lg font-Lato font-light text-sm mb-2"
            type="text"
            placeholder="Option A"
          ></input>
          <input
            {...register('B', { required: true })}
            className="p-4 ring-0 outline-none bg-purple-100 rounded-lg font-Lato font-light text-sm mb-2"
            type="text"
            placeholder="Option B"
          ></input>
          <input
            {...register('C', { required: true })}
            className="p-4 ring-0 outline-none bg-purple-100 rounded-lg font-Lato font-light text-sm mb-2"
            type="text"
            placeholder="Option C"
          ></input>
          <input
            {...register('D', { required: true })}
            className="p-4 ring-0 outline-none bg-purple-100 rounded-lg font-Lato font-light text-sm mb-2"
            type="text"
            placeholder="Option D"
          ></input>
          <select
            {...register('answer', { required: true })}
            className="p-4 ring-0 outline-none bg-purple-100 rounded-lg font-Lato font-light text-sm mb-2"
            type="text"
            placeholder="Option D"
          >
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </select>
        </div>
        <input
          disabled={mutation.isLoading}
          type="submit"
          value={type ? 'Edit' : 'Add'}
          className="w-full mx-auto text-center p-4 bg-purple font-Lato font-semibold text-base rounded-lg text-white"
        />
      </div>
    </form>
  )
}
