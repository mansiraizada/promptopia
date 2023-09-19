'use client';

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Form from '@components/Form';

const CreatePrompt = () => {
  const [prompt, setPrompt] = useState({ prompt: '', tag: '' });
  const [submitting, setSubmitting] = useState(false);

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: prompt.prompt,
          tag: prompt.tag,
          userId: session?.user.id
        })
      })

      if(response.ok){
        Router.push('/')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Form 
    type='Create'
    prompt={prompt}
    setprompt={setPrompt}
    submitting={submitting}
    submitHandler={createPrompt}/>
  )
}

export default CreatePrompt