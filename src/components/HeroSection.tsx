import Image, { StaticImageData } from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  button?: string;
  image: string | StaticImageData;
  content: string;
  left?: boolean;
}

export function HeroSection({ title, subtitle, button, content, image, left }: HeroSectionProps) {
  

  return (
    <section className={` flex flex-col-reverse space-y-6 gap-4 ${left ? 'md:flex-row' : 'md:flex-row-reverse'} justify-between items-start container mx-auto py-16`}>
      <div className="flex-1">
        <Image src={image} alt={title} objectFit="cover" />
      </div>
      <div className={`flex-1 flex flex-col items-start content-start h-full pt-4 text-[#575756] space-y-8 ${left ? 'md:pl-24': 'md:pr-24'}`}>
        <div className="flex justify-between gap-4 text-2xl">
          <p>{subtitle}</p>
          &#8213;
        </div>
        <h1 className=" text-6xl">{title}</h1>
        <p className="text-xl">{content}</p>
        {button && <button className="bg-[#e42313] text-white px-4 py-2 rounded-lg mt-4">{button}</button>}
      </div>
    </section>
  )
}