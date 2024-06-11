import { Button } from '@/components/ui/button'

import Link from 'next/link'

export default async function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-around p-24">
      <div className="flex flex-col items-center justify-around gap-6">
        <h1>This is a real estate demo app</h1>
        <Button className="bg-white border border-blue-400  text-blue-700 font-semibold hover:text-blue-800 hover:bg-blue-100/50">
          <Link href="/buy">Navigate to real estate listing page {'>'}</Link>
        </Button>
        <p>
          I am sorry that the resolution of all pics are quite low. All pics are
          fetched from third party API
        </p>
      </div>
      <div></div>
    </main>
  )
}
