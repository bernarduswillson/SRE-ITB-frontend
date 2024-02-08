import React from 'react'

interface FinalistCardProps {
  title: string
  contents: string[]
}

const FinalistCard = ({ title, contents }: FinalistCardProps): JSX.Element => {
  return (
    <div className="h-[325px] w-[400px] md:w-[450px] bg-white border-[2px] border-green9 z-10 p-[25px] flex flex-col items-center text-green11 text-center rounded-2xl drop-shadow">
        <h3 className="w-full text-[20px] lg:text-[24px] text-green7 font-semibold mb-[30px]">
            {title}
        </h3>
        {contents.map((content, index) => (
          <div key={index} className='relative w-[350px] md:w-[370px] h-[60px] bg-gradient-to-r from-green7 to-green8 overflow-hidden mx-[5%] rounded-[10px] flex items-center justify-center drop-shadow'>
              <p className='font-montserrat text-[16px] text-white px-5 text-center font-medium'>
                {content}
              </p>
          </div>
        ))}
    </div>
  )
}

export default FinalistCard
