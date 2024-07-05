import missionAnimation from "./mission.json";
import visionAnimation from "./vision.json";
import { useLottie } from "lottie-react";

interface LottieAnimationProps {
  animationType: "mission" | "vision";
  width?: string;
  height?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationType,
  width = "100%",
  height = "auto",
}) => {
  const animationData =
    animationType === "mission" ? missionAnimation : visionAnimation;

  const options = {
    animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div
      aria-hidden="true"
      style={{ width, height, maxWidth: "320px", margin: "0 auto" }}
    >
      {View}
    </div>
  );
};

export default LottieAnimation;
