import Link from "next/link";

interface AppLinkProps {
  className?: string;
  href: string;
  children: React.ReactNode;
}

const AppLink = ({ className, href, children }: AppLinkProps) => {
  if (!className) className = "bg-red-300";
  return (
    <Link href={href}>
      <button className={`px-8 py-2 my-2 w-64 text-black ${className}`}>
        {children}
      </button>
    </Link>
  );
};

export { AppLink };
