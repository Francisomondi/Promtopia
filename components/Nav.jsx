"use client"
import {signIn, signOut, useSession,getproviders} from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState,useEffect } from 'react'

const Nav = () => {

    const isUserLoggedIn = false
    const[Providers,setProviders]= useState(null)

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
                height={27}/>
                </Link>
            </div>
        ):(
            <div>
            {Providers && Object.values(providers).map((provider)=>(
                <button 
                type='button'
                key={provider.name}
                onClick={
                    ()=>signIn(proider.id)
                }></button>
            ))}
            </div>
        )}
        </div>
    </nav>
)
}

export default Nav