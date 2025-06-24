import { Button } from '@/components/ui/button';

interface BookCardProps {
  title: string;
  author: string;
  description: string;
  price: number;
  image: string;
  onAddToCart: () => void;
}

const BookCard = ({ title, author, description, price, image, onAddToCart }: BookCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl glass-effect hover:scale-105 transition-all duration-300">
      <div className="aspect-[3/4] overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
          style={{ 
            backgroundImage: `linear-gradient(135deg, #1a0b2e 0%, #16213e 50%, #0f3460 100%)`,
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="w-full h-full flex items-center justify-center text-white p-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-sm opacity-75">{author}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-90 mb-3">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">${price}</span>
            <Button 
              onClick={onAddToCart}
              className="gradient-purple hover:opacity-90 transition-opacity"
            >
              Agregar al Carrito
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
