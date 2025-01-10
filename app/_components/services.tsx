import Image from "next/image";
import Button from "./button";

// images
import vehicle from "../../public/vehicle_scheme.svg";
import gold from "../../public/gold_scheme.svg";
import home from "../../public/house_scheme.svg";
import whatsapp from "../../public/whatsapp-icon.svg";
import { lexendFont } from "../_constants";

interface ICardProps {
  name: string;
  logo: string;
}

const cardList: ICardProps[] = [
  {
    name: "Vehicle Schemes",
    logo: vehicle,
  },
  {
    name: "Gold Schemes",
    logo: gold,
  },
  {
    name: "Home Schemes",
    logo: home,
  },
];

export default function Services() {
  return (
    <div className="mt-16 flex flex-col items-center gap-6 lg:gap-10">
      <h4
        className={`${lexendFont.className} text-lg lg:text-[2.5rem] lg:leading-[3.75rem] font-medium text-white`}
      >
        SERVICES
      </h4>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        {cardList.map((props) => (
          <Card key={"#" + props.name} {...props} />
        ))}
      </div>
    </div>
  );
}

function Card({ name, logo }: ICardProps) {
  return (
    <div className="flex flex-row lg:flex-col bg-ad-white px-2 py-4 rounded-3xl font-medium text-ad-text-primary gap-4 items-center">
      <Image
        src={logo}
        alt={name}
        className="h-28 lg:h-60 w-40 lg:w-80 rounded-2xl object-cover"
      />
      <div className="flex flex-col gap-2 px-6 items-center">
        <h4 className="text-base">{name}</h4>
        <a
          href="https://chat.whatsapp.com/HEQgyili7KaJmhNRCP3PFA"
          target="_blank"
        >
          <Button
            name="Know more"
            className="py-2 px-4 gap-2"
            logo={<Image src={whatsapp} alt="whatsapp-icon" />}
          />
        </a>
      </div>
    </div>
  );
}
