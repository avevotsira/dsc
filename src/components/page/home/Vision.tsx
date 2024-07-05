import LottieAnimation from "../../lottie/LottieAnimation";
import TextElement from "../../TextElement";

const Vision: React.FC = () => (
  <div className="flex flex-col gap-8 md:flex-row">
    <div className="w-full md:w-2/5 md:justify-center">
      <LottieAnimation animationType="vision" />
    </div>
    <div className="w-full md:w-3/5">
      <TextElement variant="subheading" id="vision" className="pt-4">
        Vision
      </TextElement>
      <TextElement variant="body" className="text-pretty pt-4">
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
      </TextElement>
    </div>
  </div>
);

export default Vision;
