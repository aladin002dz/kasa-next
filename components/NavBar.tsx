import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
    return (
        <header className="w-full px-4 py-2 flex items-center justify-between bg-white shadow-sm">
            <Link href="/">
                <Image src="/images/logo.png" alt="logo" width={100} height={100} />
            </Link>
            <nav className="flex gap-6">
                <Link href="/" className="text-gray-800 hover:text-indigo-600 transition-colors font-medium">Home</Link>
                <Link href="/about" className="text-gray-800 hover:text-indigo-600 transition-colors font-medium">About</Link>
            </nav>
        </header>
    )
}
