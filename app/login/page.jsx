"use client"
import React from 'react'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router=useRouter()
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors,isValid },
    } = useForm({
        mode:"onchange",
    });

    const onSubmit=(data)=>{
        setLoading(true)
        setTimeout(() => {
            console.log("form data: ",data)
            setLoading(false)
            router.push('/profile')
        }, 500); 

    }

    return (
        <div className='min-h-screen bg-white flex flex-col justify-top px-4 py-8 sm:px-8 md:px-16 lg:px-24 xl:px-32'>

            <div className="w-full max-w-md mx-auto space-y-6">
                {/* hader */}
                <div className="flex flex-col text-left">
                    <div className='py-2'>
                        <h1 className="text-2xl sm:text-3xl  font-bold  text-black">Singin to your</h1>
                        <h1 className="text-2xl sm:text-3xl  font-bold text-black">PopX Account</h1>
                    </div>
                    <span className="text-gray-600 text-sm sm:text-lg">Lorem ipsum dolor sit amet consectetur.</span>
                    <span className="text-gray-600 text-sm sm:text-lg">Lorem ipsum dolor sit.</span>
                </div>
                {/* loginform */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full max-w-md mx-auto flex flex-col text-gray-400 space-y-4"
                >
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { required: "Password is required" })}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                    <Button label={loading?'Logging...':'Login'} type="submit" className="bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400" disabled={!isValid}/>
                </form>
            </div>

        </div>
    )
}

export default page
