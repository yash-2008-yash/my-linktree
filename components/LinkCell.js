import Link from "next/link";
import Image from "next/image";

export default function LinkCell({ href, src, alt, title, scale = 1 }) {

  return (
    <Link href={href} target="_blank">
      <div className="bg-[rgb(10,10,10)] mx-10 mt-3 min-h-20 rounded-full flex justify-center items-center gap-3 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] transition-all duration-200 cursor-pointer">        <div className="relative w-12 h-12 flex items-center justify-center">
        <Image src={src} alt={alt} fill style={{ transform: `scale(${scale})` }} className="object-contain rounded-lg" />
      </div>

        <h3 className="text-xl stack-sans-font">{title}</h3>
      </div>
    </Link>
  );
}