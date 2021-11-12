export default function CategoryHero({collection}) {
  return (
    <div className="text-gray-900 bg-white relative w-full h-full overflow-hidden ">
      <img
        src={collection.image.url}
        alt={collection.image.altText}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
