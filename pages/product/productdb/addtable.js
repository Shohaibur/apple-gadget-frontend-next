import MyLayout from "@/pages/components/layout"
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'

export default function AddTable() {
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
        formData.append('t_position', data.o_name);
        formData.append('seatcapacity', data.o_quantity);
        formData.append('t_status', data.m_availability);
        formData.append('w_id', data.w_id);
      
        console.log(formData);
        try {
            const response = await axios.post("https://advancedwebtech-useremployee-production.up.railway.app/waiter/addtable",
                formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setSuccess('Order placed successfully');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('Order placed unsuccessfull (Each waiter can place an order)' + error.response.data.message);
        }
    };
    return (
      <>
      
      <MyLayout title = "Table"/>
      <div class="min-h-10 bg-gray-100 flex flex-col justify-center sm:py-2">
    <div class="p-5 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="font-bold text-center text-2xl mb-5">
                  Add Table
                </h1>
       <p id="filled_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400"><span class="font-medium"> {success}</span></p>
      
            <form onSubmit={handleSubmit(onSubmit)} encType="application/json" action="#">
                <div>
                    <label 
                      for="t_position"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Position
                    </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                type="text" 
                                id="t_position" 
                                placeholder="Position" 
                                required=""{...register("t_position", { required: true, pattern:/^(?:A1|A2|B1|B2)$/ig})}
                        />
                        {errors.t_position &&
                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium" >Position is required</span>
                        </p>
                        }
                </div>
                <div>
                    <label 
                      for="capacity"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                         capacity
                    </label>
                        <input class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            id="seatcapacity"
                            required=""{...register("seatcapacity", { required: true })}
                        />
                        {errors.seatcapacity &&
                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium">Capacity is required</span>
                        </p>
                        }
                </div>
                <div>
                    <label 
                      for="t_status"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Status
                    </label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            type="text" 
                            id="t_status" 
                            placeholder="true|false" 
                            required=""{...register("t_status", { required: true})}
                            />
                        {errors.t_status &&
                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            <span class="font-medium">Status is required</span>
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
                            <span class="font-medium">Waiter is required</span>
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