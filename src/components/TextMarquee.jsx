import React from 'react'
import Marquee from "react-fast-marquee";

const TextMarquee = () => {
    return (
        <div>
            <Marquee direction="left">
                <div className='flex'>
                    <img src="/src/assets/Marquee/Mtext/Screenshot (52).png" alt="" />
                    <img src="/src/assets/Marquee/Mtext/Screenshot (53).png" alt="" />
                    <img src="/src/assets/Marquee/Mtext/Screenshot (54).png" alt="" />
                </div>
            </Marquee>
            <Marquee direction="right" className='mb-3'>
                <div className='flex' style={{ width: '100px', height: 'auto', marginRight: '20px' }}>

                    <img className='mr-40' src="/src/assets/Marquee/Screenshot (48).png" alt="" />
                    <img className='mr-40' src="/src/assets/Marquee/Screenshot (49).png" alt="" />
                    <img className='mr-40' src="/src/assets/Marquee/Screenshot (50).png" alt="" />
                    <img className='mr-40' src="/src/assets/Marquee/Screenshot (51).png" alt="" />
                    <img className='mr-40' src="/src/assets/Marquee/Screenshot (52).png" alt="" />
                </div>
            </Marquee>


        </div>
    )
}

export default TextMarquee