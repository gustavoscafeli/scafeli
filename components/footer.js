// import Link from "next/link";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100 mt-10">
        <div className="max-w-screen-lg mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
            <div class="relative z-10 col-start-1 row-start-1 px-4 pt-20 pb-20 bg-gradient-to-t from-black sm:bg-none">
              <p class="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">
                Você me encontra nas
              </p>
              <h2 class="text-xl font-semibold text-white sm:text-3xl sm:leading-7 sm:text-black md:text-3xl">
                Redes sociais
              </h2>
            </div>

            <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
              <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
                <div class="relative col-span-3 row-span-2 md:col-span-2">
                  <img
                    src="https://images.unsplash.com/photo-1613769668324-9d9e1ca4d7cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt=""
                    class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg"
                  />
                </div>
                <div class="relative hidden md:block">
                  <img
                    src="https://images.unsplash.com/photo-1613769667897-62efc8601ddb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=327&q=80"
                    alt=""
                    class="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
                  />
                </div>
                <div class="relative hidden md:block">
                  <img
                    src="https://images.unsplash.com/photo-1613768938589-f430f3ae7608?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=358&q=80"
                    alt=""
                    class="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
