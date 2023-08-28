import axios from "axios"
import { useRouter } from "next/router"
import MyLayout from "@/pages/components/layout"
import { useState } from "react";

export default function CookDetails({ data }) {
    const router = useRouter();
    const [dmName, setDName] = useState(data.dm_name);
    const [dmAge, setDAge] = useState(data.dm_age);
    const [dmGender, setDGender] = useState(data.dm_gender);
    const [dmAddress, setDAddress] = useState(data.dm_address);
    const [dmSalary, setDSalary] = useState(data.dm_salary);
    const [dmEmail, setDEmail] = useState(data.dm_email);
    const [dmContact, setDContact] = useState(data.dm_contact);
    const [dmVN, setDVN] = useState(data.dm_vehicleno);
    const [mId, setMId] = useState(data.m_id);

  const handleRemove = async (dm_id) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to remove the info?"
      );
      console.log(dm_id);

      if (confirmed) {
        const response = await axios.delete(
          "https://advancedwebtech-useremployee-production.up.railway.app/manager/removedeliveryman/" + dm_id
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
  const handleUpdate = async (dm_id) => {
    try {
      const confirmed = window.confirm("Are you sure you want to update the info?");
      console.log(dm_id);

      if (confirmed) {
        const response = await axios.patch(
          "https://advancedwebtech-useremployee-production.up.railway.app/manager/updatedeliveryman/" + dm_id,
          {
            dm_name: dmName,
            dm_age: dmAge,
            dm_gender: dmGender,
            dm_address: dmAddress,
            dm_salary: dmSalary,
            dm_email: dmEmail,
            dm_contact: dmContact,
            dm_vehicleno: dmVN,
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
        <MyLayout title = "Deliveryman Info"/>
        <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px]">
          <form>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="dm_name"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="dm_name"
                    id="dm_name"
                    value={dmName}
                    onChange={(e) => setDName(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="dm_age"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    name="dm_age"
                    id="dm_age"
                    value={dmAge}
                    onChange={(e) => setDAge(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                  <label
                    for="dm_gender"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Gender
                  </label>
                  <input
                    type="text"
                    name="dm_gender"
                    id="dm_gender"
                    value={dmGender}
                    onChange={(e) => setDGender(e.target.value)}
                    class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="dm_address"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="dm_address"
                    id="dm_address"
                    value={dmAddress}
                    onChange={(e) => setDAddress(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="dm_salary"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Salary
                  </label>
                  <input
                    type="number"
                    name="dm_salary"
                    id="dm_salary"
                    value={dmSalary}
                    onChange={(e) => setDSalary(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="mb-5">
              <label
                for="dm_vehicleno"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Vehicle No
              </label>
              <input
                type="text"
                name="dm_vehicleno"
                id="dm_vehicleno"
                value={dmVN}
                onChange={(e) => setDVN(e.target.value)}
                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="dm_email"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="dm_email"
                    id="dm_email"
                    value={dmEmail}
                    onChange={(e) => setDEmail(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="dm_contact"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Contact
                  </label>
                  <input
                    type="text"
                    name="dm_contact"
                    id="dm_contact"
                    value={dmContact}
                    onChange={(e) => setDContact(e.target.value)}
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
          onClick={() => handleUpdate(data.dm_id)}
        >
          Update
        </button>
        <button
          class="mt-2 text-white bg-[#BD442A] border-0 py-5 px-2 sm:py-2 sm:px-5 focus:outline-none hover:[#892A16] rounded text-lg"
          onClick={() => handleRemove(data.dm_id)}
        >
          Remove
        </button>
      </div>
        
      </>
    )
  }

  export async function getServerSideProps(context) {
    const dm_id=context.params.dm_id;
   
       const response = await axios.get('https://advancedwebtech-useremployee-production.up.railway.app/manager/getdeliveryman/'+dm_id);
       const data = await response.data;
      
   return { props: { data } }
   }