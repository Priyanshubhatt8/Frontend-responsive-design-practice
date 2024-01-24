import { component$ } from "@builder.io/qwik";
// import Image3 from "~/media/image3.jpg?jsx";
import Scenery from "~/media/Scenery.jpg?jsx";
import Chat from "~/media/Chat.png?jsx";
import Security from "~/media/Seurity.png?jsx";

export default component$(() => {
  return (
    <>
      <div class="flex min-h-screen w-full flex-col gap-6 bg-gray-100">
        <div class="flex justify-between p-8 lg:px-24  ">
          <div class="flex gap-20">
            <div>
              <h1 class="text-3xl font-bold text-black sm:text-xl lg:text-2xl ">
                Travelyatris
              </h1>
            </div>
            <div class="hidden items-center gap-4  sm:flex lg:flex  lg:py-3">
              <li class="cursor-pointer list-none font-semibold text-black underline-offset-2 hover:underline">
                Home
              </li>
              <li class="cursor-pointer list-none font-semibold	text-black underline-offset-2 hover:underline">
                Trip
              </li>
              <li class=" cursor-pointer list-none font-semibold text-black	underline-offset-2 hover:underline">
                Service
              </li>
              <li class=" cursor-pointer list-none font-semibold text-black	underline-offset-2 hover:underline">
                Contact
              </li>
            </div>
          </div>
          <div class="flex  gap-10">
            <button class="rounded-lg  text-center font-semibold text-black underline-offset-2  hover:underline">
              Login
            </button>
            <button class=" rounded-lg font-semibold text-black underline-offset-2 hover:underline">
              Signup
            </button>
          </div>
        </div>
        <div class="flex grow">
          <div class="flex h-full w-3/6 flex-col gap-16">
            <div class="flex flex-col gap-6 p-8 lg:px-24">
              <div class="flex flex-col">
                <div class="text-center text-4xl font-semibold sm:text-start lg:text-start">
                  Let's Find a Home
                </div>
                <div class="text-center text-4xl font-semibold sm:text-start lg:text-start">
                  That's Perfect for you
                </div>
              </div>
              <div class="flex flex-col gap-4">
                <div class="text-center text-black  sm:text-start lg:text-start">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti illo quos laudantium quidem alias minima inventore
                  recusandae ratione voluptatibus. Quasi!
                </div>
                <div class="text-balck font-bold">Lets Discuss Soon</div>
              </div>

              <div class="flex flex-col gap-4 ">
                <div class="flex w-full">
                  <button class="w-2/6  bg-slate-300 px-10 py-3  focus:bg-blue-300 focus:text-blue-700">
                    BUY
                  </button>
                  <button class="w-2/6 bg-slate-300 px-10 py-3  focus:bg-blue-300 focus:text-blue-700">
                    SELL
                  </button>
                  <button class=" w-2/6  bg-slate-300 px-10 py-3  focus:bg-blue-300 focus:text-blue-700">
                    RENT
                  </button>
                </div>
                <div class="flex justify-center ">
                  <div class="flex w-52 flex-col gap-4  bg-white p-4  shadow-2xl shadow-zinc-300 lg:w-full lg:flex-row">
                    <div class="w-2/6">
                      <div class="text-center">London</div>
                      <div class="text-center">Shimla,chandighar</div>
                    </div>
                    <div class="boder-gray-300  mt-2 flex border-y-2 lg:border-x-2"></div>
                    <div class="w-2/6 ">
                      <div class="text-center">London</div>
                      <div class="text-center">Shimla,chandighar</div>
                    </div>

                    <button class=" bg-blue-700 px-10  py-3 text-white  ">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex w-full  justify-center ">
              <button class="w-48 bg-slate-300 p-6 shadow-md hover:bg-blue-300">
                <div class=" text-blue-700">9K+</div>
                <div class="text-center text-black">Happy customers</div>
              </button>
              <button class=" w-48 bg-slate-300 p-6 shadow-md hover:bg-blue-300">
                <div class=" text-blue-700">5K+</div>
                <div class="text-black">Happy customers</div>
              </button>
              <button class="w-48 bg-slate-300 p-6 shadow-md hover:bg-blue-300">
                <div class=" text-blue-700">2K+</div>
                <div class="text-black">Happy customers</div>
              </button>
            </div>
          </div>
          <div class="hidden lg:flex lg:w-3/6">
            <Scenery class="h-auto w-full rounded-t-full" />
          </div>
        </div>

        {/* new sec */}
      </div>
      <div class="flex min-h-screen w-full flex-col items-center gap-5 py-20">
        <h1 class="text-xl font-bold">What we do?</h1>

        <div class="flex flex-col">
          <p class="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, unde?
          </p>
          <p class="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, unde?
            Lorem ipsum dolr
          </p>
        </div>

        <div class="flex flex-wrap items-center justify-evenly gap-6 py-8">
          <div class="flex h-40 flex-col items-center justify-center gap-2 bg-gray-100 shadow-lg transition-all duration-200 ease-in-out hover:scale-105 hover:bg-white hover:shadow-2xl lg:h-56 lg:w-64 ">
            <div class=" ">
              {" "}
              <Chat></Chat>
            </div>

            <div class="pt-3 text-lg font-bold">Communication</div>
            <p class="text-center text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
              pariatur ex voluptatem consequuntur harum, numquam facere et
            </p>
          </div>

          <div class="flex h-40 flex-col items-center  justify-center gap-2 bg-gray-100 shadow-lg transition-all duration-200 ease-in-out hover:scale-105 hover:bg-white hover:shadow-2xl lg:h-56 lg:w-64 ">
            <div class=" ">
              {" "}
              <Security></Security>
            </div>

            <div class="pt-3 text-lg font-bold">Communication</div>
            <p class="text-center text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
              pariatur ex voluptatem consequuntur harum, numquam facere et
            </p>
          </div>
          <div class="flex  h-40 flex-col items-center  justify-center gap-2 bg-gray-100 shadow-lg transition-all duration-200  ease-in-out hover:scale-105 hover:bg-white hover:shadow-2xl lg:h-56 lg:w-64 ">
            <div class=" ">
              {" "}
              <Chat></Chat>
            </div>

            <div class="pt-3 text-lg font-bold">Communication</div>
            <p class="text-center text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
              pariatur ex voluptatem consequuntur harum, numquam facere et
            </p>
          </div>
          <div class="flex  h-40 flex-col items-center  justify-center gap-2 bg-gray-100 shadow-lg transition-all duration-200  ease-in-out hover:scale-105  hover:bg-white hover:shadow-2xl lg:h-56 lg:w-64">
            <div class=" ">
              {" "}
              <Chat></Chat>
            </div>

            <div class="pt-3 text-lg font-bold">Communication</div>
            <p class="text-center text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
              pariatur ex voluptatem consequuntur harum, numquam facere et
            </p>
          </div>
          <div class="flex h-40 flex-col items-center  justify-center gap-2 bg-gray-100 shadow-lg transition-all duration-200 ease-in-out hover:scale-105 hover:bg-white hover:shadow-2xl lg:h-56 lg:w-64 ">
            <div class=" ">
              {" "}
              <Chat></Chat>
            </div>

            <div class="pt-3 text-lg font-bold">Communication</div>
            <p class="text-center text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
              pariatur ex voluptatem consequuntur harum, numquam facere et
            </p>
          </div>
        </div>

        <div class=" mt-16  flex min-h-screen w-full flex-col gap-3  bg-gray-50">
          <div class="flex w-full flex-col items-center  gap-3 py-10">
            <div class="text-2xl font-bold">Best Trips Available</div>
            <div class="flex flex-col ">
              <p class="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quo
                repellat remrem dolore voluptatem recusandae excepturi iure
                commodi
              </p>
              <p class="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quo
                repellat
              </p>
            </div>
          </div>

          <div class="flex flex-wrap justify-evenly gap-2">
            <div class="flex  h-96 w-80  flex-col  gap-6 bg-gray-200 shadow-lg transition-all duration-200 ease-in-out hover:scale-105 hover:bg-white hover:shadow-2xl">
              <div>
                <Scenery class="m-3 w-72 "></Scenery>
              </div>
              <div class="flex flex-col gap-2 px-3">
                <p class="font-bold">Best Trip Available</p>
                <p class="font-semibold">
                  For limited Time only join this lovely trip
                </p>
              </div>
              <div class="flex gap-24">
                <h1 class="px-3 text-3xl font-bold">$6000</h1>
                <button class=" bg-blue-500 p-3 text-white">See More</button>
              </div>
            </div>
            <div class="flex  h-96 w-80  flex-col  gap-6 bg-gray-200 shadow-lg transition-all duration-200 ease-in-out hover:scale-105 hover:bg-white hover:shadow-2xl">
              <div>
                <Scenery class="m-3 w-72 "></Scenery>
              </div>
              <div class="flex flex-col gap-2 px-3">
                <p class="font-bold">Best Trip Available</p>
                <p class="font-semibold">
                  For limited Time only join this lovely trip
                </p>
              </div>
              <div class="flex gap-24">
                <h1 class="px-3 text-3xl font-bold">$6000</h1>
                <button class=" bg-blue-500 p-3 text-white">See More</button>
              </div>
            </div>
            <div class="flex  h-96 w-80  flex-col  gap-6 bg-gray-200 shadow-lg transition-all duration-200 ease-in-out hover:scale-105 hover:bg-white hover:shadow-2xl">
              <div>
                <Scenery class="m-3 w-72 "></Scenery>
              </div>
              <div class="flex flex-col gap-2 px-3">
                <p class="font-bold">Best Trip Available</p>
                <p class="font-semibold">
                  For limited Time only join this lovely trip
                </p>
              </div>
              <div class="flex gap-24">
                <h1 class="px-3 text-3xl font-bold">$6000</h1>
                <button class=" bg-blue-500 p-3 text-white">See More</button>
              </div>
            </div>
            <div class="flex  h-96 w-80  flex-col  gap-6 bg-gray-200 shadow-lg transition-all duration-200 ease-in-out hover:scale-105 hover:bg-white hover:shadow-2xl">
              <div>
                <Scenery class="m-3 w-72 "></Scenery>
              </div>
              <div class="flex flex-col gap-2 px-3">
                <p class="font-bold">Best Trip Available</p>
                <p class="font-semibold">
                  For limited Time only join this lovely trip
                </p>
              </div>
              <div class="flex gap-24">
                <h1 class="px-3 text-3xl font-bold">$6000</h1>
                <button class=" bg-blue-500 p-3 text-white">See More</button>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd */}
        <div class="flex min-h-screen w-full gap-32   bg-white">
          <div>
            <h1 class="text-2xl font-bold">We are ready to make your</h1>
          </div>
          <div>
            <div>
              <Scenery class="w-96"></Scenery>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

// import { component$ } from "@builder.io/qwik";
// import Angel from "~/media/angel.png?jsx";
// import Coffee from "~/media/Coffe.png?jsx";
// import Cola from "~/media/cola.png?jsx";
// import Horse from "~/media/horse.png?jsx";

// export default component$(() => {
//   return (
//     <>
//       <div class="min-h-screen w-full ">
//       {/* NavBar */}
//       <div class="flex justify-around gap-6 p-10">
//           <li class="hidden cursor-pointer list-none underline-offset-2 hover:underline sm:flex lg:flex">
//             HOME
//           </li>
//           <li class=" hidden cursor-pointer list-none underline-offset-2 hover:underline sm:flex lg:flex">
//             PRODUCTS
//           </li>
//           <li class=" hidden cursor-pointer list-none underline-offset-2 hover:underline sm:flex lg:flex">
//             SUBSCRIBE
//           </li>
//           <li class="cursor-pointer list-none text-3xl font-semibold">
//             TravelYatris
//           </li>
//           <li class=" hidden cursor-pointer list-none underline-offset-2 hover:underline sm:flex lg:flex">
//             ABOUT
//           </li>
//           <li class=" hidden cursor-pointer list-none underline-offset-2 hover:underline sm:flex lg:flex">
//             ALEMBIC
//           </li>
//           <li class=" hidden cursor-pointer list-none underline-offset-2 hover:underline sm:flex lg:flex">
//             CONTACT
//           </li>
//         </div> */}

//       {/* Image section */}
//       <div class="relative flex h-[550px] w-full flex-col items-center justify-center">
//           <div class="absolute inset-0">
//             <Scenery class="shadow-3xl h-[500px] w-full object-cover" />
//           </div>

//           <div class="relative flex flex-col items-center justify-center gap-8 text-center text-white">
//             <p class="text-3xl font-bold">The Harbour Natural Soaps</p>
//             <p class="text-2xl font-bold">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
//               aut!
//             </p>
//             <p class="text-lg font-bold">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
//               nihil.
//             </p>
//             <div class="flex gap-6">
//               <button class=" bg-yellow-900  p-4 font-bold hover:text-white">
//                 Buy Products
//               </button>
//               <button class=" bg-yellow-900 p-4 font-bold text-white ">
//                 {" "}
//                 Subscribe Now
//               </button>
//             </div>
//           </div>
//         </div> */}

//       {/*  3rd Section*/}

//       <div class=" flex min-h-screen w-full flex-col items-center gap-10  p-10">
//           <p class="text-center text-2xl font-semibold">
//             Experience the aromas
//           </p>
//           <p class="">Just how you describe an aroma its not simply a task </p>

//           <p class="text-center">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
//             voluptate temporibus culpa totam et, vel numquam quia hic velit sit
//             dolorem nihil non dicta. Corrupti aliquid culpa eos ducimus
//             asperiores Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//             Quo, deserunt. Dignissimos itaque impedit alias hic eligendi ut
//             aspernatur facere consectetur! Sed repudiandae inventore veniam
//             facere sunt distinctio optio natus blanditiis.
//           </p>
//       {/* Icons1st */}
//        <div class="flex w-full justify-around pt-20 ">
//             <div class="flex flex-col gap-2">
//               <Angel class="h-24 w-28"></Angel>
//               <p class="px-9">Angel</p>
//             </div>
//             <div class="flex flex-col gap-2">
//               <Coffee class="h-24 w-28"></Coffee>
//               <p class="px-5">coffee</p>
//             </div>
//             <div class="flex flex-col gap-2">
//               <Cola class="h-24 w-28"></Cola>
//               <p class="px-10">Juice</p>
//             </div>
//             <div class="flex flex-col gap-2">
//               <Horse class="h-24 w-28"></Horse>
//               <p class="px-9">Horse</p>
//             </div>
//           </div>
//           <div class="">
//             <button class="mt-14 bg-black p-4 px-10 text-white">
//               Explore more
//             </button>
//           </div>
//         </div>
//  <div class="flex min-h-screen w-full flex-col items-center gap-9">
//           <h1 class="text-3xl ">Our Products Category</h1>
//           <h1>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
//             veniam!
//           </h1>

//           <div class="sm:flex:row  flex w-full flex-col items-center gap-3 pt-12  lg:flex-row lg:justify-evenly">
//             <div class="relative flex h-64 w-64 flex-col items-center justify-center">
//               <Scenery class="relative h-full  transition-all duration-300 ease-in-out hover:scale-110"></Scenery>
//               <button class="absolute left-10 top-48 bg-white p-4 px-12  font-bold">
//                 Show More
//               </button>
//             </div>
//             <div class="relative flex h-64 w-64 flex-col items-center justify-center">
//               <Scenery class="relative h-full object-cover transition-all duration-300 ease-in-out hover:scale-110"></Scenery>
//               <button class="absolute left-10 top-48 bg-white p-4 px-12  font-bold">
//                 Show More
//               </button>
//             </div>
//             <div class="relative flex h-64 w-64 flex-col items-center justify-center">
//               <Scenery class="relative h-full object-cover transition-all duration-300 ease-in-out hover:scale-110"></Scenery>
//               <button class="absolute left-10 top-48 bg-white p-4 px-12  font-bold">
//                 Show More
//               </button>
//             </div>
//           </div>
//         </div>

//       </div>
// {/*
//       <div class=" flex min-h-screen w-full flex-col gap-10 p-10">
//         <h1 class="  text-4xl ">Agency information</h1>
//         <div class="flex  flex-col gap-5  rounded-lg border-2 p-5">
//           <h1 class="text-3xl font-semibold">Agency details</h1>
//           <p class="pt-2  text-gray-500">Name, address and location</p>

//           <div class="flex flex-col gap-4">
//             <input
//               type="text"
//               placeholder="Restaurant name"
//               class="w-full rounded-lg border-2 p-4 focus:outline-none"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Restaurant complete address"
//               class="w-full rounded-lg border-2  p-4 focus:outline-none"
//             />
//           </div>
//           <div class="flex flex-col gap-4">
//             <p class="text-xl font-semibold">
//               Please place the pin accurately at your outlet's location on the
//               map
//             </p>
//             <p class="text-gray-500">
//               This will help your customers and Zomato riders to locate your
//               store
//             </p>
//             <input
//               type="text"
//               class="rounded-lg border-2 p-4 focus:outline-none"
//             />
//           </div>

//           <div>
//             <p class="text-3xl font-semibold">Contact Number of Agency</p>
//             <p class="py-3 text-gray-500">
//               Your customers will call you in this number
//             </p>
//           </div>

//           <div class="flex gap-3">
//             <input
//               type="text"
//               placeholder="Enter contact details "
//               class="w-full rounded-lg border-2 p-4 focus:outline-none"
//             />
//             <button class="rounded-lg bg-gray-500 p-4 px-8 font-semibold text-white hover:bg-blue-600 hover:text-white">
//               Verify
//             </button>
//           </div>
//         </div>

//         <div class=" w-full rounded-lg border-2 p-5">
//           <div class="flex flex-col gap-3">
//             <p class="  text-3xl font-semibold ">Agency owner details</p>
//             <p class="py-3 text-gray-500">
//               This will be used to share revenue related communication
//             </p>

//             <div class="flex gap-3">
//               <input
//                 type="text"
//                 placeholder="mobile number of Agency"
//                 class="w-full rounded-lg border-2 p-4 focus:outline-none"
//               />
//               <button class="rounded-lg bg-gray-500 p-4 px-8 font-semibold text-white hover:bg-blue-600 hover:text-white">
//                 Verify
//               </button>
//             </div>
//             <div class="flex  gap-2">
//               <input
//                 type="text"
//                 placeholder="Agency owner full name"
//                 class="w-full rounded-lg border-2 p-4 focus:outline-none"
//               />
//               <input
//                 type="text"
//                 placeholder="Agency owner email address"
//                 class="w-full rounded-lg border-2 p-4 focus:outline-none"
//               />
//             </div>
//           </div>
//         </div>
//         <h1 class="  text-4xl ">Agency Type & Timings</h1>
//         <div class=" rounded-lg border-2 p-5">
//           <h1 class="text-3xl font-semibold">Establishment type</h1>
//           <p class="pt-2  text-gray-500">
//             Select most relevant category for your Agency types
//           </p>
//         </div>

//         <h1 class="  text-4xl ">Upload images</h1>
//         <div class=" rounded-lg border-2 p-5">
//           <h1 class="text-2xl font-semibold">Menu images</h1>
//           <p class="pt-2  text-gray-500">
//             Your trip will be directly visible to customer in Travelyatris
//           </p>
//         </div>
//       </div> */}
//     </>
//   );
// });
