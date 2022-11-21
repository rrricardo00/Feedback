import { ArrowLeft, Camera } from 'phosphor-react'
import React, { FormEvent, useState } from 'react'
import { FeedBackType, feedbackTypes } from '..'
import CloseButton from '../../CloseButton'
import ScreenShotButton from '../ScreenShotButton'

interface FeedbackContentStepPros {
    feedbackType: FeedBackType,
    onFeedbackRestartRequested: () => void
    onFeedbackSent: () => void
}


const FeedbackContentStep = ({ feedbackType, onFeedbackRestartRequested, onFeedbackSent }: FeedbackContentStepPros) => {

    const [screenShot, setScreenShot] = useState<string | null>(null)
    const [comment, setComment] = useState('')

    const handleSubmitFeedBack = (e: FormEvent) =>{
        e.preventDefault()
        console.log({comment, screenShot})
        onFeedbackSent()
    }

    const feedBacktypesInfo = feedbackTypes[feedbackType]

    return (
        <>
            <header>
                <button onClick={onFeedbackRestartRequested} type='button' className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'>
                    <ArrowLeft weight='bold' className='w-4 h-4' />
                </button>

                <span className='text-xl leading-6 flex items-center gap-2'>
                    <img src={feedBacktypesInfo.image.source} alt={feedBacktypesInfo.image.alt} className="w-6 h-6" />
                    {feedBacktypesInfo.title}
                </span>
                <CloseButton />
            </header>

            <form onSubmit={handleSubmitFeedBack} className='my-4 w-full'>
                <textarea onChange={({target}) => setComment(target.value)} className='min-w-[304px] w-full min-h-[112px] text-sm rounded-md placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin' placeholder='Conte com detalhes o que está acontecendo...' />

                <footer className='flex gap-2 mt-2'>

                    <ScreenShotButton onScreenShotTook={setScreenShot} screenShot={screenShot}/>

                    <button disabled={comment.length === 0} type='submit' className='p-2 bg-brand-500 rounded-[4px] border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500'>
                        Enviar Feedback
                    </button>
                </footer>
            </form>
        </>
    )
}

export default FeedbackContentStep