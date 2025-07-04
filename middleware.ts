import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const url = new URL('/api/.well-known/jwks.json', req.url)

  const start = Date.now()
  const res = await fetch(url)

  const response = NextResponse.next()
  response.headers.set('fetch-duration', Date.now() - start)

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}
