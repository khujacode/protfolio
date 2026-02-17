import React from 'react'



const About_me = () => {


  return (
    <div className=''>

      <div className='h-[85vh]'>
        <div className='border border-[#808080]'>
          <div className='w-[15%] py-[7px] px-[20px] border border-[#808080] text-[#808080]'>
            <h1>_education *</h1>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className=' flex justify-center h-[78.5vh] border border-[#808080]  w-[48%]'>
            <div className='w-[90%]  text-[#808080] '>
              <h1>// *</h1>
              <div className='flex gap-[20px]'>
                <div>
                  <h1>1</h1>
                  <h1>2</h1>
                  <h1>3</h1>
                  <h1>4</h1>
                  <h1>5</h1>
                  <h1>6</h1>
                  <h1>7</h1>

                </div>
                <div>
                  <h1>*</h1>
                  <h1>*</h1>
                  <h1>*</h1>
                  <h1>*</h1>
                  <h1>*</h1>
                  <h1>*</h1>
                  <h1>*</h1>
                </div>
                <div>
                  <h1>I am Shodmonov Olimkhucha Akhrorkhuchaevich. </h1>
                  <h1>I was born on October 10, 2006, in Khujand.</h1>
                  <h1>I studied until the 10th grade at Gymnasium 1 in Dushanbe.</h1>
                  <h1> I studied the 11th grade at School 29 in Khujand.</h1>
                  <h1>After graduating from school, I enrolled in </h1>
                  <h1>MDDBKh-i Shahri Khujand.</h1>
                </div>
              </div>
              <h1 className='text-end'>* //</h1>
            </div>
          </div>
          <div className=' pt-[50px] flex justify-center h-[78.5vh] border border-[#808080] w-[48%]'>
            <div className='w-[90%]'>
              <div className='bg-[#191919] px-[20px] py-[20px] border  border-[#808080] rounded-[10px] '>
                <h1 className='text-end text-[#808080]'>jsx</h1>
                <h1 className='text-[#cc445b] pt-[10px] pb-[50px]'>import <span className='text-[#4242ff]'>React</span> <span className='text-[#cc445b]'> from </span> <span className='text-[#a3a368]'>`react`</span></h1>
                <h1 className='text-[#4242ff]'>const <span className='text-[#a3a368]'>about_me</span><span className='text-[white]'> =</span> <span className='text-[yellow]'>() </span> <span>{'=>'}</span> <span className='text-[yellow]'>{`{`}</span> </h1>
                <span className='text-[#cc445b]'> reuturn (</span>
                <h1 className='text-[#4242ff]'>{`<h1>`}</h1> <span className='text-[white]'>I am Shodmonov Olimkhucha Akhrorkhuchaevich.I was born on October 10, 2006, in Khujand.I studied until the 10th grade at Gymnasium 1 in Dushanbe.  I studied the 11th grade at School 29 in Khujand. After graduating from school, I enrolled in MDDBKh-i Shahri Khujand.</span> <span className='text-[#4242ff]'> {`</h1>`}</span>
                <span className='text-[#cc445b]'>  )</span>
                <h1 className='text-[yellow]'>{`}`} </h1>
                <h1 className='text-[#4242ff]'>export default <span className='text-[#a3a368]'>about_me</span></h1>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About_me