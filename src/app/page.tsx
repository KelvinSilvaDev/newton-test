'use client'
import { HeroSection } from "@/components/HeroSection";
import { TalkToUsSection } from "@/components/TalkToUsSection";
import Img1 from "../../public/assets/img1.png"
import Img2 from "../../public/assets/img2.png"
import Img3 from "../../public/assets/img3.png"

export default function Home() {
  return (
    <div>
      <section className='flex items-center justify-center bg-bg-cover bg-center bg-cover bg-no-repeat h-full bg-blend-overlay bg-black bg-opacity-45 py-80' />
      <HeroSection image={Img1} title='Lorem ipsum dolor sit amet.' subtitle='Quem Somos' left button="Saiba Mais" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus ante nec nisl volutpat aliquam. Fusce at dui pulvinar, efficitur diam ac, fringilla libero. Aenean gravida posuere ligula in pretium. Donec id eros non nisi vulputate dapibus. Donec eu malesuada dolor. Aliquam risus urna, finibus in vehicula ut, sollicitudin at elit." />
      <HeroSection image={Img2} title='Lorem ipsum dolor sit amet.' subtitle='Nossa Equipe' content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus ante nec nisl volutpat aliquam. Fusce at dui pulvinar, efficitur diam ac, fringilla libero. Aenean gravida posuere ligula in pretium. Donec id eros non nisi vulputate dapibus. Donec eu malesuada dolor. Aliquam risus urna, finibus in vehicula ut, sollicitudin at elit." />
      <div className='bg-hero bg-no-repeat bg-left-bottom bg-contain'>
        <HeroSection image={Img3} title='Lorem ipsum dolor sit amet.' subtitle='Nosso Espaço' content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus ante nec nisl volutpat aliquam. Fusce at dui pulvinar, efficitur diam ac, fringilla libero. Aenean gravida posuere ligula in pretium. Donec id eros non nisi vulputate dapibus. Donec eu malesuada dolor. Aliquam risus urna, finibus in vehicula ut, sollicitudin at elit." />
      </div>
      <TalkToUsSection />
    </div>
  );
}
