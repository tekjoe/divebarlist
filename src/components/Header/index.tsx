import Link from "next/link";

export default function Header() {
  return (
    <header className="flex bg-gradient-to-b from-[#D2B48C] to-[#fff] border-4 border-gray-600">
      <div className="flex-1 text-center flex justify-center items-center border-r-4 border-gray-600">
        <span className="lg:text-[108px] text-5xl lg:p-10 p-2 block leading-none">🍻</span>
      </div>
      <div className="flex-[3] flex flex-col justify-center items-center">
        <h1 className="lg:text-[48px] font-bold mt-auto text-3xl p-2">The Dive Bar List</h1>
        <nav className="flex mt-auto w-full font-bold">
          <Link href="/" className="p-1 bg-gradient-to-b from-[#D2B48C] to-[#fff] flex-1 text-center border-4 border-b-0 border-l-0 border-r-4 border-gray-600">Home</Link>
          <Link href="/list" className="p-1 bg-gradient-to-b from-[#D2B48C] to-[#fff] flex-1 text-center border-4 border-b-0 border-l-0 border-r-4 border-gray-600">Bar List</Link>
          <Link href="/join" className="p-1 bg-gradient-to-b from-[#D2B48C] to-[#fff] flex-1 text-center border-4 border-b-0 border-l-0 border-r-0 border-gray-600">Join</Link>
        </nav>
      </div>
    </header>
  );
}
