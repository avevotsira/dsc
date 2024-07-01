import { cn } from "@/lib/utils";

const CONFIG = {
  heading: {
    tag: "h1",
    tw: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  },
  subheading: {
    tag: "h2",
    tw: "scroll-m-20 text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight",
  },
  smallheading: {
    tag: "h2",
    tw: "scroll-m-20 text-lg font-semibold tracking-tight",
  },
  title: {
    tag: "h3",
    tw: "scroll-m-20 text-base font-semibold tracking-tight",
  },
  caption: {
    tag: "h4",
    tw: "scroll-m-20 text-base font-medium tracking-tight",
  },
  body: {
    tag: "p",
    tw: "leading-6 text-base",
  },
  small: {
    tag: "p",
    tw: "leading-6 text-sm",
  },
  paragraph: {
    tag: "p",
    tw: "leading-7 text-base [&:not(:first-child)]:mt-6",
  },
} as const;

type TextVariant = keyof typeof CONFIG;
type Tag = (typeof CONFIG)[TextVariant]["tag"];

type Props = {
  variant?: TextVariant;
  children?: React.ReactNode;
  className?: string;
  itemProp?: string;
  transitionName?: string;
} & React.ComponentProps<Tag>;

function getSanitizedTransitionStyle(transitionName?: string) {
  if (!transitionName) return undefined;
  const sanitizedTransitionName = transitionName.replace(
    /[^a-zA-Z0-9_-]/g,
    "-",
  );
  return { viewTransitionName: sanitizedTransitionName };
}

export default function TextElement({
  children,
  variant = "body",
  className,
  transitionName,
  ...rest
}: Props) {
  const DynamicText = CONFIG[variant].tag;
  const tw = CONFIG[variant].tw;

  return (
    <DynamicText
      {...rest}
      className={cn(tw, className)}
      style={getSanitizedTransitionStyle(transitionName)}
    >
      {children}
    </DynamicText>
  );
}
