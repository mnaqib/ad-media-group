import Image from "next/image";
import { lexendFont } from "../_constants";
import Button from "./button";

// images
import prod1 from "../../public/product_image01.svg";
import prod2 from "../../public/product_image02.svg";
import prod3 from "../../public/product_image03.svg";
import prod4 from "../../public/product_image04.svg";
import party from "../../public/party-popper.svg";

interface ICardProps {
  name: string;
  logo: string;
}

const cardList: ICardProps[] = [
  {
    name: "product 1",
    logo: prod1,
  },
  {
    name: "product 2",
    logo: prod2,
  },
  {
    name: "product 3",
    logo: prod3,
  },
  {
    name: "product 4",
    logo: prod4,
  },
];

export default function Products() {
  return (
    <div className="mt-16 flex flex-col items-center gap-6 lg:gap-10">
      <h4
        className={`${lexendFont.className} text-lg lg:text-[2.5rem] lg:leading-[3.75rem] font-medium text-white`}
      >
        PRODUCTS
      </h4>
      <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div className="absolute z-40 inset-0 w-full h-full flex justify-center items-center bg-ad-text-primary bg-opacity-10">
          <div
            className="flex flex-col items-center text-black p-6 lg:p-8 rounded-3xl gap-4"
            style={{
              backgroundImage:
                "linear-gradient(125deg, rgba(253, 190, 44, 0.6) 1%, #97711a 98%)",
            }}
          >
            <Image src={party} alt="party-popper" />
            <p className="text-3xl lg:text-[4rem] font-medium">
              Coming soon!!!
            </p>
          </div>
        </div>
        {cardList.map((props) => (
          <Card key={"#" + props.name} {...props} />
        ))}
      </div>
    </div>
  );
}

function Card({ name, logo }: ICardProps) {
  return (
    <div className="flex flex-col bg-ad-white p-2 rounded-3xl font-medium text-ad-text-primary gap-4 items-center blur-[8px]">
      <Image
        src={logo}
        alt={name}
        className="h-40 lg:h-52 w-40 lg:w-56 rounded-2xl object-cover"
      />
      <div className="flex flex-col gap-2 px-6 items-center">
        <h4 className="text-base">{name}</h4>
        <Button name="Buy now" className="py-2 px-4 gap-2" />
      </div>
    </div>
  );
}
