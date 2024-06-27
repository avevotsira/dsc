import { Button, type ButtonProps } from "./ui/button";

export interface LinkProps extends ButtonProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

const ButtonLink: React.FC<LinkProps> = ({
  href,
  children,
  target,
  rel,
  ...props
}) => {
  return (
    <Button {...props} asChild>
      <a href={href} target={target} rel={rel}>
        {children}
      </a>
    </Button>
  );
};

export { ButtonLink };
