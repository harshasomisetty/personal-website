"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { routes } from "../lib/constants";

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <aside className="md:w-min md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        {/* <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <Logo />
        </div> */}
        <nav
          className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
            {Object.entries(routes).map(([path, { name }]) => {
              const isActive = path === pathname;

              if (name === "Notes") {
                return (
                  <a
                    key={path}
                    href="http://notes.harshasomisetty.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle text-neutral-500"
                  >
                    <span className="relative py-[5px] px-[10px]">{name}</span>
                  </a>
                );
              } else {
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
                      {
                        "text-neutral-500": !isActive,
                        "font-bold": isActive,
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">{name}</span>
                  </Link>
                );
              }
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
