import React from 'react'
import { useForm } from 'react-hook-form'
import { EditQuizData } from '../QueryFetches/useQuiz'
import { useQueryClient } from '@tanstack/react-query'
import { useUserData } from '../Contexts/UserDataContext'

export default function ({ setForm }) {
  const queryClient = useQueryClient()
  const mutation = EditQuizData(setForm, queryClient)
  const { state } = useUserData()
  const userId = state.UserData.user.identities[0].user_id
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log('successful')
    const SendQuiz = {...data, userId: userId  }
    mutation.mutate(SendQuiz)
    mutation.isSuccess && setForm(false)
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="fixed inset-0 w-full h-full flex items-center justify-center"
    >
      <div className=" mx-auto bg-white px-5 py-5 sm:w-full md:w-3/5 h-fit rounded-lg place-items-center">
        <p onClick={() => setForm((form) => !form)} className="text-right">
          ✖️
        </p>
        <img className="mx-auto mt-10 w-20" src="../src/assets/logo.svg" />
        <h2 className="text-center mt-5 font-Montserrat font-extrabold text-xl text-purple">
          Create Quiz
        </h2>
        <div className="flex flex-col my-7">
          <input
            {...register('Title', { required: true })}
            className="p-4 ring-0 outline-none bg-purple-100 rounded-lg font-Lato font-light text-sm mb-2"
            type="text"
            placeholder="Quiz Title"
          ></input>
          <input
            {...register('Description', { required: true })}
            className="p-4 ring-0 outline-none bg-purple-100 rounded-lg font-Lato font-light text-sm mb-2"
            type="text"
            placeholder="Quiz Description"
          ></input>
          <input
            {...register('Code', { required: true })}
            className="p-4 ring-0 outline-none bg-purple-100 rounded-lg font-Lato font-light text-sm mb-2"
            type="text"
            placeholder="Unique Quiz Code"
          ></input>
          <div className="flex gap-2">
            <span className=" w-full p-4 ring-0 outline-none bg-purple-100 rounded-lg font-Lato font-light text-sm mb-2">
              <input
                className="w-fit  bg-purple-100 outline-none ring-0"
                {...register('Time', { required: true })}
                type="text"
                placeholder="Time duration"
              ></input>{' '}
              :Mins{' '}
            </span>
            <span className=" w-full p-4 ring-0 outline-none bg-purple-100 rounded-lg font-Lato font-light text-sm mb-2">
              <input
                className="w-fit  bg-purple-100 outline-none ring-0"
                {...register('ppq', { required: true })}
                type="text"
                placeholder="Points Per Question"
              ></input>{' '}
              :pts{' '}
            </span>
          </div>
          <input
            {...register('quizImg', { required: true })}
            className="p-4 ring-0 outline-none bg-purple-100 rounded-lg font-Lato font-light text-sm mb-2"
            type="text"
            placeholder="Paste the image link that best describes the quiz"
          ></input>
        </div>
        <input
          type="submit"
          value={mutation.isLoading ? 'Creating' : 'Create'}
          className="w-full mx-auto text-center p-4 bg-purple font-Lato font-semibold text-base rounded-lg text-white"
        />
      </div>
    </form>
  )
}
