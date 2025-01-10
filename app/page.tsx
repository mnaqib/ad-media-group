import Image from "next/image";
import saveMoney from "../public/amico.svg";
import Button from "./_components/button";
import Services from "./_components/services";
import { lexendFont } from "./_constants";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-[6.5rem]">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-[4.5rem]">
        <div className="max-w-96 flex flex-col gap-6 font-medium text-center md:text-left">
          <h4
            className={`bg-clip-text text-transparent text-lg ${lexendFont.className}`}
            style={{
              backgroundImage:
                "linear-gradient(95deg, #fff -21%, #fdbe2c 129%)",
            }}
          >
            LOOKING FOR SMART SAVINGS & EXCITING REWARDS?
          </h4>
          <p className="text-ad-white text-sm">
            You are at the right place! At AD group, we are about helping you
            achieve your goals with plans that fit your lifestyle. Whether it is
            for you or your family, we have got something special to offer.
            Let’s work together to make your future brighter.
          </p>
          <Button
            name="Join our whatsapp group"
            className="w-56 h-10 py-4 px-6 self-center"
          />
        </div>
        <Image src={saveMoney} alt="save-money" className="w-72" />
      </div>
      <Services />
    </div>
  );
}
