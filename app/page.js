import Image from "next/image";
import Separator from "@/components/Separator";

export default function Home() {
  return (<>

    {/* Container */}
    <div className="bg-black max-w-200 rounded-2xl mx-auto flex flex-col text-center">

      {/* Heading */}
      <h1 className="text-3xl stack-sans-font bg-white text-black rounded-t-2xl">MY LINKTREE</h1>

      {/* Hero Section */}
      <div className="mx-10 mt-10 mb-20">
        <Image src="/profile.jpg" alt="Profile Picture" width={150} height={150} className="rounded-full mx-auto w-[150px] h-[150px]" />

        <p className="text-xl stack-sans-font mt-5">Hello! I&apos;m...</p>
        <h1 className="text-3xl sm:text-6xl notable-font font-bold">Yashwanth M</h1>
      </div>

      <Separator />

      {/* Socials */}
      <div className="my-5">
        <h1 className="text-xl stack-sans-font">SOCIALS</h1>

        <div className="bg-[rgb(10,10,10)] mx-10 mt-3 min-h-10 rounded-full flex justify-center items-center">
          <Image src="/github.jpg" alt="GitHub" width={80} height={80} />
          <h1 className="text-xl stack-sans-font">GitHub</h1>
        </div>

        <div className="bg-[rgb(10,10,10)] mx-10 mt-3 mb-10 min-h-20 rounded-full flex justify-center items-center gap-2">
          <Image src="/linkedin.jpg" alt="LinkedIn" width={65} height={65} />
          <h1 className="text-xl stack-sans-font">LinkedIn</h1>
        </div>
      </div>

      <Separator />

      {/* Projects */}
      <div className="my-5">
        <h1 className="text-xl stack-sans-font">PROJECTS</h1>

        <div className="bg-[rgb(10,10,10)] mx-10 mt-3 min-h-20 rounded-full flex justify-center items-center gap-3">
          <Image src="/shawty.jpg" alt="GitHub" width={40} height={40} className="rounded-lg" />
          <h1 className="text-xl stack-sans-font">ShawtY</h1>
        </div>

        <div className="bg-[rgb(10,10,10)] mx-10 mt-3 min-h-20 rounded-full flex justify-center items-center gap-3">
          <Image src="/yashlist.jpg" alt="GitHub" width={50} height={50} className="rounded-lg" />
          <h1 className="text-xl stack-sans-font">yashlist.</h1>
        </div>

        <div className="bg-[rgb(10,10,10)] mx-10 mt-3 mb-10 min-h-20 rounded-full flex justify-center items-center gap-3">
          <Image src="/memezilla.jpg" alt="GitHub" width={50} height={50} className="rounded-lg" />
          <h1 className="text-xl stack-sans-font">MemeZilla</h1>
        </div>
      </div>

      <Separator />

      {/* Contact */}
      <div className="my-5">
        <h1 className="text-xl stack-sans-font">CONTACT</h1>

        <div className="bg-[rgb(10,10,10)] mx-10 mt-3 min-h-20 rounded-full flex justify-center items-center gap-3">
          <Image src="/gmail.jpg" alt="GitHub" width={50} height={50} className="rounded-lg" />
          <h1 className="text-xl stack-sans-font">Gmail</h1>
        </div>
      </div>

      {/* Footer */}
      <div className="mb-10 mt-5 flex justify-center gap-1.5 stack-sans-font">
        <h1 className="text-xl">Made by</h1>
        <h1 className="text-xl font-bold">YASHWANTH M</h1>
      </div>

    </div>
  </>);
}
