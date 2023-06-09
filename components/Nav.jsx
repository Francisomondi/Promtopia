"use client"
import {signIn, signOut, useSession,getProviders} from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState,useEffect } from 'react'

const Nav = () => {

    const {data: session} = useSession()

    const[Providers,setProviders]= useState(null)
    const [toggleDropdown,setToggleDropdown]= useState(false)

    useEffect(()=>{
        const setUpProviders = async()=>{
        const response= await getProviders()

        setProviders(response)
        }
    setUpProviders()
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
        {session?.user ? (
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
                <Image src={session?.user.image}
                width={27}
                height={27}
                alt='profile'
                className='rounded-full'/>
                </Link>
            </div>
        ):(
            <div>
            {Providers && Object.values(Providers).map((provider)=>(
                <button 
                type='button'
                key={provider.name}
                onClick={()=>signIn(provider.id)}
                className='black_btn'
                >Sign In</button>
            ))}
            </div>
        )}
        </div>
        {/**mobile navigation */}
        <div className='sm:hidden flex relative'>
        {session ?.user ? (
            <div className='flex '>
            <Image src={session?.user.image}
                width={27}
                height={27}
                alt='profile'
                onClick={()=>
                setToggleDropdown(prev => !prev)}
                className='rounded-full'
                />

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
                        className='mt-5 w-full black_btn'>
                        Sign Out</button>
                    </div>
                )}


            </div>
        ):(
            <div>
            {Providers && Object.values(Providers).map((provider)=>(
                <button 
                type='button'
                key={provider.name}
                onClick={()=>signIn(provider.id)}
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