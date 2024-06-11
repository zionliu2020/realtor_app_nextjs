import BreadCrumbNav from '@/components/shared/BreadCrumbNav'
import ContactForm from '@/components/shared/ContactForm'
import DisclosureGroup from '@/components/shared/DisclosureGroup'
import Carousel from '@/components/shared/HeroCarousel'
import React from 'react'
import {
  FaHammer,
  FaHouse,
  FaRegCalendar,
  FaRulerCombined,
} from 'react-icons/fa6'

const PropertyDetailPage = () => {
  return (
    <main className="property-detail-container">
      <BreadCrumbNav />

      <div className="flex flex-col  w-full lg:w-4/5 mx-auto">
        <div>
          <Carousel />
          <div className="flex flex-row justify-between gap-6 p-2">
            <div className="basis-4/5 border border-gray-100 shadow-sm p-2 rounded-sm">
              {/* Property description */}
              <div className="property-description my-4">
                <div>
                  <h1>$499,000</h1>
                </div>
                <div>4bed 2bath 1,345sqft1,345 square feet 6,564sqft lot</div>
                <div>
                  <p>4957 SW 20th St, Fort Lauderdale, FL 33317</p>
                </div>
              </div>

              <div className="description-icons my-8">
                <div>
                  <FaHouse />
                </div>
                <div>
                  <FaHammer />
                </div>
                <div>
                  <FaRegCalendar />
                </div>
                <div>
                  <FaRulerCombined />
                </div>
              </div>

              {/* disclosure group */}
              <DisclosureGroup />
            </div>
            <div className="basis-1/5">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PropertyDetailPage
