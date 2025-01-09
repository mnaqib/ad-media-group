interface IBtnProps {
  name: string;
  className: string;
}

export default function Button({ name, className }: IBtnProps) {
  return (
    <button
      className={"flex items-center justify-center bg-gold text-ad-text-primary rounded-3xl font-medium text-sm ".concat(
        className
      )}
    >
      {name}
    </button>
  );
}
