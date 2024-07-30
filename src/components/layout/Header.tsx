import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Grid from '@/components/icons/grid';

export default function Header() {
  return (
    <header
      id="header-bar"
      className="w-[100vw] h-20 fixed z-20 flex justify-end items-center bg-secondary text-white-100 divide-x divide-primary shadow-lg"
    >

      <button>
        <FontAwesomeIcon icon={faEnvelope} className="text-xl text-white hover:opacity-90 px-4 fa-icon" />
      </button>

      <div className='h-4/6 flex items-center'>
        <button>
          <FontAwesomeIcon icon={faUserPlus} className="text-base text-white hover:opacity-90 px-4 fa-icon" />
        </button>
        <button className="text-xl text-white hover:opacity-90 px-4 fa-icon" >
          <Grid/>
        </button>

      </div>


      <div
        id="user-info"
        className="xl:w-72 h-4/6 flex justify-end items-center gap-4 px-4">
        <div
          id="user-text"
          className='text-end text-white'
        >
          <p className='text-lg'> Olá, <span className='font-semibold'>Dyego</span></p>
          <span className='text-sm'>Clínica Oitava Rosado</span>
        </div>
        <Image
          src="/dyego.png"
          alt="Dyego"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </header>
  );
}