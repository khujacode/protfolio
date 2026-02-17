import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import './Style/StyleDrop.css'


import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import GitHubIcon from '@mui/icons-material/GitHub';




// <Link to={"/login"}> <div className='cursor-pointer'>


const Layout = () => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div>
            <div className='bg'>
                <div className='  xl:container m-auto'>
                    <nav className='text-[#808080] flex border border-[#808080]'>
                        <ul className='w-[20%]  py-[10px] px-[15px]'>
                            <li>_shodmonov olimkhuja</li>
                        </ul>
                        <div className='flex justify-between w-[80%]'>
                            <ul className='flex'>
                                <li className='py-[10px] px-[25px] border border-[#808080]'> <Link to={"/"}>_hello  *</Link></li>
                                <li className='py-[10px] px-[25px] border border-[#808080]'> <Link to={"/about_me"}>_about_me *</Link></li>
                                <li className='py-[10px] px-[25px] border border-[#808080]'> <Link to={"/projects"}>_projects *</Link></li>
                            </ul>
                            <ul className='py-[10px] px-[25px] border border-[#808080]'>
                                <GitHubIcon/>
                            </ul>
                        </div>
                    </nav>

                </div>








                <div className='  xl:container m-auto'>
                    <div className='flex'>
                        <div className='border border-[#808080] w-[20%] flex'>
                            <div className='w-[20%] border border-[#808080]'>
                                <div className='text-[#808080] border-[#808080] px-[10px] border py-[5px]'>
                                    <LocalPhoneIcon />
                                </div>
                                <div className='text-[#808080] border-[#808080] px-[10px] border py-[11.5px]'>
                                    .  .  .
                                </div>
                                  <div className='text-[#808080] border-[#808080] px-[10px] border py-[6px]'>
                                    <ChatBubbleOutlineIcon />
                                </div>
                            </div>
                            <div className='w-[80%]'>
                                <div className='border border-[#808080] py-[7px] px-[15px]'>
                                    <h1 className='text-[white]'>contacs ^</h1>
                                </div>
                                <div className='text-[#808080] px-[40px]'>
                                    <h1 >khujacode@.com</h1>
                                    <h1 >(98) 774 5030</h1>
                                </div>
                                <div className='border border-[#808080] py-[7px] px-[15px]'>
                                    <h1 className='text-[white]'><Link to={"/send_me"}>send me message *</Link></h1>
                                </div>
                            </div>
                        </div>
                        <div className='w-[80%] bg2'>
                            <Outlet />
                        </div>
                    </div>

                </div>






                <div>
                    <div className='container m-auto'>

                        <footer className='border border-[#808080] flex text-[#808080] '>
                            <ul className='w-[20%] border border-[#808080] py-[10px] px-[15px]'>
                                <li>find_me_in:</li>
                            </ul>
                            <div>
                                <ul className='flex'>
                                    <li className='py-[10px] px-[25px] border border-[#808080]'> <InstagramIcon /> </li>
                                    <li className='py-[10px] px-[25px] border border-[#808080]'> <TelegramIcon /> </li>
                                </ul>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout