import { Header } from "@/components/header";
import { AppLink } from "@/components/app-link";

export default function Home() {
  return (
    <>
      <Header title="Mental Math" />
      <AppLink href="/add" className="bg-red-300">
        Addition
      </AppLink>
      <AppLink href="/subtract" className="bg-orange-300">
        Subtraction
      </AppLink>
      <AppLink href="/multiply" className="bg-amber-300">
        Multiplication
      </AppLink>
      <AppLink href="/divide" className="bg-lime-300">
        Division
      </AppLink>
      <AppLink href="/practice" className="bg-sky-300">
        Pratice
      </AppLink>
    </>
  );
}
