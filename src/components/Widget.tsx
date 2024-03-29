import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import WidgetForm from './WidgetForm'


const Widget = () => {

    return (

        <Popover className='absolute bottom-4 right-4 md:bottom-10 md:right-10 flex flex-col items-end'>

            <Popover.Panel><WidgetForm /></Popover.Panel>

            <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots size={24} />
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className='pl-2'></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}

export default Widget