import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import MyLayout from '@/pages/components/layout';


export default function SearchMenu({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // redirect to the same page with query params containing the input value
    router.push({
      pathname: 'findorder',
      query: { inputValue: inputValue }
    });
  }

  return (
    <>
     <MyLayout title="Search Order"/>
     <form onSubmit={handleFormSubmit}>
     <div class="flex h-screen w-screen items-center justify-center p-5">
  <div class="w-full rounded-lg bg-gray-200 p-5 w-2/4">
    <div class="flex">
      <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
        <svg viewBox="0 0 20 20" aria-hidden="true" class="pointer-events-none absolute w-5 fill-gray-500 transition">
          <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
        </svg>
      </div>
      <input class="w-full bg-white pl-2 text-base font-semibold outline-0" 
        type="text"
        value={inputValue}
        onChange={handleInputChange} 
        placeholder="search"
       />
      <input type="submit" value="Search" class="bg-[#BD442A] p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-[#661400] transition-colors"/>
    </div>
  </div>
  <div>
{data.status == null? 
    // <OrderData data={data}/>
    <div class="flex items-center justify-center p-12">
  <div class="mx-auto w-full max-w-[550px]">
    <form>
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="o_name"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Order
            </label>
            <input
              type="text"
              name="o_name"
              id="o_value"
              value={data.o_name}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="o_type"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Type
            </label>
            <input
              type="text"
              name="o_type"
              id="o_type"
              value={data.o_type}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
            <label
              for="o_price"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Price
            </label>
            <input
              type="number"
              name="o_price"
              id="o_price"
              value={data.o_price}
              class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="o_quantity"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Quantity
            </label>
            <input
              type="number"
              name="o_quantity"
              id="o_quantity"
              value={data.o_quantity}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="o_status"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Status
            </label>
            <input
              type="text"
              name="o_status"
              id="m_value"
              value={data.o_status}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="w_id"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Waiter
            </label>
            <input
              type="number"
              name="w_id"
              id="w_id"
              value={data.w_id}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div>
      <button align="center" class="flex mx-auto mt-16 text-white bg-[#BD442A] border-0 py-2 px-8 focus:outline-none hover:[#892A16] rounded text-lg" type="button" onClick={() => router.back()}>
          Back
      </button>
      </div>
    </form>
  </div>
</div>
      : data.status }
</div>
</div>
</form>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const inputValue = query.inputValue;
  try {
  const response = await axios.get('https://advancedwebtech-useremployee-production.up.railway.app/waiter/getorder/'+inputValue);
  const data = await response.data;

  return {
    props: {
      data
    }
  };
  
  } catch (error) {

  return {
    props: {
      data: {color:"red",status:"enter valid order id"}
    }
  };
}
}