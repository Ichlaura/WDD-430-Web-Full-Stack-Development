'use client';

import { createInvoice } from '@/app/lib/actions';
import { CustomerField } from '@/app/lib/definitions';
import { useActionState } from 'react';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';

type FormState = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState: FormState = { message: null, errors: {} };
  const [state, formAction] = useActionState(createInvoice, initialState);

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* CUSTOMER */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose customer
          </label>
          <div className="relative">
            <select
              id="customer"
              name="customerId"
              defaultValue=""
              aria-describedby="customer-error"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm"
            >
              <option value="" disabled>
                Select a customer
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          </div>

          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.customerId?.map((error) => (
              <p key={error} className="mt-2 text-sm text-red-500">
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* AMOUNT */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Choose an amount
          </label>
          <div className="relative">
            <input
              id="amount"
              name="amount"
              type="number"
              step="0.01"
              placeholder="Enter USD amount"
              aria-describedby="amount-error"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm"
            />
            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          </div>

          <div id="amount-error" aria-live="polite" aria-atomic="true">
            {state.errors?.amount?.map((error) => (
              <p key={error} className="mt-2 text-sm text-red-500">
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* STATUS */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the invoice status
          </legend>

          <div
            className="flex gap-4 rounded-md border border-gray-200 bg-white px-4 py-3"
            aria-describedby="status-error"
          >
            <label className="flex items-center gap-2">
              <input type="radio" name="status" value="pending" />
              Pending <ClockIcon className="h-4 w-4" />
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="status" value="paid" />
              Paid <CheckIcon className="h-4 w-4" />
            </label>
          </div>

          <div id="status-error" aria-live="polite" aria-atomic="true">
            {state.errors?.status?.map((error) => (
              <p key={error} className="mt-2 text-sm text-red-500">
                {error}
              </p>
            ))}
          </div>
        </fieldset>

        {/* FORM MESSAGE */}
        {state.message && (
          <p className="mt-4 text-sm text-red-500">{state.message}</p>
        )}
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600"
        >
          Cancel
        </Link>
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  );
}
