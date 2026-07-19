import buttonStyles from "../../utils/buttonStyles";

function ButtonPrimary({ children, className = "" }) {
  return (
    <button
      className={`${buttonStyles()} flex h-[60px] gap-2 items-center px-8 py-4 bg-gradient rounded-[9px] text-white font-medium text-18 border border-dark-card-border/38 ${className}`}
    >
      {children}
    </button>
  );
}

function ButtonSecondary({ children, className = "" }) {
  return (
    <button
      className={`${buttonStyles()} px-8 py-4 bg-onyx rounded-[9px] text-18 text-dark-gray font-medium ${className}`}
    >
      {children}
    </button>
  );
}

export { ButtonPrimary, ButtonSecondary };