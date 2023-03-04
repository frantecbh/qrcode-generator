import { PaperAirplaneIcon, Bars4Icon } from '@heroicons/react/24/outline'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

import myimg from '../assets/logo.png'


export function Header() {



  function handleMenu() {
    const menu = document.querySelector(".mobile-menu")
    menu.classList.toggle("hidden")
  }

  return (


    <nav className='bg-zinc-500 px-4' >
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-between md:justify-center'>

          <div className='flex space-x-4'>
            {/* logo */}

            
            <div>
              <a className='flex items-center py-5 px-2 text-gray-700' href="/">
              <img className="h-8 w-auto" src={myimg} alt="Logo" /> 
              <div className="hidden ml-4 text-white font-semibold text-lg">QrCode Generator</div>              
              </a>
            </div>
            

            {/* primary nav */}
            <div className='hidden md:flex items-center space-x-1'>
              {[
                // ['Linkedin', 'https://www.linkedin.com/in/francisco-menezes-875a0a36/'],
                // ['GitHub', 'https://github.com/frantecbh'],


              ].map(([title, url]) => (

                <a key={title} href={url} target="_blank" className="py-5 px-3 text-gray-600  hover:text-gray-900">{title === 'Linkedin' ? <BsLinkedin size={24} color='#fff' /> : <BsGithub size={24} color='#fff' />  }</a>

              ))}

            </div>
          </div>

          {/* secondar navy */}
          <div className='hidden md:flex items-center space-x-1'>
            {[
              // ['Login', '/login'],  
              ['Linkedin', 'https://www.linkedin.com/in/francisco-menezes-875a0a36/'],
              ['GitHub', 'https://github.com/frantecbh'],  

            ].map(([title, url]) => (

              <a key={title} href={url} className="py-5 px-3 text-gray-700">{title === 'Linkedin' ? <BsLinkedin size={24} color='#fff' /> : <BsGithub size={24} color='#fff' />  }</a>

            ))}
            {/* <a href="#" className="py-2 px-3 text-gray-700 hover:bg-yellow-300 bg-yellow-400 text-yellow-900 hover:text-white rounded transition duration-300">Singup</a> */}
          </div>

          {/* mobile buton */}

          <div className='md:hidden flex items-center'>
            <button className='mobile-menu-button' onClick={handleMenu}>
              <Bars4Icon className='h-6 w-6 text-zinc-700' />
            </button>

          </div>

        </div>

      </div>

      {/* mobile menu */}

      <div className='mobile-menu pb-3 hidden md:hidden'>
        {[
       ['Linkedin', 'https://www.linkedin.com/in/francisco-menezes-875a0a36/'],
       ['GitHub', 'https://github.com/frantecbh'],


        ].map(([title, url]) => (

            
            <a key={title} href={url} className="block py-2 px-4 text-sm hover:bg-gray-300 rounded">{title === 'Linkedin' ? <BsLinkedin size={24} color='#fff' /> : <BsGithub size={24} color='#fff' />  }</a>

        ))}
      </div>






    </nav>




  )
}


