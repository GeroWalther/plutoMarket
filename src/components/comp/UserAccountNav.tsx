'use client';

import { useAuth } from '@/hooks/use-auth';
import { User } from '@/payload-types';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export default function UserAccountNav({ user }: { user: User }) {
  const { signOut } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='overflow-visible'>
        <Button className='relative' size='sm' variant='ghost'>
          My account
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='bg-white w-60 align-end'>
        <div className='flex items-center justify-start gap-2 p-2'>
          <p className='font-medium text-sm text-stone-900'>{user.email}</p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href='/sell'>Seller Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={signOut} className=' cursor-pointer'>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
