import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/products">Our Products</Link>
    </div>
  );
};

export default Navbar;
