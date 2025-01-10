import Image from "next/image";
import logo from "../../public/logo.svg";
import Button from "./button";

export default function Header() {
  return (
    <div className="px-8 py-4 flex justify-between items-center">
      <Image src={logo} alt="ad-media-logo" />
      <a
        href="https://chat.whatsapp.com/HEQgyili7KaJmhNRCP3PFA"
        target="_blank"
      >
        <Button name="Contact Us" className="w-28 h-10 py-2 px-4" />
      </a>
    </div>
  );
}
