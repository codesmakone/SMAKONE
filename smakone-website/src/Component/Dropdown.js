import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Dropdown = (props) =>{

    const [ showMenu, setShowMenu ] = useState(false)
    const handleClick = () => {
        setShowMenu(!showMenu)
    }

    return(
        <div className="relative inline-block text-left">
            <div>
                <button onClick={ handleClick } type="button" className={ props.className } id="menu-button" aria-expanded="true" aria-haspopup="true">
                { props.title }
                </button>
            </div>

            { showMenu && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-1" role="none">
                { props.menu1 && (
                    <Link to={ props.dir1 } className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-0">{ props.menu1 }</Link>
                ) }
                { props.menu2 && (
                    <Link to={ props.dir2 } className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-1">{ props.menu2 }</Link>
                ) }
                { props.menu3 && (
                    <Link to={ props.dir3 } className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-2">{ props.menu3 }</Link>
                ) }
                { props.menu4 && (
                    <Link to={ props.dir4 } className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-2">{ props.menu4 }</Link>
                ) }
                { props.menu5 && (
                    <Link to={ props.dir5 } className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-2">{ props.menu5 }</Link>
                ) }
                </div>
            </div>
            )}
            
        </div>
    )
}

export default Dropdown