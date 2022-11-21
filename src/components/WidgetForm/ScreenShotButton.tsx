import html2canvas from 'html2canvas'
import { Camera, Trash } from 'phosphor-react'
import React, { useState } from 'react'
import Loading from '../Loading'

interface ScreenShotButtonProps{
    screenShot: string | null
    onScreenShotTook: (screenShot: string | null) => void
}

const ScreenShotButton = ({onScreenShotTook, screenShot}: ScreenShotButtonProps) => {

    const styles = {
        backgroundImage: `url(${screenShot})`,
        backgroundPosition: 'right bottom',
        backgroundSize: 180,
    }

    const [isTakingScreenShot, setIsTakingScreenShot] = useState(false)

    const handleTakeScreenShot = async () => {
        setIsTakingScreenShot(true)

        const canvas = await html2canvas(document.querySelector('html')!)
        const base64image = canvas.toDataURL('image/png')

        onScreenShotTook(base64image)

        setIsTakingScreenShot(false)
    }

    if (screenShot) return (
    <button onClick={() => onScreenShotTook(null)} type='button' className='p-1 w-10 h-10 rounded-[4px] flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors' style ={styles}>
        <Trash weight='fill'/>
    </button>
    )

    return (
        <>
            <button type='button' className='p-2 bg-zinc-800 rounded-[4px] border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500'>
                {isTakingScreenShot ? <Loading/> : <Camera className='w-6 h-6' onClick={handleTakeScreenShot} />}
            </button>
        </>
    )
}

export default ScreenShotButton