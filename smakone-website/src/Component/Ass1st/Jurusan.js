import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const Jurusan = (props) => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="container mx-auto mb-6">
                <div className="px-20 pt-10 justify-center text-center">
                    <h2 className='text-xl font-semibold'>{ props.cat }</h2>
                    <h1 className="text-6xl font-black">{ props.title }</h1>
                    <h4 className="text-xl font-semibold">{ props.subtitle }</h4>
                </div>
                <img src={ props.img } className="object-cover h-[32rem] w-auto mx-auto rounded-3xl mt-6" alt={props.alt}/>
            </div>
            <p className="justify-center text-justify p-2">
                { props.desc }
            </p>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-10 pb-2">Top Universitas Dunia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-16">
                <div>
                    <img src={ props.world1img } alt={ props.world1name } />
                    <p className="justify-center text-center p-2">{ props.world1name }</p>
                </div>
                <div>
                    <img src={ props.world2img } alt={ props.world2name }/>
                    <p className="justify-center text-center p-2">{ props.world2name }</p>
                </div>
                <div>
                    <img src={ props.world3img } alt={ props.world3name }/>
                    <p className="justify-center text-center p-2">{ props.world3name }</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Asia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-16">
                <div>   
                    <img src={ props.asia1img } alt={ props.asia1name } />
                    <p className="justify-center text-center p-2">{ props.asia1name }</p>
                </div>
                <div>
                    <img src={ props.asia2img } alt={ props.asia2name } />
                    <p className="justify-center text-center p-2">{ props.asia2name }</p>
                </div>
                <div>
                    <img src={ props.asia3img } alt={ props.asia3name } />
                    <p className="justify-center text-center p-2">{ props.asia3name }</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Indonesia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-16 pb-4">
                <div>
                    <img src={ props.indo1img } alt={ props.indo1name } />
                    <p className="justify-center text-center p-2">{ props.indo1name }</p>
                </div>
                <div>
                    <img src={ props.indo2img } alt={ props.indo2name } />
                    <p className="justify-center text-center p-2">{ props.indo2name }</p>
                </div>
                <div>
                    <img src={ props.indo3img } alt={ props.indo3name } />
                    <p className="justify-center text-center p-2">{ props.indo3name }</p>
                </div>
            </div>
            <div className='flex justify-between mt-10'>
            <button onClick={ () => navigate(-1) } className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                Kembali
            </button>
            { props.dir && 
            <Link to={props.dir} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                Artikel Berikutnya
            </Link>
            }
            {props.dirHome && 
            <HashLink to="/OSIS/ASS1ST#Assist" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                Kembali ke halaman utama
            </HashLink>
            }
            </div>
        </div>
            
        
    )
}

export default Jurusan