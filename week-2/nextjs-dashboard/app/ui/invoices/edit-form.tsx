import { updateInvoice } from '@/app/lib/actions';
import { InvoiceForm, CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);

  return (
    <form action={updateInvoiceWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">Customer</label>
          <div className="relative">
            <select
              name="customerId"
              defaultValue={invoice.customer_id}
              required
              className="block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm"
            >
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">Amount</label>
          <div className="relative">
            <input
              name="amount"
              type="number"
              step="0.01"
              defaultValue={invoice.amount / 100}
              required
              className="block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm"
            />
            <CurrencyDollarIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">Status</legend>
          <div className="flex gap-4 rounded-md border border-gray-200 bg-white px-4 py-3">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="pending"
                defaultChecked={invoice.status === 'pending'}
                required
              />
              Pending <ClockIcon className="h-4 w-4" />
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="paid"
                defaultChecked={invoice.status === 'paid'}
              />
              Paid <CheckIcon className="h-4 w-4" />
            </label>
          </div>
        </fieldset>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600"
        >
          Cancel
        </Link>
        <Button type="submit">Update Invoice</Button>
      </div>
    </form>
  );
}
