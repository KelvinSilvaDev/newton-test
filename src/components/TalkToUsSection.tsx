import { PhoneIcon } from "./icons/PhoneIcon"
import { TalkToUsForm } from "./TalkToUsForm"
import { WechatIcon } from "./icons/WechatIcon"
import { WahatsappIcon } from "./icons/WhatsappIcon"

export function TalkToUsSection() {

  return (
    <section className="w-full container">
      <div className="text-center container space-y-3 mx-auto text-[#575756]">
        <h1 className=" text-5xl">Fale conosco</h1>
        <p className="max-w-[346px] mx-auto">Quer conversar com a Health Clinic? Basta preencher o formulário abaixo e nós entraremos em contato assim que possível!</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <div className="flex items-center gap-2 bg-[#FBFBFB] p-6 rounded-md hover:shadow-lg cursor-pointer hover:bg-[#DDD] transition-all duration-500">
            <PhoneIcon />
            <p>Telefone</p>
          </div>
          <div className="flex items-center gap-2 bg-[#FBFBFB] p-6 rounded-md hover:shadow-lg cursor-pointer hover:bg-[#DDD] transition-all duration-500">
            <WahatsappIcon />
            <p>WhatsApp</p>
          </div>
          <div className="flex items-center gap-2 bg-[#FBFBFB] p-6 rounded-md hover:shadow-lg cursor-pointer hover:bg-[#DDD] transition-all duration-500">
            <WechatIcon />
            <p>Wechat</p>
          </div>
        </div>
      </div>
      <div className="bg-[#FBFBFB] container mx-auto rounded-lg shadow-custom mb-8">
        <TalkToUsForm />
      </div>
    </section>
  )
}