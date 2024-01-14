import { getServerSideUser } from '@/lib/payload-utils';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const { nextUrl, cookies } = req;
  const { user } = await getServerSideUser(cookies);

  if (user && ['/sign-in', '/sign-up'].includes(nextUrl.pathname)) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SERVER_URL}/`);
  }

  return NextResponse.next();
}
