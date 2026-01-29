import Link from 'next/link';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <Link
          href="/dashboard"
          className="flex h-[48px] items-center justify-center rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:justify-start md:px-3"
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/customers"
          className="flex h-[48px] items-center justify-center rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:justify-start md:px-3"
        >
          Customers
        </Link>

        <Link
          href="/dashboard/invoices"
          className="flex h-[48px] items-center justify-center rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:justify-start md:px-3"
        >
          Invoices
        </Link>
      </div>
    </div>
  );
}
