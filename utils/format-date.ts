const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("es-ES", options);
}
