import { ThemeToggle } from "./theme-toggle";

export const Footer = () => {
  return (
    <footer className="h-16">
      <div className="container flex flex-col items-end">
        <ThemeToggle />
      </div>
    </footer>
  );
};
