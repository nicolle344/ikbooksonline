import BookCard from './BookCard';

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  price: number;
  image: string;
}

interface CategoriesProps {
  books: Book[];
  onAddToCart: (book: Book) => void;
}

const Categories = ({ books, onAddToCart }: CategoriesProps) => {
  const categoryBooks = books.slice(4, 8);

  return (
    <section id="categories" className="py-20 relative">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Categorías Populares
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoryBooks.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              description={book.description}
              price={book.price}
              image={book.image}
              onAddToCart={() => onAddToCart(book)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
