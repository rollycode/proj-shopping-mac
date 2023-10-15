import React from "react";
import smpic1 from "./smpic1.png";
import smpic2 from "./smpic2.png";

const ProcuctCartImages = () => {
  return (
    <div>
      {" "}
      <img src={smpic1} alt="productpic1" loading="lazy" width="37px" />
      <img src={smpic2} alt="productpic2" loading="lazy" width="42px" />
    </div>
  );
};

export default ProcuctCartImages;
