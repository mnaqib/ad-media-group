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
    <div className="mt-16 flex flex-col items-center gap-6">
      <h4 className={`${lexendFont.className} text-lg font-medium text-white`}>
        SERVICES
      </h4>
      <div className="flex flex-col gap-4">
        {cardList.map((props) => (
          <Card key={"#" + props.name} {...props} />
        ))}
      </div>
    </div>
  );
}

function Card({ name, logo }: ICardProps) {
  return (
    <div className="flex bg-ad-white px-2 py-4 rounded-3xl font-medium text-ad-text-primary gap-4 items-center">
      <Image
        src={logo}
        alt={name}
        className="h-28 w-40 rounded-2xl object-cover"
      />
      <div className="flex flex-col gap-2 px-6 items-center">
        <h4 className="text-base">{name}</h4>
        <Button
          name="Know more"
          className="py-2 px-4 gap-2"
          logo={<Image src={whatsapp} alt="whatsapp-icon" />}
        />
      </div>
    </div>
  );
}
