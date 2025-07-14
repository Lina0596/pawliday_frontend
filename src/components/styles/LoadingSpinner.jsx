import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/dogLoadingSpinner.json";
import H6 from "./H6";

export default function LoadingSpinner() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen -my-20">
      <div>
        <Lottie options={defaultOptions} height={160} width={160} />
      </div>
      <H6>Loading...</H6>
    </div>
  );
}
