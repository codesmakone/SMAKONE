import React from 'react'
import EmagzLayout from '../../../Component/Layout/EmagzLayout'

const Issue1 = () => {
    return(
        <EmagzLayout button={true} feat={false} title="November's Youth" iframe={(
            <div>
                <div className="justify-center mx-auto pl-[8.5rem] mb-8 iframe-container hidden lg:block">
                    <iframe
                    src="https://www.flipbookpdf.net/web/site/26dca515e81cc0654f5d4dda43a7d5a5ff713edc202111.pdf.html"
                    title="November's Youth"
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
                        <a className="text-blue-500 underline-offset-4" href="https://www.flipbookpdf.net/web/site/26dca515e81cc0654f5d4dda43a7d5a5ff713edc202111.pdf.html" target="blank"> link</a>.
                    </p>
                </div>
            </div>
            )} />
    )
        
}

export default Issue1