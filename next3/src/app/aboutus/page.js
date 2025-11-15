import Button from '@/components/button'
import fullname from '@/data/mydata'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
      <div>Welcome to Aboutus Page</div>
      <h1>Hello , {fullname}</h1>
      <Button></Button>
      <Link href="/blog">Jumpt to Blog Page</Link>
    </>
  )
}
