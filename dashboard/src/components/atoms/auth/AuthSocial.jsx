import React from 'react'

function AuthSocial({ icon }) {
    return (
        <div className='bg-[#f5f5f5] rounded-[13px]  h-[60px] flex-center w-[46%]'>
            <img className='w-[22px]' src={icon} alt="social media icon" />
        </div>
    )
}

export default AuthSocial