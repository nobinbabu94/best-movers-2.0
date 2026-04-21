import { NextResponse } from 'next/server';

// ✅ Set MAINTENANCE_MODE to true to lock the site
// ✅ Set to false to restore the site when client pays
const MAINTENANCE_MODE = false;

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Allow the maintenance page itself to load (avoid redirect loop)
  if (pathname.startsWith('/maintenance')) {
    return NextResponse.next();
  }

  // Allow Next.js internals and static assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/api')
  ) {
    return NextResponse.next();
  }

  // Redirect all other traffic to maintenance page
  if (MAINTENANCE_MODE) {
    return NextResponse.redirect(new URL('/maintenance', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
