import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';

 const musicAcademyCurriculum = [
    {
      title: "Introduction to Music Theory",
      description: "Learn the basics of music theory, including notes, scales, chords, and rhythm. This foundational course is essential for all aspiring musicians."
    },
    {
      title: "Instrument Proficiency: Piano",
      description: "Develop technical skills and musicality on the piano. Focus on finger exercises, sight-reading, and beginner to intermediate repertoire."
    },
    {
      title: "Voice Training and Vocal Techniques",
      description: "Enhance your vocal abilities with proper breathing techniques, pitch control, and articulation. Suitable for beginners and intermediate singers."
    },
    {
      title: "Music Composition and Songwriting",
      description: "Explore the art of creating music. Learn how to compose melodies, write lyrics, and arrange songs in various styles."
    },
    {
      title: "History of Music and Genres",
      description: "Dive into the evolution of music across different cultures and time periods. Study genres like classical, jazz, pop, and world music."
    },
    {
      title: "Performance and Stage Presence",
      description: "Prepare for live performances with techniques to build confidence, engage audiences, and handle stage equipment effectively."
    }
  ];
  

function Sticky_Scroll() {
  return (
    <div className='w-full h-auto overflow-hidden'>
        <StickyScroll contentClassName='w-[22rem] ' content={musicAcademyCurriculum}/>
    </div>
  )
}

export default Sticky_Scroll