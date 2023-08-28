import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import MyLayout from "@/pages/components/layout";
import { useState } from "react";

export default function OrderDetails({ data }) {
  const router = useRouter();

  // Create state variables for each input field
  const [oName, setOName] = useState(data.o_name);
  const [oType, setOType] = useState(data.o_type);
  const [oPrice, setOPrice] = useState(data.o_price);
  const [oQuantity, setOQuantity] = useState(data.o_quantity);
  const [oStatus, setOStatus] = useState(data.o_status);
  const [wId, setWId] = useState(data.w_id);

  const handleRemove = async (o_id) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to remove the item?"
      );
      console.log(o_id);

      if (confirmed) {
        const response = await axios.delete(
          "https://advancedwebtech-useremployee-production.up.railway.app/waiter/cancelorder/" + o_id
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
  const handleUpdate = async (o_id) => {
    try {
      const confirmed = window.confirm("Are you sure you want to update the item?");
      console.log(o_id);

      if (confirmed) {
        const response = await axios.patch(
          "https://advancedwebtech-useremployee-production.up.railway.app/waiter/updateorder/" + o_id,
          {
            o_name: oName,
            o_type: oType,
            o_price: oPrice,
            o_quantity: oQuantity,
            o_status: oStatus,
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
      <MyLayout title="Order Details" />
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
                    value={oName}
                    onChange={(e) => setOName(e.target.value)}
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
                    value={oType}
                    onChange={(e) => setOType(e.target.value)}
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
              value={oPrice}
              onChange={(e) => setOPrice(e.target.value)}
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
              value={oQuantity}
              onChange={(e) => setOQuantity(e.target.value)}
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
                    id="o_status"
                    value={oStatus}
                    onChange={(e) => setOStatus(e.target.value)}
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
          onClick={() => handleUpdate(data.o_id)}
        >
          Update
        </button>
        <button
          class="mt-2 text-white bg-[#BD442A] border-0 py-5 px-2 sm:py-2 sm:px-5 focus:outline-none hover:[#892A16] rounded text-lg"
          onClick={() => handleRemove(data.o_id)}
        >
          Remove
        </button>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const o_id = context.params.o_id;

  const response = await axios.get(
    "https://advancedwebtech-useremployee-production.up.railway.app/waiter/getorder/" + o_id
  );
  const data = await response.data;

  return { props: { data } };
}