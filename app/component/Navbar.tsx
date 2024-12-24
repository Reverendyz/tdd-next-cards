import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="w-full text-white pt-16">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/icon.svg" alt="My Icon" width={40} height={40} />
            <span className="font-bold text-xl">Anonymessage</span>
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/cards" className="hover:underline">
            Cards
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
