import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function NavBar() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <nav id="header" className="top-0 z-30 w-full py-1">
      <div className="container mx-auto mt-0 flex w-full flex-wrap items-center justify-between px-6 py-3">
        {/* Site branding */}
        <div className="mr-4 flex-shrink-0">
          {/* Logo */}
          <Link href="/" className="block" aria-label="Cruip">
            <div className="flex items-center text-xl font-bold tracking-wide text-gray-800 no-underline hover:no-underline ">
              <Image src={"/logo(tmp).png"} alt={""} width={30} height={30} />
              DotPlay
            </div>
          </Link>
        </div>
        {/* <div className="order-1 md:order-1"></div> */}

        <div className="flex flex-grow">
          <ul className="flex flex-grow flex-wrap items-center justify-end">
            <li>
              <Link
                href="/signin"
                className="flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm ml-3 bg-gray-900 text-gray-200 hover:bg-gray-800"
              >
                <span>Sign up</span>
                <svg
                  className="ml-2 -mr-1 h-3 w-3 flex-shrink-0 fill-current text-gray-400"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                    fillRule="nonzero"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
