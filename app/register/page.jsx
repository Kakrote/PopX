"use client"
import React,{useState} from 'react'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { set, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

const page = () => {

    const [loading, setLoading] = useState(false)
    const router=useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "onchange",
    });

    const onSubmit = (data) => {
        setLoading(true)
        setTimeout(() => {
            console.log("form data: ", data)
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
                        <h1 className="text-2xl sm:text-3xl  font-bold  text-black">Create your</h1>
                        <h1 className="text-2xl sm:text-3xl  font-bold text-black">PopX Account</h1>
                    </div>

                </div>
                {/* loginform */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="max-w-md mx-auto flex flex-col text-gray-500 space-y-4"
                >

                    <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                        {...register("fullName", { required: "Full name is required" })}
                        error={errors.fullName}
                    />

                    <Input
                        label="Phone Number"
                        type="tel"
                        placeholder="Enter your phone number"
                        {...register("phone", {
                            required: "Phone number is required",
                            pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" },
                        })}
                        error={errors.phone}
                    />

                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", { required: "Email is required" })}
                        error={errors.email}
                    />

                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { required: "Password is required" })}
                        error={errors.password}
                    />

                    <Input
                        label="Company Name"
                        placeholder="Enter your company name"
                        {...register("company", { required: "Company name is required" })}
                        error={errors.company}
                    />

                    <div>
                        <p className="text-sm font-medium text-gray-700 mb-1">Are you an agency?</p>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 text-blue-600">
                                <input
                                    type="radio"
                                    value="yes"
                                    {...register("isAgency", { required: "Please select an option" })}
                                />
                                Yes
                            </label>
                            <label className="flex items-center gap-2 text-blue-600">
                                <input
                                    type="radio"
                                    value="no"
                                    {...register("isAgency", { required: "Please select an option" })}
                                />
                                No
                            </label>
                        </div>
                        {errors.isAgency && (
                            <p className="text-xs text-red-500">{errors.isAgency.message}</p>
                        )}
                    </div>

                    <Button
                        label={loading?"please-wait..":"Register"}
                        type="submit"
                        disabled={!isValid}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                    />
                </form>
            </div>

        </div>
    )
}

export default page
