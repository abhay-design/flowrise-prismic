import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Header() {
  const client = createClient();

  const settings = await client.getSingle("settings");
  return (
    <header className="w-full bg-[rgb(30,45,59)] h-[100px]">
      <div className="wrapper w-full relative flex flex-wrap justify-between items-center">
        {settings.data.logo && (
          <div className="logo-wrap relative max-w-[331px] h-[100px]">
            <Link href="/" className="emptylink">
              .
            </Link>
            <PrismicNextImage
              field={settings.data.logo}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}

        <nav>
          <ul className="flex flex-wrap">
            {settings.data.navigation.map(({ link, label }) => (
              <li key={label} className="mr-[60px!important]">
                <PrismicNextLink
                  field={link}
                  className="text-white text-[14px] hover:text-[#EDCD1F] transition duration-300 ease-in-out"
                >
                  {label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
