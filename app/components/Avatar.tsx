"use client";
import Image from "next/image";
import React from "react";
interface avatarProps {
  src: string | null | undefined;
}
const Avatar = ({ src }: avatarProps) => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      alt="avatar"
      src={src || "/sumenh.png"}
    ></Image>
  );
};

export default Avatar;
