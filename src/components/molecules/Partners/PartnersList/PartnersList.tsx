import React, {FC} from "react";
import Image from "next/image";
import Link from "next/link";

export type Partner = {
  title: string;
  href: string;
  imageSrc: string;
};

type PartnersProps = {
  partners: Partner[];
};

export const PartnersList: FC<PartnersProps> = ({partners}) => {
  if (!partners || partners.length === 0) {
    return null;
  }

  return (
    <>
      <span className="font-bold tracking-wide text-gray-700">
        Partneři projektu:
      </span>
      <div className="flex flex-col items-center mt-2">
        {partners.map((partner, index) => (
          <Link
            key={index}
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={partner.imageSrc}
              alt={partner.title}
              title={partner.title}
              height={42}
              width={140}
              className="mt-2 mb-3 mx-auto"
            />
          </Link>
        ))}
      </div>
    </>
  );
};
