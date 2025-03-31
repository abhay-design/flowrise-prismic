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
      id={id}
      className={clsx("flex flex-wrap w-full text-center", className)}
      {...restProps}
    >
      {children}
    </Comp>
  );
}
