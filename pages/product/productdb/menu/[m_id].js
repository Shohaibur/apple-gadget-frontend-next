import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import MyLayout from "@/pages/components/layout";
import { useState } from "react";

export default function MenuDetails({ data }) {
  const router = useRouter();

  // Create state variables for each input field
  const [mName, setMName] = useState(data.m_name);
  const [mType, setMType] = useState(data.m_type);
  const [mPrice, setMPrice] = useState(data.m_price);
  const [mAvailability, setMAvailability] = useState(data.m_availability);
  const [wId, setWId] = useState(data.w_id);

  const handleRemove = async (m_id) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to remove the item?"
      );
      console.log(m_id);

      if (confirmed) {
        const response = await axios.delete(
          "https://advancedwebtech-useremployee-production.up.railway.app/waiter/removemenu/" + m_id
        );
        const data = await response.data;
        // handle successful delete
        console.log("Delete successfully");
        router.back();
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleUpdate = async (m_id) => {
    try {
      const confirmed = window.confirm("Are you sure you want to update the item?");
      console.log(m_id);

      if (confirmed) {
        const response = await axios.put(
          "https://advancedwebtech-useremployee-production.up.railway.app/waiter/updatemenu/" + m_id,
          {
            m_name: mName,
            m_type: mType,
            m_price: mPrice,
            m_availability: mAvailability,
            w_id: wId,
          }
        );
        const data = await response.data;
        // handle successful update
        console.log("Update successfully");
        router.back();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <MyLayout title="Menu Details" />
      <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px]">
          <form>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="m_name"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Menu
                  </label>
                  <input
                    type="text"
                    name="m_name"
                    id="m_name"
                    value={mName}
                    onChange={(e) => setMName(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="m_type"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Type
                  </label>
                  <input
                    type="text"
                    name="m_type"
                    id="m_type"
                    value={mType}
                    onChange={(e) => setMType(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div class="mb-5">
              <label
                for="m_price"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Price
              </label>
              <input
                type="number"
                name="m_price"
                id="m_price"
                value={mPrice}
                onChange={(e) => setMPrice(e.target.value)}
                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="m_availability"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Availability
                  </label>
                  <input
                    type="text"
                    name="m_availability"
                    id="m_availability"
                    value={mAvailability}
                    onChange={(e) => setMAvailability(e.target.value)}
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
                    value={wId}
                    onChange={(e) => setWId(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                align="center"
                class="flex mx-auto mt-5 text-white bg-[#BD442A] border-0 py-2 px-8 focus:outline-none hover:[#892A16] rounded text-lg"
                type="button"
                onClick={() => router.back()}
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="flex justify-center items-center space-x-20">
        <button
          class="mt-2 text-white bg-[#BD442A] border-0 py-5 px-2 sm:py-2 sm:px-5 focus:outline-none hover:[#892A16] rounded text-lg"
          onClick={() => handleUpdate(data.m_id)}
        >
          Update
        </button>
        <button
          class="mt-2 text-white bg-[#BD442A] border-0 py-5 px-2 sm:py-2 sm:px-5 focus:outline-none hover:[#892A16] rounded text-lg"
          onClick={() => handleRemove(data.m_id)}
        >
          Remove
        </button>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const m_id = context.params.m_id;

  const response = await axios.get(
    "https://advancedwebtech-useremployee-production.up.railway.app/waiter/getmenu/" + m_id
  );
  const data = await response.data;

  return { props: { data } };
}