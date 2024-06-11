import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

const HeroCarousel = ({ photos }) => {
  if (photos)
    return (
      <Carousel className="mt-8 w-full ">
        <CarouselContent>
          {photos.slice(10).map((photo, index) => (
            <CarouselItem key={index}>
              <Image
                src={photo.href ? photo.href : '/assets/house/house2.jpg'}
                width={120}
                height={60}
                alt="house2"
                className="w-full object-cover rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )

  return (
    <div className="">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/assets/house/house2.jpg"
              width={800}
              height={300}
              alt="house2"
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/assets/house/house2.jpg"
              width={500}
              height={350}
              alt="house2"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/assets/house/house2.jpg"
              width={500}
              height={350}
              alt="house2"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default HeroCarousel
