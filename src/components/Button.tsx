interface IButton {
  onClick: () => void;
  size: "sm" | "md";
  type: "primary" | "secondary";
  text?: string;
  icon?: JSX.Element;
  className?: string;
}

export const Button: React.FC<IButton> = ({
  onClick,
  size,
  type,
  icon,
  text,
  className,
}) => {
  const buttonSize = {
    sm: "h-[22px] w-[86px]",
    md: "h-[46px] w-[205px]",
  };

  const buttonType = {
    primary: "bg-primary-300  text-primary_text",
    secondary: "bg-white text-primary-300",
  };

  return (
    <button
      className={`${className || ""} ${buttonSize[size]} ${
        buttonType[type]
      } font-sm flex  justify-center gap-2 self-center rounded-md align-middle `}
      onClick={onClick}
    >
      <p className="self-center text-[10px] font-bold">{text}</p>
      {icon}
    </button>
  );
};
