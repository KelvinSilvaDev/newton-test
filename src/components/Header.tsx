'use client'
import Link from "next/link"
import { Search, AlignJustify, Plus } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <header className="bg-white p-4 fixed w-full h-14">
      <div className="container w-full justify-end mx-auto gap-4 hidden md:flex">
        <NavMenu />
        <Search color="#E42313" />
      </div>
      {isMenuOpen ? <Plus color="#E42313" className="absolute right-4 top-4 rotate-45 block md:hidden float-right z-50" onClick={toggleMenu} /> : <AlignJustify color="#E42313" className="block md:hidden float-right z-50" onClick={toggleMenu} />}
      {isMenuOpen && <MobileMenu />}
    </header>
  )
}

export const NavMenu = ({ white}: { white?: boolean }) => {
  return (
    <nav className={`flex flex-col md:flex-row justify-start items-start gap-8 md:gap-4 md:text-base md:font-normal ${white ? 'text-white grid grid-cols-2 py-4 md:flex md:py-0' : 'pl-6 md:text-[#575756] text-4xl h-full font-bold'} z-40`}>
      <Link href="/" className="transition-all duration-500">Quem Somos</Link>
      <Link href="/">Especialidades</Link>
      <Link href="/">Blog</Link>
      <Link href="/">Contato</Link>
    </nav>
  )
}

const MobileMenu = () => {
  return (
    <div className="fixed top-0 left-0 w-full pb-8 bg-white pt-12 transition-all duration-300">
      <NavMenu />
    </div>
  )
}