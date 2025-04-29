import { ThemeToggle } from "./theme-toggle";

export const Footer = () => {
  return (
    <footer className="h-16">
      <div className="relative container flex flex-col items-end">
        <span className="text-subtle absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 text-sm">
          © 2025. Sangho Shin
        </span>
        <ThemeToggle />
      </div>
    </footer>
  );
};
