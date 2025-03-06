import React from "react";
import Image from "next/image";

export const ComgateLogosLine: React.FC = () => {
  return (
    <>
      <Image src={"/payment/comgate.svg"}
             alt={"Comgate"}
             width={147}
             height={50}
             className={"inline-block px-2"}
      />
      <Image src={"/payment/visa.svg"}
             alt={"Visa"}
             height={50}
             width={140}
             className={"inline-block px-2"}
      />
      <Image src={"/payment/mastercard.svg"}
             alt={"MasterCard"}
             height={50}
             width={80}
             className={"inline-block px-2"}
      />
      <Image src={"/payment/google-pay.svg"}
             alt={"Google Pay"}
             height={50}
             width={100}
             className={"inline-block px-2"}
      />
      <Image src={"/payment/apple-pay.svg"}
             alt={"Apple Pay"}
             height={50}
             width={100}
             className={"inline-block px-2"}
      />
    </>
  );
};
