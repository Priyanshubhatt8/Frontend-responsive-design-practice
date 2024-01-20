import { component$ } from "@builder.io/qwik";
import Scenery from "~/media/mountains.jpg?jsx";
import Angel from "~/media/angel.png?jsx";
import Coffee from "~/media/Coffe.png?jsx";
import Cola from "~/media/cola.png?jsx";
import Horse from "~/media/horse.png?jsx";

export default component$(() => {
  return (
    <>
      <div class="min-h-screen w-full ">
        {/* NavBar */}
        <div class="flex justify-around gap-6 p-10">
          <li class="hidden cursor-pointer list-none underline-offset-2 hover:underline sm:flex lg:flex">
            HOME
          </li>
          <li class=" hidden cursor-pointer list-none underline-offset-2 hover:underline sm:flex lg:flex">
            PRODUCTS
          </li>
          <li class=" hidden cursor-pointer list-none underline-offset-2 hover:underline sm:flex lg:flex">
            SUBSCRIBE
          </li>
          <li class="cursor-pointer list-none text-3xl font-semibold">
            TravelYatris
          </li>
          <li class=" hidden cursor-pointer list-none underline-offset-2 hover:underline sm:flex lg:flex">
            ABOUT
          </li>
          <li class=" hidden cursor-pointer list-none underline-offset-2 hover:underline sm:flex lg:flex">
            ALEMBIC
          </li>
          <li class=" hidden cursor-pointer list-none underline-offset-2 hover:underline sm:flex lg:flex">
            CONTACT
          </li>
        </div>

        {/* Image section */}
        <div class="relative flex h-[550px] w-full flex-col items-center justify-center">
          <div class="absolute inset-0">
            <Scenery class="shadow-3xl h-[500px] w-full object-cover" />
          </div>

          <div class="relative flex flex-col items-center justify-center gap-8 text-center text-white">
            <p class="text-3xl font-bold">The Harbour Natural Soaps</p>
            <p class="text-2xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              aut!
            </p>
            <p class="text-lg font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              nihil.
            </p>
            <div class="flex gap-6">
              <button class=" bg-yellow-900  p-4 font-bold hover:text-white">
                Buy Products
              </button>
              <button class=" bg-yellow-900 p-4 font-bold text-white ">
                {" "}
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/*  3rd Section*/}

        <div class=" flex min-h-screen w-full flex-col items-center gap-10  p-10">
          <p class="text-center text-2xl font-semibold">
            Experience the aromas
          </p>
          <p class="">Just how you describe an aroma its not simply a task </p>

          <p class="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            voluptate temporibus culpa totam et, vel numquam quia hic velit sit
            dolorem nihil non dicta. Corrupti aliquid culpa eos ducimus
            asperiores Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quo, deserunt. Dignissimos itaque impedit alias hic eligendi ut
            aspernatur facere consectetur! Sed repudiandae inventore veniam
            facere sunt distinctio optio natus blanditiis.
          </p>
          {/* Icons1st */}
          <div class="flex w-full justify-around pt-20 ">
            <div class="flex flex-col gap-2">
              <Angel class="h-24 w-28"></Angel>
              <p class="px-9">Angel</p>
            </div>
            <div class="flex flex-col gap-2">
              <Coffee class="h-24 w-28"></Coffee>
              <p class="px-5">coffee</p>
            </div>
            <div class="flex flex-col gap-2">
              <Cola class="h-24 w-28"></Cola>
              <p class="px-10">Juice</p>
            </div>
            <div class="flex flex-col gap-2">
              <Horse class="h-24 w-28"></Horse>
              <p class="px-9">Horse</p>
            </div>
          </div>
          <div class="">
            <button class="mt-14 bg-black p-4 px-10 text-white">
              Explore more
            </button>
          </div>
        </div>

        <div class="flex min-h-screen w-full flex-col items-center gap-9">
          <h1 class="text-3xl ">Our Products Category</h1>
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
            veniam!
          </h1>

          <div class="sm:flex:row  flex w-full flex-col items-center gap-3 pt-12  lg:flex-row lg:justify-evenly">
            <div class="relative flex h-64 w-64 flex-col items-center justify-center">
              <Scenery class="relative h-full  transition-all duration-300 ease-in-out hover:scale-110"></Scenery>
              <button class="absolute left-10 top-48 bg-white p-4 px-12  font-bold">
                Show More
              </button>
            </div>
            <div class="relative flex h-64 w-64 flex-col items-center justify-center">
              <Scenery class="relative h-full object-cover transition-all duration-300 ease-in-out hover:scale-110"></Scenery>
              <button class="absolute left-10 top-48 bg-white p-4 px-12  font-bold">
                Show More
              </button>
            </div>
            <div class="relative flex h-64 w-64 flex-col items-center justify-center">
              <Scenery class="relative h-full object-cover transition-all duration-300 ease-in-out hover:scale-110"></Scenery>
              <button class="absolute left-10 top-48 bg-white p-4 px-12  font-bold">
                Show More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
