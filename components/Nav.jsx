"use client"
import {signIn, signOut, useSession,getproviders} from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState,useEffect } from 'react'

const Nav = () => {

    const isUserLoggedIn = true
    const[Providers,setProviders]= useState(null)
    const [toggleDropdown,setToggleDropdown]= useState(false)

    useEffect(()=>{
        const setProviders = async()=>{
        const response= await getproviders()

        setProviders(response)
        }
    setProviders()
    },[])

return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
            <Image 
            src='/assets/images/logo.svg'
            alt='Promptopia logo'
            width={30}
            height={30}
            className='object-contain'/>
            <p className='logo_text'>Promptopia</p>
        </Link>
        {/**Desktop navigation */}
        <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
            <div className='flex gap3 md:gap-5'>
                <Link href='/create-prompt'
                className='black_btn'>
                Create Prompt
                </Link>
                <button type='button'
                onClick={signOut}
                className='outline_btn'>
                Sign Out
                </button>
                <Link href='/profile'>
                <Image src='/assets/images/dummy.png'
                width={27}
                height={27}
                alt='profile'/>
                </Link>
            </div>
        ):(
            <div>
            {Providers && Object.values(providers).map((provider)=>(
                <button 
                type='button'
                key={provider.name}
                onClick={()=>signIn(proider.id)}
                className='black_btn'
                >Sign In</button>
            ))}
            </div>
        )}
        </div>
        {/**Mobile navigation */}

        <div className='sm:hidden flex relative'>
        {isUserLoggedIn ? (
            <div className='flex'>
            <Image src='/assets/images/dummy.png'
                width={27}
                height={27}
                alt='profile'
                onClick={()=>
                setToggleDropdown(prev => {
                    return !prev
                })}/>

                {toggleDropdown && (
                    <div className='dropdown'>
                        <Link href='/profile'
                        className='dropdown_link hover:cursor-pointer'
                        onClick={()=>{setToggleDropdown(false)}}>
                        My Profile
                        </Link>

                        <Link href='/create-prompt'
                        className='dropdown_link'
                        onClick={()=>{setToggleDropdown(false)}}>
                        Create Prompt
                        </Link>
                        <button
                        type='button'
                        onClick={()=>{setToggleDropdown(false)}}
                        className='mt-5 w-full black-btn'>
                        Sign Out</button>
                    </div>
                )}


            </div>
        ):(
            <div>
            {Providers && Object.values(providers).map((provider)=>(
                <button 
                type='button'
                key={provider.name}
                onClick={()=>signIn(proider.id)}
                className='black_btn'
                >Sign In</button>
            ))}
            </div>
        )}
        </div>
    </nav>
)
}

export default Nav