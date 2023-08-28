import MyLayout from "@/pages/components/layout"
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'
import SessionCheck from '@/pages/components/sessioncheck';

export default function AddWaiter() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('w_name', data.w_name);
        formData.append('w_age', data.w_age);
        formData.append('w_gender', data.w_gender);
        formData.append('w_address', data.w_address);
        formData.append('w_salary', data.w_salary);
        formData.append('w_email', data.w_email);
        formData.append('w_contact', data.w_contact);
        formData.append('m_id', data.m_id);
      
        console.log(formData);
        try {
            const response = await axios.post("https://advancedwebtech-useremployee-production.up.railway.app/manager/addwaiter",
                formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
          

            setSuccess('Waiter added successfully');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('Waiter add unsuccessfull ' + error.response.data.message);
        }
    };
    return (
      <>
      <SessionCheck/>
      <MyLayout title = "Waiters"/>
      <div class="min-h-10 bg-gray-100 flex flex-col justify-center sm:py-2">
    <div class="p-5 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="font-bold text-center text-2xl mb-5">
                  Add Waiter
                </h1>
       <p id="filled_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400"><span class="font-medium"> {success}</span></p>
      
            <form onSubmit={handleSubmit(onSubmit)} encType="application/json" action="#">
                <div>
                    <label 
                      for="w_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Name
                    </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                type="text" 
                                id="w_name" 
                                placeholder="name" 
                                required=""{...register("w_name", { required: true, pattern: /^[A-Z]+[a-zA-Z]*$/})}
                        />
                        {errors.w_name &&
                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium" >Name is required</span>
                        </p>
                        }
                </div>
                <div>
                    <label 
                      for="w_age"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Age
                    </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            type="number" 
                            id="w_age" 
                            required=""{...register("w_age", { required: true })}
                        />
                        {errors.w_age &&
                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium">Age is required</span>
                        </p>
                        }
                </div>
                <div>
                    <label 
                      for="w_gender"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Gender
                    </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            type="text" 
                            id="w_gender" 
                            placeholder="Male/Female" 
                            required=""{...register("w_gender", { required: true, pattern:/^(?:male|female)$/ig})}
                            />
                        {errors.w_gender &&
                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium">Gender is required</span>
                        </p>
                        }
                </div>
                <div>             
                    <label 
                      for="w_address"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Address
                    </label>
                    <textarea class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="w_address" 
                        rows="1" 
                        placeholder="Adress"
                        required=""{...register("w_address", { required: true })} 
                     />
                </div>
                <div>
                    <label 
                      for="w_salary"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Salary
                    </label>
                        <input class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            id="w_salary"
                            required=""{...register("w_salary", { required: true })}
                        />
                        {errors.w_salary &&
                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium">Salary is required</span>
                        </p>
                        }
                </div>
                <div>
                    <label 
                      for="w_email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email
                    </label>
                        <input class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="email" 
                            id="w_email" 
                            placeholder="name@company.com" 
                            required=""{...register("w_email", { required: true, pattern: /\S+@\S+\.\S+/ })}
                        />
                        {errors.w_email && (
                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            {errors.w_email.type === 'required'
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
                      for="w_contact"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Contact
                    </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                            type="text"
                            id="w_contact" placeholder="+8801*********" required=""
                        {...register('w_contact', { required: true, pattern:/^(?:\+88|88)?(01[3-9]\d{8})$/})}
                        />
                        {errors.w_contact && (
                        <p>
                            {errors.w_contact.type === 'required'
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
                      for="m_id"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Manager
                    </label>
                        <input class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            id="m_id"
                            required=""{...register("m_id", { required: true })}
                        />
                        {errors.m_id &&
                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium">Manager is required</span>
                        </p>
                        }
                </div>
                <br></br>
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