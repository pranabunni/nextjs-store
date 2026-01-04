import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="max-w-3xl max-auto py-4 flex gap-x-4 border-b-2">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </nav>
    );
}
export default Navbar;