import React from "react";

export default function WrapperContent({children})  {

    return (
      <div className="container py-5 mt-lg-5">
        {children}
      </div>
    );
};
