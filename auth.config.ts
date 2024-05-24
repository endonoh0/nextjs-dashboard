import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  // Specifies the route for custom sign-in, sign-out, and error pages
  // rather than the default NextAuth.js page
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // Used to verify if the request is authorized to access a page via middleware
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  // List of different login options
  providers: [],
} satisfies NextAuthConfig;
