import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'
import React from 'react'

const CloseButton = () => {
    return (
      <Popover.Button className='top-5 right-5 absolute text-zinc-400 hover:text-zinc-100' title='Fechar Formulário de feedback'>
          <X className='w-4 h-4' weight='bold'/>
      </Popover.Button>
    )
}

export default CloseButton