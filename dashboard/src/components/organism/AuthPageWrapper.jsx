import React from 'react'
import AuthLogoIcon from '../atoms/AuthLogoIcon'
function AuthPageWrapper({ page }) {
    return (
        <div id='auth-page-wrapper' className='border wrapper w-full lg:w-3/5 min-h-[100vh] py-[32px]  px-[48px] flex flex-col justify-between'>
            <header>
                <AuthLogoIcon />
            </header>
            <main>
                {page}
            </main>
            <footer>
                <div className='flex w-full justify-between'>
                    <span className='text-[14px] text-color-1 '>Privacy Policy</span>
                    <span className='text-[14px] text-color-1 '>Copyright 2022</span>
                </div>
            </footer>
        </div>
    )
}

export default AuthPageWrapper