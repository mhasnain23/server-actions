"use client";
import Link from "next/link";
import Hero from "./Hero-page/page";


export default function Home() {
  return (
    <>
      <div>
        <div className="min-h-full flex justify-center mt-[20rem]">
          <Hero />
        </div>
        <div class="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
      </div>
    </>
  );
}
