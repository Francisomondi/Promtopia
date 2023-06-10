'use client'
import {useState} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Form from '@components/Form'



const CreatePrompt = () => {
   const[submitting,setSUbmitting]= useState(false)
   const [post, setPost] = useState({
    prompt: '',
    tag: ''
   })

   const createPrompt = ()=>{

   }
  return (
    <div>
        <Form
        type='Create'
        post={post}
        setPost={setPost}
        submitting = {submitting}
        handleSubmit ={createPrompt}
        />
    </div>
  )
}

export default CreatePrompt
