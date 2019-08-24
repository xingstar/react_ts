import * as React from "react";

const Footer = ({ remaining, total }: {remaining: number,total:number}) => {
  return (
    <p>
      {remaining} / {total} left
    </p>
  );
};

export default Footer;
