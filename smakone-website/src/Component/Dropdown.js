import React,{Fragment} from 'react'
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Dropdown = (props) => {
  return (
    <Menu as="div" className="relative inline-block text-left">

      <div>
        <Menu.Button className={ props.class }>
        <div className='flex flex-row'>
            { props.title }
            { props.arrowLogo && (
                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            )}
        </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={props.dir1}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {props.menu1}
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={props.dir2}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {props.menu2}
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={props.dir3}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {props.menu3}
                </Link>
              )}
            </Menu.Item>
            {props.dir4 && 
            <Menu.Item>
            {({ active }) => (
              <Link
                to={props.dir4}
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              >
                {props.menu4}
              </Link>
            )}
          </Menu.Item>
            }
            {props.dir5 && 
            <Menu.Item>
            {({ active }) => (
              <Link
                to={props.dir5}
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              >
                {props.menu5}
              </Link>
            )}
          </Menu.Item>
            }
            {props.dir6 && 
            <Menu.Item>
            {({ active }) => (
              <Link
                to={props.dir6}
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              >
                {props.menu6}
              </Link>
            )}
          </Menu.Item>
            }
            {props.dir7 && 
            <Menu.Item>
            {({ active }) => (
              <Link
                to={props.dir7}
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              >
                {props.menu7}
              </Link>
            )}
          </Menu.Item>
            }
            {props.dir8 && 
            <Menu.Item>
            {({ active }) => (
              <Link
                to={props.dir8}
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              >
                {props.menu8}
              </Link>
            )}
          </Menu.Item>
            }
            {props.dir9 && 
            <Menu.Item>
            {({ active }) => (
              <Link
                to={props.dir9}
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              >
                {props.menu9}
              </Link>
            )}
          </Menu.Item>
            }
            {props.dir10 && 
            <Menu.Item>
            {({ active }) => (
              <Link
                to={props.dir10}
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              >
                {props.menu10}
              </Link>
            )}
          </Menu.Item>
            }
            {props.dir11 && 
            <Menu.Item>
            {({ active }) => (
              <Link
                to={props.dir11}
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              >
                {props.menu11}
              </Link>
            )}
          </Menu.Item>
            }
            {props.dir12 && 
            <Menu.Item>
            {({ active }) => (
              <Link
                to={props.dir12}
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              >
                {props.menu12}
              </Link>
            )}
          </Menu.Item>
            }
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown