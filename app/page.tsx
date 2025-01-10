import Image from "next/image";
import Button from "./_components/button";
import Services from "./_components/services";
import { lexendFont } from "./_constants";

// images
import saveMoney from "../public/amico.svg";
import adHelp from "../public/what-we-do.svg";
import Footer from "./_components/footer";
import Products from "./_components/products";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-[6.5rem]">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-[4.5rem]">
        <div className="max-w-96 lg:max-w-[37rem] flex flex-col gap-6 font-medium text-center md:text-left">
          <h4
            className={`bg-clip-text text-transparent text-lg lg:text-[2.5rem] lg:leading-[3.75rem] ${lexendFont.className}`}
            style={{
              backgroundImage:
                "linear-gradient(95deg, #fff -21%, #fdbe2c 129%)",
            }}
          >
            LOOKING FOR SMART SAVINGS & EXCITING REWARDS?
          </h4>
          <p className="text-ad-white text-sm lg:text-xl lg:leading-9">
            You are at the right place! At AD group, we are about helping you
            achieve your goals with plans that fit your lifestyle. Whether it is
            for you or your family, we have got something special to offer.
            Let’s work together to make your future brighter.
          </p>
          <a
            href="https://chat.whatsapp.com/HEQgyili7KaJmhNRCP3PFA"
            target="_blank"
            className="self-center lg:self-start"
          >
            <Button
              name="Join our whatsapp group"
              className="w-56 lg:w-64 h-10 py-4 px-6 lg:text-lg"
            />
          </a>
        </div>
        <Image src={saveMoney} alt="save-money" className="w-72 lg:w-96" />
      </div>
      <Services />
      <Products />
      <div className="mt-16 flex flex-col items-center gap-6 lg:gap-10">
        <h4
          className={`${lexendFont.className} text-lg lg:text-[2.5rem] lg:leading-[3.75rem] font-medium text-white`}
        >
          WHAT WE DO ?
        </h4>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-20 px-8">
          <p className="text-center lg:text-left text-sm lg:text-base lg:leading-8 text-white font-light lg:max-w-[35rem]">
            AD group established in 2023, is a customer focused organisation
            designed to support various schemes & savings. We serve across
            Dakshina Kannada and Udupi districts and cater to the needs of both
            youth and families.
            <br /> We strive to provide top notch services and are dedicated to
            building long term relationships with our cutomers. Our team is
            always ready to assist you in navigating the savings plan process.
          </p>
          <Image
            src={adHelp}
            alt="what-we-do"
            className="w-64 lg:w-96 rounded-2xl"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
