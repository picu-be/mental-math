import { Header } from "@/components/header";
import { AppLink } from "@/components/app-link";

export default function MultiplyHome() {
  return (
    <>
      <Header title="Multiplication" />
      <AppLink href="/multiply/novice" className="bg-amber-100">
        Novice
      </AppLink>
      <AppLink href="/multiply/advanced-beginner" className="bg-amber-200">
        Advanced Beginner
      </AppLink>
      <AppLink href="/multiply/competent" className="bg-amber-300">
        Competent
      </AppLink>
      <AppLink href="/multiply/proficient" className="bg-amber-400">
        Proficient
      </AppLink>
      <AppLink href="/multiply/expert" className="bg-amber-500">
        Expert
      </AppLink>
    </>
  );
}
