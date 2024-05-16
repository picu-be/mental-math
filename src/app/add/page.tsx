import { Header } from "@/components/header";
import { AppLink } from "@/components/app-link";

export default function AdditionHome() {
  return (
    <>
      <Header title="Addition" />
      <AppLink href="/add/novice" className="bg-red-100">
        Novice
      </AppLink>
      <AppLink href="/add/advanced-beginner" className="bg-red-200">
        Advanced Beginner
      </AppLink>
      <AppLink href="/add/competent" className="bg-red-300">
        Competent
      </AppLink>
      <AppLink href="/add/proficient" className="bg-red-400">
        Proficient
      </AppLink>
      <AppLink href="/add/expert" className="bg-red-500">
        Expert
      </AppLink>
    </>
  );
}
