import Link from 'next/link';
import { PlutoLogo } from '../svgs/Icons';

import MaxWidthWrapper from './MaxWidthWrapper';
import NavItems from './NavItems';

export default function Navbar() {
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
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}
