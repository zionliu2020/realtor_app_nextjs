import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import PropertyModal from './PropertyModal'
import { Button } from '../ui/button'

const PropertyCard = ({ property }) => {
  // const property = {}
  const {
    property_id,
    list_price,
    description = {},
    primary_photo = {},
    location = {},
  } = property
  const { beds, baths, sqft, lot_sqft } = description
  const { address = {} } = location
  const { city, line, state_code, postal_code } = address
  const { href } = primary_photo

  return (
    <Card className="card-container ">
      {/* modal */}
      <Dialog className="w-full">
        <DialogTrigger className="w-full">
          <div className="relative ">
            <Image
              src={href ? href : '/assets/house/default.jpg'}
              // src="/assets/house/default.jpg"
              width={240}
              height={180}
              className="w-full h-full object-cover rounded-t-lg"
              alt="house1"
              // fill
              // objectFit="cover"
            />
          </div>
        </DialogTrigger>

        {/* --------------single property modal----------------------- */}
        <DialogContent className=" h-[80%] w-full">
          <PropertyModal property_id={property_id} property={property} />
        </DialogContent>
      </Dialog>

      {/* property description */}
      {/* price */}
      <CardHeader>
        <h2 className="">
          ${list_price ? list_price.toLocaleString() : '68,700'}
        </h2>
      </CardHeader>
      {/* beds, baths, sqft */}
      <CardContent className="card-content-container">
        <div className="card-content-item">
          <div>
            <span className="font-semibold">{beds ? beds : '1'} </span>
            <span>beds</span>
          </div>
          <div>
            <span className="font-semibold">{baths ? baths : '1'} </span>
            <span>baths</span>
          </div>
        </div>
        <div className="card-content-item">
          <div>
            <span className="font-semibold">{sqft ? sqft : '1000'} </span>
            <span>sqft</span>
          </div>
          <div>
            <span className="font-semibold">
              {lot_sqft ? lot_sqft : '2000'}{' '}
            </span>
            <span>sqft lot</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="card-footer-container ">
        <div>
          <div>{line ? line : '4957 SW 20th St'}</div>
          <div>
            {city ? city : 'Fort Lauderdale'}
            {', '}
            {state_code ? state_code : 'FL'} {postal_code ? postal_code : 33317}
          </div>
        </div>
        <div>
          <Button className="bg-white text-blue-400 border border-blue-400 hover:bg-blue-100/50 rounded-full text-sm leading-none p-1 h-8">
            Contact Agent
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default PropertyCard
