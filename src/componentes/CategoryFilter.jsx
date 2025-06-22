import { useT } from '../hooks/useT';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  const t = useT();
  return (
    <section className="mb-8">
      <nav aria-label="Filtros de categorías">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-6 py-2 rounded-full transition-colors font-medium ${
                selectedCategory === category.id
                  ? "bg-blue-600 dark:bg-blue-700 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
              aria-pressed={selectedCategory === category.id}
            >
              {t(category.name)} ({category.count})
            </button>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default CategoryFilter; 