import { Header } from "@/components/header";
import { AppLink } from "@/components/app-link";

export default function PracticeHome() {
  const levels = 5;
  return (
    <>
      <Header title="Practice" />
      {Array.from({ length: levels }, (_, i) => (
        <AppLink key={i} href={`/practice/${i + 1}`} className="bg-sky-300">
          Level {i + 1}
        </AppLink>
      ))}
    </>
  );
}
