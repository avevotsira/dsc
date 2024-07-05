import animationData from "./lottie-media.json";
import { useLottie } from "lottie-react";

const LottieAnimation = ({ width = "320px", height = "320px" }) => {
  const options = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return <div style={{ width, height }}>{View}</div>;
};

export default LottieAnimation;
