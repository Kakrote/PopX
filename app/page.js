"use client"
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const hanelLogin = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      router.push('/login')
    }, 500);
  }
  const handelRegister=()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false) 
      router.push('/register')
    }, 500);
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-end px-4 py-8 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="w-full max-w-md mx-auto space-y-6">
        {/* Heading Section */}
        <div className="flex flex-col text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold py-2 text-black">Welcome to PopX</h1>
          <span className="text-gray-600 text-sm sm:text-lg">Lorem ipsum dolor sit.</span>
          <span className="text-gray-600 text-sm sm:text-lg">Lorem ipsum dolor sit.</span>
        </div>

        {/* Button Section */}
        <div className="pt-6 flex flex-col gap-3">
          <Button
            label={"Create Account"}
            onClick={handelRegister}
            className="bg-blue-600 hover:bg-blue-700"
            disabled={loading}
          />
          <Button
            label={"Already Registered? Login"}
            onClick={hanelLogin}
            className="bg-blue-500 hover:bg-blue-700"
            disabled={loading}
          />
        </div>
      </div>
    </div>
  );
}
