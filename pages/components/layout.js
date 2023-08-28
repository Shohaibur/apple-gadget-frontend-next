import Header from "./header"
import Footer from "./footer"


export default function MyLayout(props)   
{
    return(
        <>
        <Header title={props.title} />
        <nav class="flex items-center bg-[#661400] p-3 flex-wrap">
        <span class="text-xl text-white font-bold uppercase tracking-wide">APPLE GADGETS & GEARS</span>
        <div
          class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
        >
          <a
            href="/"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Home</span>
          </a>
          <a
            href="/about"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>About</span>
          </a>
          <a
            href="/contact"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Contact</span>
          </a>
          <a
            href="/manager/login"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Login</span>
          </a>
        </div>
        </nav>
       
        <main>

        </main>
        <Footer/>
        {/* <div align="center" style={{ color:"white", position: "absolute", bottom: 0, width:"100%", height:"5%", background:"#661400"}}>
         Restaurant Management System @copyright 2023 | Group 10</div> */}
        </>
    )
}