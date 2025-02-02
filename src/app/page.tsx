export default function Home() {
  return (
   <section className="flex flex-col md:flex-row bg-gray-300 mt-2 border-4 border-gray-600">
    <aside className="flex-1 md:border-r-4 border-gray-600 order-2 md:order-1">
      <div className="border-b-4 border-gray-600 p-4">
        <span><h3 className="text-lg font-bold">Top Barflys</h3></span>
        <ul>
          <li>Fuiste</li>
          <li>Dakthepotato</li>
          <li>Treg</li>
        </ul>
      </div>
      <div className="p-4">
        <span><h3 className="text-lg font-bold">Recently Added</h3></span>
        <ul>
          <li>AC Tap</li>
          <li>Lumpy&apos;s</li>
          <li>Moccasin Bar</li>
        </ul>
      </div>
    </aside>
    <div className="flex-[3] order-1 md:order-2 border-b-4 border-gray-600 md:border-b-0">
      <article className="p-4">
        <h2 className="text-lg font-bold">AC Tap</h2>
        <div className="rating">
          <span className="">Overall Rating: </span>
          <span className="text-lg font-bold">⭐️⭐️⭐️⭐️⭐️</span>
        </div>
        <div className="price">
          <span className="">Price: </span>
          <span className="text-lg font-bold">💰💰💰</span>
        </div>
      </article>
      <article className="p-4">
        <h2 className="text-lg font-bold">Lumpy&apos;s</h2>
        <div className="rating">
          <span className="">Overall Rating: </span>
          <span className="text-lg font-bold">⭐️⭐️</span>
        </div>
        <div className="price">
          <span className="">Price: </span>
          <span className="text-lg font-bold">💰</span>
        </div>
      </article>
      <article className="p-4">
        <h2 className="text-lg font-bold">Moccasin Bar</h2>
        <div className="rating">
          <span className="">Overall Rating: </span>
          <span className="text-lg font-bold">⭐️⭐️⭐️⭐️</span>
        </div>
        <div className="price">
          <span className="">Price: </span>
          <span className="text-lg font-bold">💰💰</span>
        </div>
      </article>
    </div>
   </section> 
  );
}
