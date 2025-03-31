import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  id?: string;
};

export default function Bounded({
  as: Comp = "section",
  id,
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx("flex flex-wrap w-full text-center", className, id)}
      {...restProps}
    >
      {children}
    </Comp>
  );
}
