import { Josefin_Sans, Montserrat } from 'next/font/google';
import Image from 'next/image';
import W5FDCLogo from '../assets/images/Logo-W.png';
import PioneerLogo from '../assets/images/Pioneer.png';
import SDG17Logo from '../assets/images/SDG17.jpg';
import SDG5Logo from '../assets/images/SDG5.jpg';
import SprowtLogo from '../assets/images/Sprowt.png';
import BGLogo from '../assets/images/bg.png';
import BRICSLogo from '../assets/images/brics.jpg';
import WDLogo from '../assets/images/logo.png';

import Head from 'next/head';
const montserrat = Montserrat({ subsets: ['latin'] });
const josefin = Josefin_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${josefin.className}`}>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>W5FDC</title>
        <link rel='icon' type='image/png' href='/W5FDC-.png' />
      </Head>
      <div
        className={`flex-1 flex flex-col justify-center pt-8`}
        style={{ background: `url(${BGLogo.src}) center / cover` }}
      >
        <header className='container mx-auto flex justify-between items-center lg:items-start px-8'>
          <div className='flex items-center'>
            <div className='flex flex-col mr-8'>
              <Image width={200} src={WDLogo} alt='Sprowt Logo website-01' />
              <span className={`self-end -mt-2 font-medium text-xl `}>
                JUNE 21, 2023
              </span>
            </div>
            <Image
              className='w-16 ml-4 object-contain'
              src={SDG5Logo}
              alt='SDG 5'
            />
            <Image
              className='w-16 ml-4 object-contain'
              src={SDG17Logo}
              alt='SDG 17'
            />
          </div>

          <div className='flex'>
            <svg
              width='32'
              height='28'
              viewBox='0 0 32 28'
              className='fill-main'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M0 25.143C0 26.4073 1.02143 27.4287 2.28571 27.4287H29.7143C30.9786 27.4287 32 26.4073 32 25.143C32 23.8787 30.9786 22.8573 29.7143 22.8573H2.28571C1.02143 22.8573 0 23.8787 0 25.143ZM0 13.7144C0 14.9787 1.02143 16.0001 2.28571 16.0001H29.7143C30.9786 16.0001 32 14.9787 32 13.7144C32 12.4501 30.9786 11.4287 29.7143 11.4287H2.28571C1.02143 11.4287 0 12.4501 0 13.7144ZM32 2.28585C32 1.02157 30.9786 0.000138283 29.7143 0.000138283H2.28571C1.02143 0.000138283 0 1.02157 0 2.28585C0 3.55014 1.02143 4.57157 2.28571 4.57157H29.7143C30.9786 4.57157 32 3.55014 32 2.28585Z' />
            </svg>
            <span className='p-1'>PT</span>
          </div>
        </header>
        <div className='container mx-auto py-20 px-8'>
          <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h2
                className={`text-main text-3xl font-bold ${montserrat.className}`}
              >
                AIM
              </h2>
              <p className={`mb-8`}>
                The Women{"'"}5 Frontline Development Conference (W5FDC) aims to
                bring together leaders, executives, academics, and specialists
                from the public and private sectors, as well as organisations
                and corporations, to discuss the relevance and contribution of
                reducing the gender gap in leadership positions, both at the
                country and organisational levels, as a development strategy
                across its various dimensions.
              </p>
              <h2
                className={`text-main text-3xl font-bold ${montserrat.className}`}
              >
                OBJECTIVE
              </h2>
              <p>
                The panels will focus on the characterisation of the gender gap
                in corporate leadership and development, the advantages of
                female leadership in a country{"'"}s development and corporate
                performance, and the impact of gender equality on overall
                sustainability.
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='flex mb-6'>
                <Image
                  width={600}
                  src={W5FDCLogo}
                  alt='Sprowt Logo website-01'
                />
              </div>

              <a
                className='px-8 py-3 bg-[#C18743] rounded-xl font-bold'
                href='https://www.bilhetesonline.co.mz/#/evento/show/c4e78628-27e5-4bcc-aaa5-3623de38bea3'
                rel='noopener noreferrer'
              >
                BOOK TICKETS
              </a>
            </div>
          </section>
        </div>
      </div>
      <footer className='bg-main py-12 px-8 text-white'>
        <div className='container mx-auto flex flex-col gap-8 lg:gap-8 lg:flex-row justify-between '>
          <div className='flex flex-col lg:flex-row items-center'>
            <span className='mr-4 font-semibold mb-8 lg:mb-0'>Countdown</span>
            <div className='flex'>
              <div className='bg-white h-12 w-12 text-main font-bold text-3xl flex justify-center items-center relative'>
                <span className='absolute -top-6 text-white text-sm font-normal'>
                  DAYS
                </span>
                03
              </div>
              <span className='px-2'>:</span>
              <div className='bg-white h-12 w-12 text-main font-bold text-3xl flex justify-center items-center relative'>
                <span className='absolute -top-6 text-white text-sm font-normal'>
                  HOURS
                </span>
                22
              </div>
              <span className='px-2'>:</span>
              <div className='bg-white h-12 w-12 text-main font-bold text-3xl flex justify-center items-center relative'>
                <span className='absolute -top-6 text-white text-sm font-normal'>
                  MINUTES
                </span>
                02
              </div>
              <span className='px-2'>:</span>
              <div className='bg-white h-12 w-12 text-main font-bold text-3xl flex justify-center items-center relative'>
                <span className='absolute -top-6 text-white text-sm font-normal'>
                  SECONDS
                </span>
                27
              </div>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row gap-4 items-center'>
            <span className='font-semibold'>Partners</span>
            <div className='w-32 lg:w-28 h-16 lg:h-full object-contain bg-white flex justify-center items-center px-4 rounded-xl'>
              <Image
                className='h-full object-contain'
                src={SprowtLogo}
                alt='Sprowt Logo website-01'
              />
            </div>
            <div className='w-32 lg:w-28 h-16 lg:h-full object-contain bg-white flex justify-center items-center px-4 rounded-xl'>
              <Image
                className='h-full object-contain'
                src={PioneerLogo}
                alt='Pioneer Logo-01'
              />
            </div>
            <div className='w-32 lg:w-28 h-16 lg:h-full object-contain bg-white flex justify-center items-center px-4 rounded-xl'>
              <Image
                className='h-full object-contain'
                src={BRICSLogo}
                alt='BRICS WBA SA'
              />
            </div>
            <div className='w-32 lg:w-28 h-16 lg:h-full object-contain bg-[#FF1A0F] flex justify-center items-center px-4 rounded-xl'>
              <Image
                className='h-full object-contain'
                src={SDG5Logo}
                alt='SDG 5'
              />
            </div>
            <div className='w-32 lg:w-28 h-16 lg:h-full object-contain bg-[#071B8A] flex justify-center items-center px-4 rounded-xl'>
              <Image
                className='h-full object-contain'
                src={SDG17Logo}
                alt='SDG 17'
              />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
