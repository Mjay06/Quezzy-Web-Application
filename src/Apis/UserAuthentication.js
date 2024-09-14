import supabase from './Supabase'

export async function LoginWithGoogle() {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'https://queezy-quiz.netlify.app/app/home', // Replace with your desired URL
    },
  })
  if (error) console.error('Error: ', error)
  return { user, session }
}

export async function GetUser() {
  const {
    data,
  } = await supabase.auth.getUser()

  return data
}
