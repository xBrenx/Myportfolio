import React from 'react'

export default function ConocimientosIcons() {

const datos = [
    {
    id: 1,
     href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
     src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
     alt: "javascript",
     width:"70",
     height:"70"
    },{
        id: 2,
        href: "https://www.w3schools.com/css/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
        alt: "css3",
        width:"70",
         height:"70"
    },{
        id: 10,
        href: "https://nextjs.org/",
        src: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
        alt: "nextjs",
        width:"80",
        height:"70"
    },{
        id: 3,
        href: "https://www.w3.org/html/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        alt: "html5",
        width:"70",
        height:"70"
    },{
        id: 4,
        href: "https://reactjs.org/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        alt:"react",
        width:"70",
        height:"70"
    },{
        id: 5,
        href: "https://redux.js.org",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
        alt: "redux",
        width:"70",
        height:"70"
    },{
        id: 5,
        href: "https://tailwindcss.com/",
        src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        alt: "tailwind",
        width:"70",
        height:"70"
    },{
        id: 6,
        href: "https://expressjs.com",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
        alt: "express",
        width:"70",
        height:"70"
    },{
        id: 7,
        href: "https://nodejs.org",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" ,
        alt: "nodejs",
        width:"70",
        height:"70"
    },{
        id: 8,
        href: "https://www.mysql.com/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        alt: "mysql",
        width:"70",
        height:"70"
    },{
        id: 9,
        href: "https://www.postgresql.org",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
        alt: "postgresql",
        width:"70",
        height:"70"
    },{
        id: 11,
        href: "https://www.framer.com/?",
        src: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png",
        alt: "framer-motion",
        width:"70",
        height:"70"
    }
]

  return (
    <div>
        
        <div>
      <span  className='d-block fs-600 ff-serif text-white'> Algunas tecnologias y herramientas son:</span>
     
      <div className='grid grid-rows-4 grid-flow-col gap-2'>
        {
        datos.map(e => (
            <div key={e.id} className='flex justify-center items-center w-36 h-36 sm:w-20 sm:h-20 text-center rounded-lg background bg-gradient-to-r to-transparent from-slate-500'>
            <a href={e.href} target="_blank" rel="noreferrer"> 
        <img className='hover:scale-110 transition-transform' src={e.src} alt={e.alt} width={e.width} height={e.height}/> 
        </a>
            </div>
        
        ))
        }
      </div>

      </div>

     

    </div>
  )
}
