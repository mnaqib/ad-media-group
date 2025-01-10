interface IBtnProps {
  name: string;
  className: string;
  logo?: React.ReactNode;
}

export default function Button({ name, className, logo }: IBtnProps) {
  return (
    <button
      className={"flex items-center justify-center bg-gold text-ad-text-primary rounded-3xl font-medium text-sm ".concat(
        className
      )}
    >
      {logo ? logo : null}
      {name}
    </button>
  );
}
