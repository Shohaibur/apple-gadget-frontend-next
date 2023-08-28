import axios from "axios"
import { useRouter } from "next/router"
import MyLayout from "@/pages/components/layout"
import { useState } from "react";

export default function WaiterDetails({ data }) {
    const router = useRouter();
    const [wName, setWName] = useState(data.w_name);
    const [wAge, setWAge] = useState(data.w_age);
    const [wGender, setWGender] = useState(data.w_gender);
    const [wAddress, setWAddress] = useState(data.w_address);
    const [wSalary, setWSalary] = useState(data.w_salary);
    const [wEmail, setWEmail] = useState(data.w_email);
    const [wContact, setWContact] = useState(data.w_contact);
    const [mId, setMId] = useState(data.m_id);

  const handleRemove = async (w_id) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to remove the info?"
      );
      console.log(w_id);

      if (confirmed) {
        const response = await axios.delete(
          "https://advancedwebtech-useremployee-production.up.railway.app/manager/removewaiter/" + w_id
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
  const handleUpdate = async (w_id) => {
    try {
      const confirmed = window.confirm("Are you sure you want to update the info?");
      console.log(w_id);

      if (confirmed) {
        const response = await axios.patch(
          "https://advancedwebtech-useremployee-production.up.railway.app/manager/updatewaiter/" + w_id,
          {
            w_name: wName,
            w_age: wAge,
            w_gender: wGender,
            w_address: wAddress,
            w_salary: wSalary,
            w_email: wEmail,
            w_contact: wContact,
            m_id: mId,
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
        <MyLayout title = "Waiter Info"/>
        <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px]">
          <form>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="w_name"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="w_name"
                    id="w_name"
                    value={wName}
                    onChange={(e) => setWName(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="w_age"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    name="w_age"
                    id="w_age"
                    value={wAge}
                    onChange={(e) => setWAge(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                  <label
                    for="w_gender"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Gender
                  </label>
                  <input
                    type="text"
                    name="w_gender"
                    id="w_gender"
                    value={wGender}
                    onChange={(e) => setWGender(e.target.value)}
                    class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="w_address"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="w_address"
                    id="w_address"
                    value={wAddress}
                    onChange={(e) => setWAddress(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="w_salary"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Salary
                  </label>
                  <input
                    type="number"
                    name="w_salary"
                    id="w_salary"
                    value={wSalary}
                    onChange={(e) => setWSalary(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="w_email"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="w_email"
                    id="w_email"
                    value={wEmail}
                    onChange={(e) => setWEmail(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="w_contact"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Contact
                  </label>
                  <input
                    type="text"
                    name="w_contact"
                    id="w_contact"
                    value={wContact}
                    onChange={(e) => setWContact(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="m_id"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Manager
                  </label>
                  <input
                    type="number"
                    name="m_id"
                    id="m_id"
                    value={mId}
                    onChange={(e) => setMId(e.target.value)}
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
          onClick={() => handleUpdate(data.w_id)}
        >
          Update
        </button>
        <button
          class="mt-2 text-white bg-[#BD442A] border-0 py-5 px-2 sm:py-2 sm:px-5 focus:outline-none hover:[#892A16] rounded text-lg"
          onClick={() => handleRemove(data.w_id)}
        >
          Remove
        </button>
      </div>
      </>
    )
  }

  export async function getServerSideProps(context) {
    const w_id=context.params.w_id;
   
       const response = await axios.get('https://advancedwebtech-useremployee-production.up.railway.app/manager/getwaiter/'+w_id);
       const data = await response.data;
      
   return { props: { data } }
   }