"use client";
import Container from "../Container";
import React from "react";
import {FaSkiing} from "react-icons/fa"
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {BsSnow} from "react-icons/bs"
import {IoDiamond} from "react-icons/io5"
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
export const categories = [
  {
    lable: "Beach",
    icon: TbBeach,
    decription: "This is the description of the Beach"
  },
  {
    lable: "Windmills",
    icon: GiWindmill,
    decription: "This is the description of the Windmills"
  },
  {
    lable: "Modern",
    icon: MdOutlineVilla,
    decription: "This is the description of the Modern"
  },
  {
    lable: "Contryside",
    icon: TbMountain,
    decription: "This is the description of the Contryside"
  },
  {
    lable: "Pools",
    icon: TbPool,
    decription: "This is the description of the Pools"
  },
  {
    lable: "Ilands",
    icon: GiIsland,
    decription: "This is the description of the Ilands"
  },
  {
    lable: "Lake",
    icon: GiBoatFishing,
    decription: "This is the description of the Lake"
  },
  {
    lable: "Skiing",
    icon: FaSkiing,
    decription: "This is the description of the Lake"
  },
  {
    lable: "Castles",
    icon: GiCastle,
    decription: "This is the description of the Castles"
  },
  {
    lable: "Camping",
    icon: GiForestCamp,
    decription: "This is the description of the Camping"
  },
  {
    lable: "Arctic",
    icon: BsSnow,
    decription: "This is the description of the Arctic"
  },
  {
    lable: "Cave",
    icon: GiCaveEntrance,
    decription: "This is the description of the Cave"
  },
  {
    lable: "Desert",
    icon: GiCactus,
    decription: "This is the description of the Desert"
  },
  {
    lable: "Barn",
    icon: GiBarn,
    decription: "This is the description of the Barn"
  },
  {
    lable: "Lux",
    icon: IoDiamond,
    decription: "This is the description of the Lux"
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("hay");
  const pathname = usePathname();

  const isMainPage = pathname === "/";
  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item, index) => (
          <CategoryBox
            key={index}
            label={item.lable}
            selected={category === item.lable}
            icon={item.icon}
          ></CategoryBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
