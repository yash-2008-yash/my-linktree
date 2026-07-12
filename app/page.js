import Image from "next/image";
import Link from "next/link";
import Separator from "@/components/Separator";
import LinkCell from "@/components/LinkCell";

export default function Home() {
  return (<>

    {/* Container */}
    <div className="bg-black max-w-200 rounded-2xl mx-auto flex flex-col text-center">

      {/* Heading */}
      <h1 className="text-3xl stack-sans-font bg-white text-black rounded-t-2xl">MY LINKTREE</h1>

      {/* Hero Section */}
      <div className="mx-10 mt-10 mb-20">
        <Image src="/profile.jpg" alt="Profile Picture" width={150} height={150} className="rounded-full mx-auto w-[150px] h-[150px] golden-glow" />

        <p className="text-xl stack-sans-font mt-10">Hello! I&apos;m...</p>
        <h2 className="text-3xl sm:text-6xl notable-font font-bold">Yashwanth M</h2>
      </div>

      <Separator />

      {/* Socials */}
      <div className="my-5">
        <h3 className="text-xl stack-sans-font">SOCIALS</h3>

        <LinkCell href={"https://github.com/yash-2008-yash"} src={"/github.jpg"} alt={"GitHub"} title={"GitHub"} scale={1.5} />
        <LinkCell href={"https://www.linkedin.com/in/yashwanth-m-yash/"} src={"/linkedin.jpg"} alt={"LinkedIn"} title={"LinkedIn"} scale={1} />
      </div>

      <div className="mt-10"></div>
      <Separator />

      {/* Projects */}
      <div className="my-5">
        <h3 className="text-xl stack-sans-font">PROJECTS</h3>

        <LinkCell href={"https://shawty-short-url.vercel.app/"} src={"/shawty.jpg"} alt={"ShawtY"} title={"ShawtY"} scale={1} />
        <LinkCell href={"https://yashlist.vercel.app/"} src={"/yashlist.jpg"} alt={"yashlist."} title={"yashlist."} scale={1} />
        <LinkCell href={"https://memezilla-by-yashwanth-m.vercel.app/"} src={"/memezilla.jpg"} alt={"MemeZilla"} title={"MemeZilla"} scale={1} />
      </div>

      <div className="mt-10"></div>
      <Separator />

      {/* Contact */}
      <div className="my-5">
        <h3 className="text-xl stack-sans-font">CONTACT</h3>

        <LinkCell href={"https://mail.google.com/mail/?view=cm&fs=1&to=yashwanthm897@gmail.com"} src={"/gmail.jpg"} alt={"Gmail"} title={"Gmail"} scale={1} />
      </div>

      {/* Footer */}
      <div className="mb-10 mt-5 flex justify-center gap-1.5 stack-sans-font">
        <p className="text-xl">Made by</p>
        <p className="text-xl font-bold">YASHWANTH M</p>
      </div>

    </div >
  </>);
}
