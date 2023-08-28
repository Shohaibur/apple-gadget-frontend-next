import MyLayout from "@/pages/components/layout"
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'
export default function SignUp() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    // const validateFile = (value) => {
    //     const file = value[0];
    //     const allowedtypes = ["image/jpg", "image/png"];

    //     if (!allowedtypes.includes(file.type)){
    //         return false;
    //     }
    // }

    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        console.log(data); 
        const formData = new FormData();
        formData.append('m_name', data.m_name);
        formData.append('m_age', data.m_age);
        formData.append('m_gender', data.m_gender);
        formData.append('m_address', data.m_address);
        formData.append('m_salary', data.m_salary);
        formData.append('m_email', data.m_email);
        formData.append('m_contact', data.m_contact);
        formData.append('m_password', data.m_password);
        console.log(formData);  
    
        try {
            const response = await axios.post("https://advancedwebtech-useremployee-production.up.railway.app/manager/signup",
            formData, {
             headers: {
                "Content-Type": "application/json"
                }
             });
    
            setSuccess('Sign Up successful');
            reset();
    
        } catch (error) {
            console.log(error);
    
            if (error.response) {
                console.log(error.response.data.message);
                setSuccess('SignUp unsuccessfull ' + error.response.data.message);
            } else {
                setSuccess('Sign Up unsuccessfull. Please try again later.');
            }
        }
    };
    return (
      <>
      
      <MyLayout title = "Sign Up"/>
      
<div class="min-h-10 bg-gray-100 flex flex-col justify-center sm:py-2">
    <div class="p-5 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="font-bold text-center text-2xl mb-5">
                  Sign Up
                </h1>
       <p id="filled_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400"><span class="font-medium"> {success}</span></p>
      
            <form onSubmit={handleSubmit(onSubmit)} encType="application/json" action="#">
                <div>
                    <label 
                      for="m_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Name
                    </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                type="text" 
                                id="m_name" 
                                placeholder="name" 
                                required=""{...register("m_name", { required: true, pattern: /^[A-Z]+[a-zA-Z]*$/})}
                        />
                        {errors.m_name &&
                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium" >Name is required</span>
                        </p>
                        }
                </div>
                <div>
                    <label 
                      for="m_age"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Age
                    </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            type="number" 
                            id="m_age" 
                            required=""{...register("m_age", { required: true })}
                        />
                        {errors.m_age &&
                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium">Age is required</span>
                        </p>
                        }
                </div>
                <div>
                    <label 
                      for="m_gender"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Gender
                    </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            type="text" 
                            id="m_gender" 
                            placeholder="Male/Female" 
                            required=""{...register("m_gender", { required: true, pattern:/^(?:male|female)$/ig})}
                            />
                        {errors.m_gender &&
                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium">Gender is required</span>
                        </p>
                        }
                </div>
                <div>             
                    <label 
                      for="m_address"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Address
                    </label>
                    <textarea class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="m_address" 
                        rows="1" 
                        placeholder="Adress"
                        required=""{...register("m_address", { required: true })} 
                     />
                </div>
                <div>
                    <label 
                      for="m_salary"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Salary
                    </label>
                        <input class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            id="m_salary"
                            required=""{...register("m_salary", { required: true })}
                        />
                        {errors.m_salary &&
                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium">Salary is required</span>
                        </p>
                        }
                </div>
                <div>
                    <label 
                      for="m_email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email
                    </label>
                        <input class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="email" 
                            id="m_email" 
                            placeholder="name@company.com" 
                            required=""{...register("m_email", { required: true, pattern: /\S+@\S+\.\S+/ })}
                        />
                        {errors.m_email && (
                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            {errors.m_email.type === 'required'
                                                    ?
                                                    <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                                                        <span class="font-medium">Email is required</span>
                                                    </p>
                                                    :
                                                    <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                                                        <span class="font-medium">Invalid email address</span>
                                                    </p>
                                                }
                        </p>
                    )}
                  </div>
                  <div>
                  <label 
                      for="m_contact"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Contact
                    </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                            type="text"
                            id="m_contact" placeholder="Contact" required=""
                        {...register('m_contact', { required: true, pattern:/^(?:\+88|88)?(01[3-9]\d{8})$/})}
                        />
                        {errors.m_contact && (
                        <p>
                            {errors.m_contact.type === 'required'
                                    ?
                                    <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400" >
                                        <span class="font-medium">conatct is required</span>
                                    </p>
                                    :
                                    <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400" >
                                        <span class="font-medium">Invalid contact pattern</span>
                                    </p>

                            }
                        </p>
                    )}
                  </div>
                  <div>
                        <label 
                        for="m_password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Password
                        </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            type="password"
                            id="m_password" 
                            placeholder="••••••••" 
                            required=""{...register('m_password', { required: true,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/})}
                        />
                                        {errors.m_password && (
                        <p>
                            {errors.m_password.type === 'required'
                                                ?
                                                 <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                                                    <span class="font-medium">password is required</span></p>
                                                :
                                                <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                                                    <span> Password must be 6-10 characters, with at least 1 lowercase, 1 uppercase, 1 digit, and 1 special character</span>
                                                </p>

                                }
                        </p>
                    )}
                <br></br>
                  </div>
                        <button
                            class="transition duration-200 bg-[#BD442A]  hover:bg-[#661400] focus:bg-red-700 focus:shadow-sm focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block" 
                            type="submit">
                            Submit
                        </button>
              </form>
        </div>
        </div> 
    </div>
</div>
      </>
    )
}