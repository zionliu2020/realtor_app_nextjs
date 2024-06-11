import React from 'react'

import { Button } from '@/components/ui/button'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const ContactForm = () => {
  return (
    <Card className="flex flex-row justify-center items-center pt-2" as="div">
      <CardContent className="flex flex-col justify-center items-center gap-2">
        <div>
          <Button className="w-full min-w-[140px] bg-white text-blue-400 border border-blue-300 hover:bg-blue-100 hover:text-blue-500 rounded-lg">
            Request a tour
          </Button>
        </div>
        <div>
          <Button className="w-full min-w-[140px] bg-white text-blue-400 border border-blue-300 hover:bg-blue-100 hover:text-blue-500 rounded-lg">
            Contact agent
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ContactForm
