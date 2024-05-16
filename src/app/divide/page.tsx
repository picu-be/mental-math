import { Header } from "@/components/header";
import { AppLink } from "@/components/app-link";

export default function DivideHome() {
  return (
    <>
      <Header title="Division" />
      <AppLink href="/divide/novice" className="bg-lime-100">
        Novice
      </AppLink>
      <AppLink href="/divide/advanced-beginner" className="bg-lime-200">
        Advanced Beginner
      </AppLink>
      <AppLink href="/divide/competent" className="bg-lime-300">
        Competent
      </AppLink>
      <AppLink href="/divide/proficient" className="bg-lime-400">
        Proficient
      </AppLink>
      <AppLink href="/divide/expert" className="bg-lime-500">
        Expert
      </AppLink>
    </>
  );
}
