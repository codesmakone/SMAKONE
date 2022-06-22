import React, { useState } from 'react'

const Dropdown = (props) =>{

    const [ showMenu, setShowMenu ] = useState(false)
    const handleClick = () => {
        setShowMenu(!showMenu)
    }

    return(
        <div class="relative inline-block text-left">
            <div>
                <button onClick={ handleClick } type="button" class={ props.class } id="menu-button" aria-expanded="true" aria-haspopup="true">
                { props.title }
                </button>
            </div>

            { showMenu && (
                <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                { props.menu1 && (
                    <a href={ props.dir1 } class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-0">{ props.menu1 }</a>
                ) }
                { props.menu2 && (
                    <a href={ props.dir2 } class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-1">{ props.menu2 }</a>
                ) }
                { props.menu3 && (
                    <a href={ props.dir3 } class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-2">{ props.menu3 }</a>
                ) }
                { props.menu4 && (
                    <a href={ props.dir4 } class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-2">{ props.menu4 }</a>
                ) }
                { props.menu5 && (
                    <a href={ props.dir5 } class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-2">{ props.menu5 }</a>
                ) }
                </div>
            </div>
            )}
            
        </div>
    )
}

export default Dropdown