import { useAxios } from "../context/DataContext";

export default function FeaturedProducts() {
  const { books } = useAxios();
  if (books.length === 0) return <div>No Hay Libros</div>;
  return (
    <div className="container_features">
      {books.map((book) => (
        <div key={book.name}>{book.name}</div>
      ))}
    </div>
  );
}
