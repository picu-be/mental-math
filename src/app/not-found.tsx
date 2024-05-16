import Link from "next/link";

export default function NotFound() {
  return (
    <div className="my-32 flex flex-col">
      <div className="mb-8">
        <h2 className="text-white text-center">404 | Page Not Found</h2>
      </div>
      <div className="mb-8 text-center">
        <Link href="/" className="text-white underline">
          Click Here To Go Home
        </Link>
      </div>
    </div>
  );
}
