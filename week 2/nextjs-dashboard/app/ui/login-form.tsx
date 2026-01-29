'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>

        <label className="block text-xs font-medium">Email</label>
        <input
          name="email"
          type="email"
          required
          className="mb-3 w-full rounded-md border p-2"
        />

        <label className="block text-xs font-medium">Password</label>
        <input
          name="password"
          type="password"
          required
          minLength={6}
          className="mb-3 w-full rounded-md border p-2"
        />

        <input type="hidden" name="redirectTo" value={callbackUrl} />

        <Button className="w-full" aria-disabled={isPending}>
          Log in <ArrowRightIcon className="ml-auto h-5 w-5" />
        </Button>

        {errorMessage && (
          <div className="mt-2 flex items-center gap-1 text-red-500">
            <ExclamationCircleIcon className="h-5 w-5" />
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </form>
  );
}
