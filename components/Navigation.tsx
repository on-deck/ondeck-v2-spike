import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="relative w-full text-center flex items-center justify-between h-16 lg:justify-start">
      <div className="ml-10 pr-4 space-x-8">
        <Link href="/">
          <a className="font-medium dark:text-gray-50 text-gray-500 hover:text-gray-900 dark:hover:text-indigo-500">
            Home
          </a>
        </Link>

        <a
          href="#"
          className="font-medium dark:text-gray-50 text-gray-500 hover:text-gray-900 dark:hover:text-indigo-500"
        >
          Benefits
        </a>

        <a
          href="#"
          className="font-medium dark:text-gray-50 text-gray-500 hover:text-gray-900 dark:hover:text-indigo-500"
        >
          Pricing
        </a>

        <a
          href="#"
          className="font-medium  dark:text-gray-50 text-gray-500 hover:text-gray-900 dark:hover:text-indigo-500"
        >
          About
        </a>

        <a
          href="#"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Log in
        </a>
      </div>
    </nav>
  );
}
