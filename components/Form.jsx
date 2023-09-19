import Link from 'next/link';

const Form = ({type, prompt, setprompt, submitting, submitHandler}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
        <h1 className='head_text text-left'>
            <span className='head_text text-left'>
                {type} Post
            </span>
        </h1>
        
        <p className='desc text-left max-w-md'>
            {type} and share amazing prompts with the world using AI Prompt!
        </p>

        <form onSubmit={submitHandler} className='mt-10 w-full max-w-2x1 flex flex-col gap-7 glassmorphism'>
            <label>
                <span className='font-satoshi font-semibold text-base text-gray-700'>
                    Your AI Prompt
                </span>
                <textarea 
                 value={prompt.prompt} 
                 onChange={(e) => setprompt({...prompt, prompt: e.target.value})}
                 placeholder="Write your prompt here..."
                 required
                 className='form_textarea'
                />
            </label>

            <label>
                <span className='font-satoshi font-semibold text-base text-gray-700'>
                    Tag for your AI prompt
                </span>
                <input 
                 value={prompt.tag} 
                 onChange={(e) => setprompt({...prompt, tag: e.target.value})}
                 placeholder='#webdevelopment #AI #tech'
                 required
                 className='form_input'
                />
            </label>

            <div className='flex-end mx-3 mb-5 gap-4'>
                <Link href="/" className='text-gray-800 text-sm'>Cancel</Link>
                <button type="submit" disabled={submitting} className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>
                    {submitting ? `${type}...` : type}
                </button>
            </div>
        </form>
    </section>
  )
}

export default Form