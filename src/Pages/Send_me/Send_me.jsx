import React, { useState } from "react";

const Send_me = () => {



    const [text1, setText1] = useState("")
    const [text2, setText2] = useState("")
    const [text3, setText3] = useState("")



    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Отправленные данные:", formData);
    };


    return (
        <div className=''>

            <div className='h-[85vh]'>
                <div className='border border-[#808080]'>
                    <div className='w-[15%] py-[7px] px-[20px] border border-[#808080] text-[#808080]'>
                        <h1>Message *</h1>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className=' flex justify-center h-[78.5vh] border border-[#808080]  w-[48%]'>
                        <div className='w-[90%]  text-[#808080] '>
                            <h1>// *</h1>
                            <div className="mt-[10px]">



                                <div>
                                    <h1 className="pb-[10px]">  Name:</h1>
                                    <input
                                        value={text1}
                                        onChange={(e) => setText1(e.target.value)}
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        className="bg-[#ffffff00] w-[100%] border border-[#808080] py-[5px] px-[10px] rounded-[5px]"
                                    />
                                </div>

                                <div className="mt-[10px]">
                                    <h1 className="pb-[10px]">Email:</h1>
                                    <input
                                        value={text2}
                                        onChange={(e) => setText2(e.target.value)}
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="bg-[#ffffff00] w-[100%] border border-[#808080] py-[5px] px-[10px] rounded-[5px]"

                                    />
                                </div>
                                <div className="mt-[10px]">
                                    <h1 className="pb-[10px]">Send me message:</h1>
                                    <textarea
                                        value={text3}
                                        onChange={(e) => setText3(e.target.value)}
                                        name="message"
                                        placeholder="Send me message"
                                        className="bg-[#ffffff00] w-[100%] border border-[#808080] py-[5px] px-[10px] rounded-[5px]"
                                    />
                                </div>

                                <button type="submit" className="border border-[#808080] py-[5px] px-[10px] rounded-[10px] mt-[30px]">Отправить</button>


                            </div>
                            <h1 className='text-end'>* //</h1>
                        </div>
                    </div>
                    <div className=' pt-[25px] flex justify-center h-[78.5vh] border border-[#808080] w-[48%]'>
                        <div className='w-[90%]'>
                            <div className='bg-[#191919] px-[20px] py-[20px] border  border-[#808080] rounded-[10px] '>
                                <h1 className='text-end text-[#808080]'>jsx</h1>
                                <h1 className='text-[#cc445b] pt-[10px] pb-[50px]'>import <span className='text-[#4242ff]'>React</span> <span className='text-[#cc445b]'> from </span> <span className='text-[#a3a368]'>`react`</span></h1>
                                <h1 className='text-[#4242ff]'>const <span className='text-[#a3a368]'>about_me</span><span className='text-[white]'> =</span> <span className='text-[yellow]'>() </span> <span>{'=>'}</span> <span className='text-[yellow]'>{`{`}</span> </h1>

                                <h1 className='text-[#4242ff]'>function <span className='text-[#a3a368]'> client </span> <span className='text-[yellow]'> {`(){`} </span>  </h1>
                                <h1 className='text-[#4242ff]'>const user <span className='text-[#a3a368]'> = </span> <span>{`[`} </span> <span className='text-[#cc445b]'> {`{`} </span> </h1>
                                <h1 className='text-[#a3a368]'>name: <span className="text-[white]"> {text1} </span></h1>
                                <h1 className='text-[#a3a368]'>email: <span className="text-[white]"> {text2} </span></h1>
                                <h1 className='text-[#a3a368]'>message: <span className="text-[white]"> {text3} </span></h1>
                                <h1 className='text-[#cc445b] mb-[70px]'>{`}`} <span className=' text-[#4242ff]'> {`]`} </span> </h1>

                                <h1
                                    className='text-[#cc445b]'> reuturn ( )</h1>
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

export default Send_me