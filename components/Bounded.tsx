import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
};

export default function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx(
        "flex flex-wrap w-full text-center min-h-[930px] ",
        className
      )}
      {...restProps}
    >
      {children}
    </Comp>
  );
}
