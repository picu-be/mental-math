import { Header } from "@/components/header";
import { AppLink } from "@/components/app-link";

export default function SubtractionHome() {
  return (
    <>
      <Header title="Subtraction" />
      <AppLink href="/subtract/novice" className="bg-orange-100">
        Novice
      </AppLink>
      <AppLink href="/subtract/advanced-beginner" className="bg-orange-200">
        Advanced Beginner
      </AppLink>
      <AppLink href="/subtract/competent" className="bg-orange-300">
        Competent
      </AppLink>
      <AppLink href="/subtract/proficient" className="bg-orange-400">
        Proficient
      </AppLink>
      <AppLink href="/subtract/expert" className="bg-orange-500">
        Expert
      </AppLink>
    </>
  );
}
