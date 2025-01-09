import { Fragment } from 'react'
import { Popover, PopoverPanel, Transition, PopoverButton } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

export default function NavMenu() {

  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 p-1 rounded-lg bg-gray-900 outline-none">
        <Bars3Icon className='w-8 h-8 text-white ' />
      </PopoverButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel className="absolute left-1/2 z-10 mt-5 flex w-screen lg:max-w-min -translate-x-1/2 lg:-translate-x-48">
          <div className="w-full lg:w-56 shrink rounded-xl bg-gray-300 p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
            <p className='text-center text-gray-800 my-4'>Hello User!</p>
            <Link
              to='/profile'
              className='block text-center text-gray-500 p-2 hover:text-gray-950'
            >My Profile</Link>
            <Link
              to='/'
              className='block text-center text-gray-500 p-2 hover:text-gray-950'
            >My projects</Link>
            <button
              className='block mx-auto text-gray-500 p-2 hover:text-red-600'
              type='button'
              onClick={() => { }}
            >
              Log Out
            </button>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  )
}