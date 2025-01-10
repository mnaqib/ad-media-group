import Image from "next/image";

// images
import whatsapp from "../../public/whatsapp-icon-footer.svg";
import instagram from "../../public/instagram-icon.svg";
import youtube from "../../public/youtube-icon.svg";

export default function Footer() {
  return (
    <div className="w-full bg-gold mt-10 px-8 py-6 flex justify-between items-center text-ad-text-primary text-sm lg:text-base font-medium">
      <div className="flex flex-col gap-2">
        <p>Contact us:</p>
        <p>+91 9902367335</p>
        <a href="mailto:officialadgroup@gmail.com">officialadgroup@gmail.com</a>
      </div>
      <div className="hidden lg:flex flex-col gap-4 items-center">
        <p>Follow us on:</p>
        <div className="flex justify-between items-center gap-6">
          <a
            href="https://chat.whatsapp.com/HEQgyili7KaJmhNRCP3PFA"
            target="_blank"
          >
            <Image src={whatsapp} alt="whatsapp-icon" />
          </a>
          <a
            href="https://www.instagram.com/adgroup._/profilecard/?igsh=NTN4cXJnMTVhcXc0"
            target="_blank"
          >
            <Image src={instagram} alt="instagram-icon" />
          </a>
          <a href="https://www.youtube.com/@ADMedia-Mangalore" target="_blank">
            <Image src={youtube} alt="youtube-icon" />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 lg:hidden">
          <p>Follow us on:</p>
          <div className="flex justify-between items-center">
            <a
              href="https://chat.whatsapp.com/HEQgyili7KaJmhNRCP3PFA"
              target="_blank"
            >
              <Image src={whatsapp} alt="whatsapp-icon" />
            </a>
            <a
              href="https://www.instagram.com/adgroup._/profilecard/?igsh=NTN4cXJnMTVhcXc0"
              target="_blank"
            >
              <Image src={instagram} alt="instagram-icon" />
            </a>
            <a
              href="https://www.youtube.com/@ADMedia-Mangalore"
              target="_blank"
            >
              <Image src={youtube} alt="youtube-icon" />
            </a>
          </div>
        </div>
        <p>Copyrights @ AD group</p>
      </div>
    </div>
  );
}
