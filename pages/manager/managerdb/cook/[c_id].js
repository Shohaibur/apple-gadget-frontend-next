import axios from "axios"
import { useRouter } from "next/router"
import MyLayout from "@/pages/components/layout"
import { useState } from "react";

export default function CookDetails({ data }) {
    const router = useRouter();
    const [cName, setCName] = useState(data.c_name);
    const [cAge, setCAge] = useState(data.c_age);
    const [cGender, setCGender] = useState(data.c_gender);
    const [cAddress, setCAddress] = useState(data.c_address);
    const [cSalary, setCSalary] = useState(data.c_salary);
    const [cEmail, setCEmail] = useState(data.c_email);
    const [cContact, setCContact] = useState(data.c_contact);
    const [mId, setMId] = useState(data.m_id);

  const handleRemove = async (c_id) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to remove the info?"
      );
      console.log(c_id);

      if (confirmed) {
        const response = await axios.delete(
          "https://advancedwebtech-useremployee-production.up.railway.app/manager/removecook/" + c_id
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
  const handleUpdate = async (c_id) => {
    try {
      const confirmed = window.confirm("Are you sure you want to update the info?");
      console.log(c_id);

      if (confirmed) {
        const response = await axios.patch(
          "https://advancedwebtech-useremployee-production.up.railway.app/manager/updatecook/" + c_id,
          {
            c_name: cName,
            c_age: cAge,
            c_gender: cGender,
            c_address: cAddress,
            c_salary: cSalary,
            c_email: cEmail,
            c_contact: cContact,
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
        <MyLayout title = "Cook Info"/>
        <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px]">
          <form>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="c_name"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="c_name"
                    id="c_name"
                    value={cName}
                    onChange={(e) => setCName(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="c_age"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    name="c_age"
                    id="c_age"
                    value={cAge}
                    onChange={(e) => setCAge(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                  <label
                    for="c_gender"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Gender
                  </label>
                  <input
                    type="text"
                    name="c_gender"
                    id="c_gender"
                    value={cGender}
                    onChange={(e) => setCGender(e.target.value)}
                    class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="c_address"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="c_address"
                    id="c_address"
                    value={cAddress}
                    onChange={(e) => setCAddress(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="c_salary"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Salary
                  </label>
                  <input
                    type="number"
                    name="c_salary"
                    id="c_salary"
                    value={cSalary}
                    onChange={(e) => setCSalary(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="c_email"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="c_email"
                    id="c_email"
                    value={cEmail}
                    onChange={(e) => setCEmail(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="c_contact"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Contact
                  </label>
                  <input
                    type="text"
                    name="c_contact"
                    id="c_contact"
                    value={cContact}
                    onChange={(e) => setCContact(e.target.value)}
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
          onClick={() => handleUpdate(data.c_id)}
        >
          Update
        </button>
        <button
          class="mt-2 text-white bg-[#BD442A] border-0 py-5 px-2 sm:py-2 sm:px-5 focus:outline-none hover:[#892A16] rounded text-lg"
          onClick={() => handleRemove(data.c_id)}
        >
          Remove
        </button>
      </div>
        
      </>
    )
  }

  export async function getServerSideProps(context) {
    const c_id=context.params.c_id;
   
       const response = await axios.get('https://advancedwebtech-useremployee-production.up.railway.app/manager/getcook/'+c_id);
       const data = await response.data;
      
   return { props: { data } }
   }