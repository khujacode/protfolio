import React from 'react'

import me from './img/me.jpg'

import GitHubIcon from '@mui/icons-material/GitHub';


const Main = () => {



    return (
        <div className='flex justify-end'>
            <div className='flex  bg2 h-[85vh] px-[70px] items-center justify-between border border-[#808080]'>
                <div className='w-[50%]'>
                    <h1 className='text-[#808080]'>Hi all. I am</h1>
                    <h1 className='text-[white] text-[50px] font-inter '>Shodmonov Olimkhuja</h1>
                    <h1 className='text-[#4242ff] text-[25px]'>{'> Front-end developer'}</h1>
                    <div className='text-[#808080] flex gap-[10px] mt-[20px] items-center'>
                        <h1>// find my profile githuub</h1><GitHubIcon />
                    </div>
                    <h1 className='text-[#4242ff] mt-[10px]'> const <span className='text-[#73ff73]'> githubLink </span><span className='text-[white]'> = </span> <span className='text-[pink]'> " https://github.com/khujacode "</span></h1>
                </div>
                <div className='w-[40%]'>
                    <img src={me} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main