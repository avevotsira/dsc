import LottieAnimation from "../../lottie/LottieAnimation";
import TextElement from "../../TextElement";

const Mission: React.FC = () => (
  <div className="flex flex-col gap-8 md:flex-row-reverse">
    <div className="w-full md:w-2/5">
      <div className="h-[320px] md:h-auto">
        <LottieAnimation animationType="mission" />
      </div>
    </div>
    <div className="w-full md:w-3/5">
      <TextElement variant="subheading" id="mission" className="pt-4">
        Mission
      </TextElement>
      <TextElement variant="body" className="text-pretty pt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </TextElement>
    </div>
  </div>
);

export default Mission;
