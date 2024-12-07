  "use client"
  import React from 'react'
import data from "../data/music_courses.json"
import { BackgroundGradient } from './ui/background-gradient'
import Link from 'next/link'
interface course{
         id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured:boolean
        image?:string
}
function FeaturedCard() {



const music_courses = data.courses.filter((courses:course)=>courses.isFeatured)

  return (
    <div className='flex flex-col w-full gap-8  justify-center  bg-slate-900 items-center'>
    <div className='flex-col  gap-4 justify-center items-center text-center'>
  
  <h2 className="text-base text-teal-600 mt-16 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
  

    </div>
    <div className='mt-10 mx-8'>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
    {music_courses.map((courses)=>(
    <div key={courses.id} className="flex justify-center">
    <BackgroundGradient className="flex flex-col gap-6 rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
    <div className="p-4 sm:p-6 flex flex-col items-center gap-2 text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{courses.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{courses.description}</p>
                                <Link href={`/courses/${courses.slug}`}>
                                Learn More
                                </Link>
                            </div>


    </BackgroundGradient >
    </div>
    ))}


    </div>


    </div>
    <div className='mt-10 mx-8 h-44'>
      <BackgroundGradient className='w-40 h-12 items-center flex justify-center rounded-[22px] '> 

      <Link href={"/courses"}  className="px-4 py-3  border-neutral-600
       text-slate-100 transition duration-200">
      Veiw All Courses
      </Link>

        </BackgroundGradient>
    </div>

    </div>
  )
}

export default FeaturedCard