"use client"
import React from 'react'
import Image from 'next/image'
import { LandingPage } from '@/components'
import Head from 'next/head'



export default function Home() {



  return (
    <>
    <Head>
    <style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,700&display=swap');
  </style>
    </Head>
    

    <main className="overflow-hidden">
  
     <LandingPage/>
     
    </main>

    </>
  )
}
