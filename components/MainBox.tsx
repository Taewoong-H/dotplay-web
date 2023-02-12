export function MainBox() {
  return (
    <div className="container relative mx-auto max-w-[1600px]">
      <div className="relative w-full overflow-hidden">
        <div className="h-96">
          <div className="mx-auto block h-full w-full bg-gradient-to-b from-cyan-500 to-blue-500 bg-cover bg-center pt-10">
            <div className="container mx-auto">
              <div className="flex w-full flex-col items-center">
                <p className="my-4 text-2xl text-black">Play the Dot!!</p>
                <p className="my-4 text-center text-lg text-black">
                  Millions of designers and agencies around the world showcase
                  their portfolio work on Dribbble <br></br>- the home to the
                  world’s best design and creative professionals.
                </p>
                <div className="my-4 inline-flex w-1/4 items-center space-x-2 rounded-full bg-gray-50 p-2 ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    width={24}
                    height={24}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    ></path>
                  </svg>

                  <input
                    id="handle"
                    type="text"
                    className="border-none bg-transparent text-lg text-gray-900 outline-none focus:outline-none"
                    name="handle"
                  />
                </div>
                <ul className="my-4 flex items-center">
                  <li className="mr-2 inline-block text-center text-lg text-black">
                    Trending searches
                  </li>
                  <li className="mr-2 rounded-full border border-solid py-1 px-3 text-white">
                    rabbit
                  </li>
                  <li className="mr-2 rounded-full border border-solid py-1 px-3 text-white">
                    dog
                  </li>
                  <li className="mr-2 rounded-full border border-solid py-1 px-3 text-white">
                    2023
                  </li>
                  <li className="mr-2 rounded-full border border-solid py-1 px-3 text-white">
                    New Jeans
                  </li>
                  <li className="mr-2 rounded-full border border-solid py-1 px-3 text-white">
                    Porches
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
