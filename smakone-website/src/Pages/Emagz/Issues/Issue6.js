import React from 'react'
import EmagzLayout from '../../../Component/Layout/EmagzLayout'

const Issue6 = () => {
    return(
        <EmagzLayout feat={false} title="Aphrodite April" iframe={(
            <div>
                <div className="mb-8 mx-auto pl-[8.5rem] iframe-container hidden lg:block">
                    <iframe
                    src="https://heyzine.com/flip-book/5c1931dac5.html"
                    title="Aphrodite April"
                    width="1000"
                    height="700"
                    frameborder="0"
                    webkitAllowFullScreen
                    mozallowfullscreen
                    allowFullScreen
                    sandbox="allow-forms allow-scripts allow-same-origin allow-top-navigation"
                    ></iframe>
                </div>
                <div className="lg:hidden">
                <p className="justify-center text-center p-2 text-2xl">
                    You are viewing this in your phone/tablet. For better readability, please kindly visit this 
                    <a className="text-blue-500 underline-offset-4" href="https://heyzine.com/flip-book/5c1931dac5.html" target="blank"> link</a>.
                </p>
                </div>
            </div>
            )} />
    )
        
}

export default Issue6