import missionAnimation from "./mission.json";
import visionAnimation from "./vision.json";
import { useLottie } from "lottie-react";

interface LottieAnimationProps {
  animationType: "mission" | "vision";
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationType }) => {
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
      className="mx-auto aspect-square w-full max-w-[320px]"
    >
      {View}
    </div>
  );
};

export default LottieAnimation;
