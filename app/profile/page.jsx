import React from 'react'
import ProfileCard from '@/components/ProfileCard'

const Page = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col px-4 py-6 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-black font-light text-lg sm:text-xl md:text-2xl">Account Settings</h1>
      </div>

      {/* Profile Section */}
      <div className="bg-slate-100 rounded-xl p-4 sm:p-6  flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <ProfileCard 
        username={"Marrydoe"} 
        email={"marry@gmail.com"}
        img={'/user.png'}
        />

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, perferendis!
          <br className="hidden sm:block" />
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  )
}

export default Page
