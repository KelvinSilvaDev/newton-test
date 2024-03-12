import { NavMenu } from "./Header";
import { FacebookIcon } from "./FacebookIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { InstagramIcon } from "./icons/InstagramIcon";

export function Footer() {
  return (
    <footer className="bg-[#575756] text-white p-4">
      <div className="container space-y-5">
        <div className="md:grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 flex md:justify-end">
            <NavMenu white />
          </div>
          <div className="md:col-span-1 flex md:justify-end gap-3">
            <LinkedinIcon />
            <FacebookIcon />
            <InstagramIcon />
          </div>
        </div>
        <hr />
        <p className="text-center">Health Clinic São Paulo -Todos os Direitos Reservados.</p>
      </div>
    </footer>
  )
}