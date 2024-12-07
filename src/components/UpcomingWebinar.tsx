"use client"
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';
const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills. Explore essential concepts such as scales, chords, progressions, and the relationships between melody and harmony to strengthen your understanding of music.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters. Discover techniques to create captivating lyrics, memorable melodies, and engaging compositions that resonate with listeners and stand the test of time.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice. Gain insights into effective practice routines, technical exercises, and performance skills that will elevate your playing to the next level.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview. Learn the basics of recording, mixing, and mastering, as well as tips for selecting the right tools and software to bring your musical ideas to life.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies. From stage presence to sound equipment setup, discover how to connect with your audience and deliver an unforgettable performance.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age. Explore strategies for social media engagement, streaming platforms, and online branding to reach a wider audience and grow your fan base.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
];


export default function UpcomingWebinar() {


  return (
    <div className='bg-gray-900 w-full h-auto flex flex-col items-center justify-center'>

   <div className='text-center flex flex-col mt-28 gap-8 align-middle'>
   <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
   </div >

   <div className='text-center flex flex-row mt-28 gap-8 align-middle'>
   <HoverEffect
   items={featuredWebinars.map((cards)=>(
    {
        title: cards.title,
        description: cards.description,
        link: cards.slug
      }
   ))}
   
   />
   </div>
  <div className='flex flex-col mb-10 items-center'>
  <button className='w-40 bg-slate-300 rounded-2xl text-black border-black border-2 hover:bg-slate-200  hover:border-red-400 h-12'>
    Veiw All Courses
  </button>
  </div>

    </div>
  )
}
