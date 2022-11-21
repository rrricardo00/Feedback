import React, { useState } from 'react'
import CloseButton from '../CloseButton'
import bugImgUrl from '../../assets/bug.svg'
import ideaImgUrl from '../../assets/idea.svg'
import thoughtImgUrl from '../../assets/thought.svg'
import FeedbackTypeStep from './Steps/FeedbackTypeStep'
import FeedbackContentStep from './Steps/FeedbackContentStep'
import FeedbackSuccesStep from './Steps/FeedbackSuccesStep'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImgUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImgUrl,
      alt: 'Imagem de uma lampada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImgUrl,
      alt: 'Imagem de uma nuvem'
    }
  }
}

export type FeedBackType = keyof typeof feedbackTypes

const WidgetForm = () => {

  const [feedbackType, setFeedbackType] = useState<FeedBackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  const handleRestartFeedback = () => {
    setFeedbackType(null)
    setFeedbackSent(false)
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>

      {feedbackSent ? (
        <FeedbackSuccesStep onFeedbackRestartRequested={handleRestartFeedback}/>
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedBackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback} onFeedbackSent={() => setFeedbackSent(true)} />
          )}
        </>
      )}

      <footer className='text-xs text-neutral-400'>
        Feito com ♥ pela <a className='underline underline-offset-2' href='https://rocketseat.com.br'>Rocketseat</a>
      </footer>
    </div>
  )
}

export default WidgetForm