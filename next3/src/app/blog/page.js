import Button from '@/components/button'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
      <div class="abc">Welcome to blog page</div>
      <Button></Button>
      <Link href="/aboutus">Go to Aboutus Page</Link>
    </>
  )
}
