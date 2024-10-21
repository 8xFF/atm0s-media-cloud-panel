export const envServer = {
  NEXTAUTH_URL: process.env.NEXTAUTH_URL as string,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET as string,

  GITHUB_ID: process.env.GITHUB_ID as string,
  GITHUB_SECRET: process.env.GITHUB_SECRET as string,

  GOOGLE_ID: process.env.GOOGLE_ID as string,
  GOOGLE_SECRET: process.env.GOOGLE_SECRET as string,

  DATABASE_LOGGER: (process.env.DATABASE_LOGGER || 'info,error').split(','),

  API_KEY: process.env.API_KEY || 'insecure',
}
