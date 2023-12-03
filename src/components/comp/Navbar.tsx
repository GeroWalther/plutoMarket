import Link from 'next/link';
import { PlutoLogo } from '../svgs/Icons';
import { buttonVariants } from '../ui/button';
import Cart from './Cart';

import MaxWidthWrapper from './MaxWidthWrapper';
import NavItems from './NavItems';

export default function Navbar() {
  const user = null;

  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
      <header className='relative bg-white'>
        <MaxWidthWrapper>
          <div className='border-b border-stone-200'>
            <div className='flex h-16 items-center'>
              {/* TODO: Mobile nav */}

              <div className=' ml-2 flex lg:ml-1'>
                <Link href={'/'}>
                  <PlutoLogo className='text-stone-900' />
                </Link>
              </div>
              <div className='hidden z-50 lg:ml-6 lg:block lg:self-stretch'>
                <NavItems />
              </div>
              <div className='ml-auto flex items-center'>
                <div className=' hidden lg:flex lg:items-center lg:justify-end lg:space-x-6'>
                  {user ?? (
                    <Link
                      href='/sign-in'
                      className={buttonVariants({
                        variant: 'ghost',
                      })}>
                      Sign in
                    </Link>
                  )}
                  {user ?? (
                    <span
                      className='h-6 w-px bg-stone-200'
                      aria-hidden='true'
                    />
                  )}
                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href='/sign-up'
                      className={buttonVariants({ variant: 'ghost' })}>
                      Create account
                    </Link>
                  )}
                  {user && (
                    <span
                      className='h-6 w-px bg-stone-200'
                      aria-hidden='true'
                    />
                  )}
                  {user ?? (
                    <div className='flex lg:ml-6'>
                      {' '}
                      <span
                        className='h-6 w-px bg-stone-200'
                        aria-hidden='true'
                      />
                    </div>
                  )}

                  <div className=' ml-4 flow-root lg:ml-6'>
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}
