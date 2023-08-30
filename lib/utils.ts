export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("es-AR", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
