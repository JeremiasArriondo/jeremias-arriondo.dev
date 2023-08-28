import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-168px)] background-gradient mx-auto p-8 md:p-36 text-center">
      <h2 className="mb-4 text-3xl font-bold">Página no encontrada 🦄</h2>
      <Link href="/">
        <span className="mr-2">&larr;</span>
        <span>Volver al inicio</span>
      </Link>
    </div>
  );
}
