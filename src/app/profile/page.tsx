'use client'

import { wixClientServer } from "@/lib/wixClientServer";
import { useUser } from "@clerk/nextjs";

const ProfilePage = () => {

  const { isLoaded, user } = useUser();

  if (!isLoaded) {
    return null
  }

  if (!user) return null

  return (
    <div className="flex flex-col md:flex-row gap-24  md:h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">
      <div className="w-full md:w-1/2">
        <h1 className="text-lg"><span className="font-bold">User:</span> {user?.firstName}</h1>
        
      </div>
      <div className="w-full md:w-1/2 flex flex-col">
        <h3 className="text-2xl">Total expenses in the last 30 days: <span className="font-bold">$00.00</span></h3>


        <div className="mt-12 flex flex-col gap-4 p-5 bg-neutral-200 rounded-md">
          <span>Price: $00.00</span>
          <span>Product Name: N/A</span>
          <span>Id: N/A</span>
          <span>Data: 01/01/2025</span>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage