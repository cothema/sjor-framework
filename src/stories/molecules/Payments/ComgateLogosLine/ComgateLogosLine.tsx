import React from "react";
import Image from "next/image";

export const ComgateLogosLine: React.FC = () => {
  return (
    <>
      <Image src={require("../../../../assets/payments/comgate.svg").default}
             alt={"Comgate"}
             width={147}
             height={50}
             className={"inline-block px-2"}
      />
      <Image src={require("../../../../assets/payments/visa.svg").default}
             alt={"Visa"}
             height={50}
             width={140}
             className={"inline-block px-2"}
      />
      <Image src={require("../../../../assets/payments/master-card.svg").default}
             alt={"MasterCard"}
             height={50}
             width={80}
             className={"inline-block px-2"}
      />
      <Image src={require("../../../../assets/payments/google-pay.svg").default}
             alt={"Google Pay"}
             height={50}
             width={100}
             className={"inline-block px-2"}
      />
      <Image src={require("../../../../assets/payments/apple-pay.svg").default}
             alt={"Apple Pay"}
             height={50}
             width={100}
             className={"inline-block px-2"}
      />
    </>
  );
};
