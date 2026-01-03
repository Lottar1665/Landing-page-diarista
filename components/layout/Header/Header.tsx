import Image from 'next/image';

export function Header() {
  return (
    <header>
      <div>

        <nav>
          <div className="p-4 flex items-center">
            <Image src="/images/logo.jpg" alt="Home" width={40} height={40} 
              className='rounded-full rounded-full border-double border-blue-500 border-4 md:w-20 md:h-20'/>
              <div className='mx-auto'><h1 className="text-l font-bold text-white md:text-xl">Vinicius Mariano</h1></div>
          </div>
        </nav>
      </div>
    </header>
  );
}
