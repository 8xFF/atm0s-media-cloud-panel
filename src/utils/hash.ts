import { randomBytes, scryptSync, timingSafeEqual } from 'crypto'

export function generateSecretKey(size = 32, format = 'base64') {
  const buffer = randomBytes(size)
  return buffer.toString(format as any)
}

export function generateSecretHash(key: string) {
  const salt = randomBytes(8).toString('hex')
  const buffer = scryptSync(key, salt, 64) as Buffer
  return `${buffer.toString('hex')}.${salt}`
}

export function validateSecretHash(key: string, hash: string) {
  const [hashedPassword, salt] = key.split('.')
  console.log(hashedPassword, salt)

  const buffer = scryptSync(hash, salt, 64) as Buffer
  return timingSafeEqual(Buffer.from(hashedPassword, 'hex'), buffer)
}
