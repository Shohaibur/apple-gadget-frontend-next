import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import MyLayout from "@/pages/components/layout";
import { useState } from "react";

export default function MenuDetails({ data }) {
  const router = useRouter();

  // Create state variables for each input field
  const [tPosition, setTPosition] = useState(data.t_position);
  const [tCapacity, setTCapacity] = useState(data.seatcapacity);
  const [tStatus, setTStatus] = useState(data.t_status);
  const [wId, setWId] = useState(data.w_id);

  const handleRemove = async (m_id) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to remove the table?"
      );
      console.log(t_id);

      if (confirmed) {
        const response = await axios.delete(
          "https://advancedwebtech-useremployee-production.up.railway.app/waiter/canceltable/" + t_id
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
  const handleUpdate = async (t_id) => {
    try {
      const confirmed = window.confirm("Are you sure you want to update the table?");
      console.log(t_id);

      if (confirmed) {
        const response = await axios.patch(
          "https://advancedwebtech-useremployee-production.up.railway.app/waiter/updatetable/" + t_id,
          {
            t_position: tPosition,
            seatcapacity: tCapacity,
            t_status: tStatus,
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
      <MyLayout title="Table Details" />
      <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px]">
          <form>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="t_position"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Position
                  </label>
                  <input
                    type="text"
                    name="t_position"
                    id="t_position"
                    value={tPosition}
                    onChange={(e) => setTPosition(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="seatcapacity"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Capacity
                  </label>
                  <input
                    type="number"
                    name="seatcapacity"
                    id="seatcapacity"
                    value={tCapacity}
                    onChange={(e) => setTCapacity(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="t_status"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Status
                  </label>
                  <input
                    type="text"
                    name="t_status"
                    id="t_status"
                    value={tStatus}
                    onChange={(e) => setTStatus(e.target.value)}
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
          onClick={() => handleUpdate(data.t_id)}
        >
          Update
        </button>
        <button
          class="mt-2 text-white bg-[#BD442A] border-0 py-5 px-2 sm:py-2 sm:px-5 focus:outline-none hover:[#892A16] rounded text-lg"
          onClick={() => handleRemove(data.t_id)}
        >
          Remove
        </button>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const t_id = context.params.t_id;

  const response = await axios.get(
    "https://advancedwebtech-useremployee-production.up.railway.app/waiter/gettable/" + t_id
  );
  const data = await response.data;

  return { props: { data } };
}