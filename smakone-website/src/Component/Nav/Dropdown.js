import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dropdown = (props) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        onMouseEnter={() => setIsShowing(true)}
        onMouseLeave={() => setIsShowing(false)}
        className={props.class}
      >
        <div className="flex flex-row">{props.title}</div>
      </Menu.Button>

      <Transition
        show={isShowing}
        onMouseEnter={() => setIsShowing(true)}
        onMouseLeave={() => setIsShowing(false)}
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`origin-top-right absolute pt-2 right-0 md:translate-x-0
            ${props.smak1 ? "translate-x-1/3" : ""} 
            ${props.osis ? "translate-x-2/4" : ""}  
            ${props.Kehidupan ? "translate-x-0" : ""} 
            ${props.dir7 ? "w-[19rem]" : "w-[7.5rem] md:w-56"} 
            `}
        >
          <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className={`${!!props.dir7 ? "grid grid-cols-2" : ""}`}>
              <div className="">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={props.dir1}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm rounded-t-md"
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
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
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
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        props.osis
                          ? "block px-4 py-2 text-sm rounded-b-md"
                          : "block px-4 py-2 text-sm"
                      )}
                    >
                      {props.menu3}
                    </Link>
                  )}
                </Menu.Item>
                {props.dir4 && (
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={props.dir4}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          props.Kehidupan
                            ? "block px-4 py-2 text-sm rounded-b-md"
                            : "block px-4 py-2 text-sm"
                        )}
                      >
                        {props.menu4}
                      </Link>
                    )}
                  </Menu.Item>
                )}
                {props.dir5 && (
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={props.dir5}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          props.smak1
                            ? "block px-4 py-2 text-sm rounded-b-md"
                            : "block px-4 py-2 text-sm"
                        )}
                      >
                        {props.menu5}
                      </Link>
                    )}
                  </Menu.Item>
                )}
                {props.dir6 && (
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={props.dir6}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {props.menu6}
                      </Link>
                    )}
                  </Menu.Item>
                )}
              </div>
              {!!props.dir7 && (
                <div className="h-[14.9rem] absolute left-2/4 border-light border-solid border-l-4"></div>
              )}
              <div>
                {props.dir7 && (
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={props.dir7}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {props.menu7}
                      </Link>
                    )}
                  </Menu.Item>
                )}
                {props.dir8 && (
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={props.dir8}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {props.menu8}
                      </Link>
                    )}
                  </Menu.Item>
                )}
                {props.dir9 && (
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={props.dir9}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {props.menu9}
                      </Link>
                    )}
                  </Menu.Item>
                )}
                {props.dir10 && (
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={props.dir10}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {props.menu10}
                      </Link>
                    )}
                  </Menu.Item>
                )}
                {props.dir11 && (
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={props.dir11}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          props.dir7
                            ? "block px-4 py-2 text-sm rounded-br-md"
                            : "block px-4 py-2 text-sm"
                        )}
                      >
                        {props.menu11}
                      </Link>
                    )}
                  </Menu.Item>
                )}
              </div>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
