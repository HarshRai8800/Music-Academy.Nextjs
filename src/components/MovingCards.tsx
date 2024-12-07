import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
const musicAcademyArray = [
  {
    quote: "Music expresses that which cannot be put into words and cannot remain silent. It is the universal language of humanity, connecting people across cultures and generations, embodying the shared emotions of joy, sorrow, and hope.",
    name: "Victor Hugo",
    title: "Introduction to Music Theory"
  },
  {
    quote: "To play a wrong note is insignificant; to play without passion is inexcusable. Music is not merely about technical perfection but about channeling your heart and soul into every note to truly move your audience.",
    name: "Ludwig van Beethoven",
    title: "Instrument Proficiency: Piano"
  },
  {
    quote: "Singing connects the mind to the heart and the heart to the soul. It is the purest form of self-expression, where every note and every word resonates with the deepest parts of our being, creating an intimate bond between performer and listener.",
    name: "Anonymous",
    title: "Voice Training and Vocal Techniques"
  },
  {
    quote: "The essence of composition is to create something unique yet relatable. A well-crafted piece of music tells a story, evokes vivid imagery, and inspires profound emotions, becoming a timeless testament to human creativity.",
    name: "Leonard Bernstein",
    title: "Music Composition and Songwriting"
  },
  {
    quote: "Understanding the past is the key to shaping the future of music. Each genre and era offers invaluable lessons and inspiration, reminding us that innovation often springs from a deep appreciation of tradition.",
    name: "Aaron Copland",
    title: "History of Music and Genres"
  },
  {
    quote: "A great performance is more than just sound; it's an unforgettable experience. It is the art of commanding attention, evoking emotions, and leaving an indelible mark on the hearts and minds of the audience.",
    name: "Pavarotti",
    title: "Performance and Stage Presence"
  }
];

function MovingCards() {
  return (
    <div>
  <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-14 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
           
            <InfiniteMovingCards
            items={musicAcademyArray}
            speed='slow'
            direction='right'
            />
              
              
              </div>
      
    </div>

              
            </div>
      
    </div>


   
  )
}

export default MovingCards