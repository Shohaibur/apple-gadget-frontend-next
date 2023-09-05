import MyLayout from "@/pages/components/layout"
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'


export default function AddMenu() {
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
        formData.append('m_name', data.m_name);
        formData.append('m_type', data.m_type);
        formData.append('m_price', data.m_price);
        formData.append('m_availability', data.m_availability);
        formData.append('w_id', data.w_id);
      
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/product/add",
                formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setSuccess('Menu added successfully');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('Menu add unsuccessfull ' + error.response.data.message);
        }
    };
    return (
      <>
      
      <MyLayout title = "Menu"/>
      <div class="min-h-10 bg-gray-100 flex flex-col justify-center sm:py-2">
    <div class="p-5 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="font-bold text-center text-2xl mb-5">
                  Add Product
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
                      for="m_type"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Type
                    </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            type="text" 
                            id="m_type" 
                            placeholder="smartphone | tablet | smartwatch" 
                            required=""{...register("m_type", { required: true, pattern:/^(?:dessert|savory|drink)$/ig})}
                            />
                        {errors.m_type &&
                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium">Type is required</span>
                        </p>
                        }
                </div>
                <div>
                    <label 
                      for="m_price"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Price
                    </label>
                        <input class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            id="m_price"
                            required=""{...register("m_price", { required: true })}
                        />
                        {errors.m_price &&
                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium">Price is required</span>
                        </p>
                        }
                </div>
                <div>
                    <label 
                      for="m_availability"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Availability
                    </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            type="text" 
                            id="m_availability" 
                            placeholder="true|false" 
                            required=""{...register("m_availability", { required: true})}
                            />
                        {errors.m_availability &&
                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium">Availability is required</span>
                        </p>
                        }
                </div>
                  <div>
                    <label 
                      for="w_id"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Product
                    </label>
                        <input class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            id="w_id"
                            required=""{...register("w_id", { required: true })}
                        />
                        {errors.w_id &&
                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium">Product is required</span>
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