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
import { useEffect, useState } from 'react';
import Link from 'next/link';
const montserrat = Montserrat({ subsets: ['latin'] });
const josefin = Josefin_Sans({ subsets: ['latin'] });
import dynamic from 'next/dynamic';
const Countdown = dynamic(() => import('@/components/Countdown'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${montserrat.className}`}>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>W5FDC</title>
        <link rel='icon' type='image/png' href='/W5FDC-.png' />
      </Head>
      <div
        className={`flex-1 flex flex-col justify-center pt-8`}
        style={{ background: `url(${BGLogo.src}) center / cover` }}
      >
        <header className='container mx-auto flex justify-between items-center md:items-start px-8'>
          <div className='flex flex-col md:flex-row items-start md:items-center mr-4 gap-4'>
            <div className='flex flex-col'>
              <Image width={200} src={WDLogo} alt='Sprowt Logo website-01' />
              <span
                className={`self-end mt-1 md:-mt-2 font-medium text-[15px] `}
              >
                21 DE JUNHO, 2023
              </span>
            </div>
            <div className='flex gap-4'>
              <Image
                className='w-16 object-contain'
                src={SDG5Logo}
                alt='SDG 5'
              />
              <Image
                className='w-16 object-contain'
                src={SDG17Logo}
                alt='SDG 17'
              />
            </div>
          </div>

          <Link href='/' className='flex'>
            <svg
              width='32'
              height='28'
              viewBox='0 0 32 28'
              className='fill-main'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M0 25.143C0 26.4073 1.02143 27.4287 2.28571 27.4287H29.7143C30.9786 27.4287 32 26.4073 32 25.143C32 23.8787 30.9786 22.8573 29.7143 22.8573H2.28571C1.02143 22.8573 0 23.8787 0 25.143ZM0 13.7144C0 14.9787 1.02143 16.0001 2.28571 16.0001H29.7143C30.9786 16.0001 32 14.9787 32 13.7144C32 12.4501 30.9786 11.4287 29.7143 11.4287H2.28571C1.02143 11.4287 0 12.4501 0 13.7144ZM32 2.28585C32 1.02157 30.9786 0.000138283 29.7143 0.000138283H2.28571C1.02143 0.000138283 0 1.02157 0 2.28585C0 3.55014 1.02143 4.57157 2.28571 4.57157H29.7143C30.9786 4.57157 32 3.55014 32 2.28585Z' />
            </svg>
            <span className='p-1'>EN</span>
          </Link>
        </header>
        <div className='container mx-auto py-20 px-8'>
          <section className='grid grid-cols-1 md:grid-cols-2 gap-8 font-normal'>
            <div>
              <h2
                className={`text-main text-3xl font-bold ${josefin.className}`}
              >
                OBJECTIVO
              </h2>
              <p className={`mb-8`}>
                A Women{"'"}5 Frontline Development Conference (W5FDC) tem como
                objectivo reunir líderes, executivas, académicos e especialistas
                dos sectores público e privado, bem como organizações e
                empresas, para discutir a relevância e contribuição da redução
                do gender gap em posições de liderança, tanto em nível nacional
                quanto organizacional, como estratégia de desenvolvimento em
                suas várias dimensões.
              </p>
              <h2
                className={`text-main text-3xl font-bold ${josefin.className}`}
              >
                FOCO
              </h2>
              <p>
                Os painéis terão foco na caracterização do gender gap na
                liderança e desenvolvimento corporativo, nas vantagens da
                liderança feminina no desenvolvimento e desempenho corporativo
                de um país, e no impacto da igualdade de género na
                sustentabilidade em geral.
              </p>
              <h2
                className={`text-main text-3xl mt-8 font-bold ${josefin.className}`}
              >
                DETALHAMENTO DO PAINEL
              </h2>
              <h2
                className={`text-[#C18743] text-2xl mt-4 font-bold ${josefin.className}`}
              >
                RELEVÂNCIA DA IMPORTÂNCIA
              </h2>
              <h3 className={`text-xl font-light ${josefin.className}`}>
                DA LIDERANÇA FEMININA: FACTOS E CONTEXTO
              </h3>
              <ul className='list-disc ml-8'>
                <li>
                  Discutindo o gender gap na liderança em níveis nacional e
                  internacional.
                </li>
                <li>
                  Analisando factos e estatísticas relacionados à situação das
                  mulheres em posições de liderança.
                </li>
              </ul>
              <h2
                className={`text-[#C18743] text-2xl mt-8 font-bold ${josefin.className}`}
              >
                O PAPEL DAS MULHERES NA LIDERANÇA
              </h2>
              <h3 className={` text-xl font-light ${josefin.className}`}>
                PARA O DESENVOLVIMENTO DE ESTRATÉGIAS EM TODOS OS NÍVEIS
              </h3>
              <ul className='list-disc ml-8'>
                <li>
                  Debatendo os detalhes intrínsecos das capacidades das mulheres
                  para liderar o desenvolvimento.
                </li>
                <li>
                  Analisando o desempenho do gender gap corporativo
                  caracterizado na liderança
                </li>
              </ul>
              <h2
                className={`text-[#C18743] text-2xl mt-8 font-bold ${josefin.className}`}
              >
                AVALIAÇÃO DO IMPACTO
              </h2>
              <h3 className={`text-xl font-light ${josefin.className}`}>
                DA IGUALDADE DE GÉNERO NA SUSTENTABILIDADE SOCIETAL
              </h3>
              <ul className='list-disc ml-8'>
                <li>
                  Enquadrando a igualdade de género no contexto dos três pilares
                  de ESG
                </li>
                <li>
                  Analisando o impacto da igualdade de gênero na
                  sustentabilidade geral
                </li>
              </ul>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className='flex mb-6'>
                <Image
                  width={600}
                  src={W5FDCLogo}
                  alt='Sprowt Logo website-01'
                />
              </div>

              <a
                className='px-8 py-3 bg-[#C18743] rounded-xl font-bold my-8'
                href='https://www.bilhetesonline.co.mz/#/evento/show/c4e78628-27e5-4bcc-aaa5-3623de38bea3'
                rel='noopener noreferrer'
              >
                COMPRAR BILHETES
              </a>
            </div>
          </section>
        </div>
      </div>
      <footer className='bg-main py-12 px-4 lg:px-8 text-white'>
        <div className='container mx-auto flex flex-col gap-8 md:gap-8 md:flex-row justify-between '>
          <div className='flex flex-col md:flex-row items-center'>
            <span className='mr-4 font-semibold mb-8 md:mb-0'>Countdown</span>
            <Countdown />
          </div>
          <div className='flex flex-col md:flex-row gap-4 items-center'>
            <span className='font-semibold'>PARCEIROS</span>
            <div className='w-32 md:w-28 h-16 md:h-full object-contain bg-white flex justify-center items-center px-4 rounded-xl'>
              <Image
                className='h-full object-contain'
                src={SprowtLogo}
                alt='Sprowt Logo website-01'
              />
            </div>
            <div className='w-32 md:w-28 h-16 md:h-full object-contain bg-white flex justify-center items-center px-4 rounded-xl'>
              <Image
                className='h-full object-contain'
                src={PioneerLogo}
                alt='Pioneer Logo-01'
              />
            </div>
            <div className='w-32 md:w-28 h-16 md:h-full object-contain bg-white flex justify-center items-center px-4 rounded-xl'>
              <Image
                className='h-full object-contain'
                src={BRICSLogo}
                alt='BRICS WBA SA'
              />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
