"use client";

import {
  RiYoutubeFill,
  RiTiktokFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.instagram.com/mskhanh_crown?igsh=cmZyN2dnYXV3bjlr&utm_source=qr",
    name: <RiInstagramFill />,
  },
  {
    path: "https://www.tiktok.com/@cokhanhielts8.0",
    name: <RiTiktokFill />,
  },
  {
    path: "https://www.facebook.com/ieltsgiaotiepcrown",
    name: <RiFacebookFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
