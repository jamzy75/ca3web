import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from './ui/fonts';
import Image from 'next/image';


export default function Page() {

  
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-purple-500 p-4 md:h-52">
        { <AcmeLogo /> }
      
    </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          
        <div
        className={styles.shape}/>
          <p className={`${lusitana.className}text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to a Premier League Website.</strong> This is just another example of the other related websites{' '}
            <a href="https://www.premierleague.com/about" className="text-purple-500">
              About the Premiere League
            </a>
            , brought to you by CEO James.
          </p>
          <Link
            href='/dashboard'
            className="flex items-center gap-5 self-start rounded-lg bg-purple-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image 
        src="/images/chelsea.png" 
        width={200}
        height={300}
        className="hidden md:block"
        alt="Screenshots of the dhasboard project showing desktop version " />

        <Image 
        src="/images/mancity.png"
        width={100}
        height={100}
        className="block md:hidden"
        alt="only showing the dashpoard for the phone version" />
        </div>
      </div>


    </main>
  );
}
