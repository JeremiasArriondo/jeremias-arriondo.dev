export default function CategoryList({ categories }: { categories: string[] }) {
  return (
    <div className="flex space-x-2">
      {categories.map((category) => (
        <span
          key={category}
          className="text-violetPrimary dark:text-violet-400 text-sm"
        >
          #{category}
        </span>
      ))}
    </div>
  );
}
