import React from 'react'

function About() {
  return (
    <div className="bg-[#0a192f] w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4  border-pink-600">
              About
            </p>
          </div>
          <div>

          </div>
          </div>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right text-4xl font-bold'>
                <p>hi , i'm Dejen ,nice to meet you.please take a look around</p>
            </div>
            <div>
                <p>
                    i am passionate about buidling execellent software that imroves
                     the lives of those around me. i specialize in creating software
                      for client ranging from individuals and small-bussines all the
                       way to large enterprise corporation.what would you do if you had 
                       a software expert available at your fingertips
                </p>
            </div>

          </div>
        
      </div>
    </div>
  );
}

export default About;
