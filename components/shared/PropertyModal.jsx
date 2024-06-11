'use client'

import React, { useState, useEffect } from 'react'

import BreadCrumbNav from '@/components/shared/BreadCrumbNav'
import ContactForm from '@/components/shared/ContactForm'
import DisclosureGroup from '@/components/shared/DisclosureGroup'
import HeroCarousel from '@/components/shared/HeroCarousel'
import {
  FaHammer,
  FaHouse,
  FaRegCalendar,
  FaRulerCombined,
} from 'react-icons/fa6'
import dayjs from 'dayjs'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchPropertyDetail } from '@/utils/fetchPropertyDetail'

const PropertyModal = ({ property_id, property }) => {
  const {
    list_price,
    description = {},
    primary_photo = {},
    location = {},
  } = property
  const { beds, baths, sqft, lot_sqft } = description
  const { address = {} } = location
  const { city, line, state_code, postal_code } = address
  const { href } = primary_photo

  const queryClient = useQueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity, // Data is never considered stale
        refetchOnMountOrArgChange: false, // Disable re-fetching on mount or argument change
        refetchOnFocus: false, // Disable re-fetching on window/tab focus
        refetchInterval: false, // Disable automatic re-fetching at intervals
        refetchOnWindowFocus: false,
      },
    },
  })

  const [query, setQuery] = useState(property_id)

  const { status, data, error } = useQuery({
    queryKey: ['property_detail', query],
    queryFn: () => fetchPropertyDetail(query),
  })

  useEffect(() => {
    // console.log(data)
  }, [data])

  if (status === 'pending') {
    return <div>loading</div>
  } else if (status === 'error')
    return <div>Error: Ops! something went wrong...</div>
  else if (data) {
    console.log(data)

    const {
      list_price,
      photos,
      property_history,
      status,
      list_date,
      description,
      details,
      price_per_sqft,
    } = data

    const { text, type, year_built } = description

    return (
      <div className="modal-page-container">
        {/* ------- carousels------------ */}
        <HeroCarousel photos={photos} />

        {/* ----------details----------- */}
        <div className="modal-info-container">
          <div className="modal-col-1 ">
            {/* -------------------Property description--------------- */}
            <div className="modal-description-container">
              <div>
                <h1 className="">
                  ${list_price ? list_price.toLocaleString() : '499,00'}
                </h1>
              </div>
              <div className="modal-content-item">
                <span className="font-semibold">{beds ? beds : '1'} </span>
                <span>beds</span>
                <span className="font-semibold">{baths ? baths : '1'} </span>
                <span>baths</span>
              </div>
              <div className="modal-content-item">
                <span className="font-semibold">{sqft ? sqft : '1000'} </span>
                <span>sqft</span>
                <span className="font-semibold">
                  {lot_sqft ? lot_sqft : '2000'}{' '}
                </span>
                <span>sqft lot</span>
              </div>

              {/* -----------modal address----------- */}
              <div className="modal-address-container">
                <div>{line ? line : '4957 SW 20th St'}</div>
                <div>
                  {city ? city : 'Fort Lauderdale'}
                  {', '}
                  {state_code ? state_code : 'FL'}{' '}
                  {postal_code ? postal_code : 33317}
                </div>
              </div>
            </div>

            {/* ---------------description-icons------------ */}
            <div className="modal-icons-container">
              <div className="modal-icons-item">
                <div>
                  <FaHouse />
                </div>
                <div>
                  <div className="font-semibold">{type ? type : 'single'}</div>
                  <div className="text-xs text-gray-500">Property type</div>
                </div>
              </div>
              <div className="modal-icons-item ">
                <div>
                  <FaHammer />
                </div>
                <div>
                  <div className="font-semibold ">
                    {year_built ? year_built : 'unknown'}
                  </div>
                  <div className="text-xs text-gray-500">Year built</div>
                </div>
              </div>
              <div className="modal-icons-item">
                <div>
                  <FaRulerCombined />
                </div>
                <div>
                  <div className="font-semibold">
                    ${price_per_sqft ? price_per_sqft : 'unknown'}
                  </div>
                  <div className="text-xs text-gray-500">Price per sqft</div>
                </div>
              </div>
              <div className="modal-icons-item">
                <div>
                  <FaRegCalendar />
                </div>
                <div>
                  <div className="font-semibold">
                    {list_date
                      ? dayjs(list_date).format('MM-DD-YYYY')
                      : '0 days'}
                  </div>
                  <div className="text-xs text-gray-500">
                    Time on the website
                  </div>
                </div>
              </div>
            </div>

            {/*----------------- disclosure group------------- */}
            <DisclosureGroup />
          </div>

          {/* ----------contact button group----------- */}
          <div className="modal-col-2">
            <ContactForm />
          </div>
        </div>
      </div>
    )
  }

  // return (
  //   <div className="property-detail-container">
  //     {/* <BreadCrumbNav /> */}

  //     <HeroCarousel />
  //     <div className="flex flex-row justify-between gap-6 p-2">
  //       <div className="basis-4/5 border border-gray-100 shadow-sm p-2 rounded-sm">
  //         {/* Property description */}
  //         <div className="property-description my-1 flex flex-col gap-2">
  //           <div>
  //             <h1 className="text-2xl font-bold">$499,000</h1>
  //           </div>
  //           <div className="card-content-item">
  //             <span>{beds ? beds : '1'} </span>
  //             <span className="font-semibold">beds</span>
  //             <span>{baths ? baths : '1'} </span>
  //             <span className="font-semibold">baths</span>
  //           </div>
  //           <div className="card-content-item">
  //             <span>{sqft ? sqft : '1000'} </span>
  //             <span className="font-semibold">sqft</span>
  //             <span>{lot_sqft ? lot_sqft : '2000'} </span>
  //             <span className="font-semibold">sqft lot</span>
  //           </div>
  //           {/* address */}
  //           <div>{line ? line : '4957 SW 20th St'}</div>
  //           <div>
  //             {city ? city : 'Fort Lauderdale'}
  //             {', '}
  //             {state_code ? state_code : 'FL'}{' '}
  //             {postal_code ? postal_code : 33317}
  //           </div>
  //         </div>

  //         {/* description-icons */}
  //         <div className="description-icons my-8">
  //           <div className="flex flex-row justify-start items-center gap-2">
  //             <div>
  //               <FaHouse />
  //             </div>
  //             <div>
  //               <div className="font-semibold text-sm">Single family</div>
  //               <div className="text-xs text-gray-500">Property type</div>
  //             </div>
  //           </div>
  //           <div className="flex flex-row justify-start items-center gap-2">
  //             <div>
  //               <FaHammer />
  //             </div>
  //             <div>
  //               <div className="font-semibold text-sm">1955</div>
  //               <div className="text-xs text-gray-500">Year built</div>
  //             </div>
  //           </div>
  //           <div className="flex flex-row justify-start items-center gap-2">
  //             <div>
  //               <FaRulerCombined />
  //             </div>
  //             <div>
  //               <div className="font-semibold text-sm">$334</div>
  //               <div className="text-xs text-gray-500">Price per sqft</div>
  //             </div>
  //           </div>
  //           <div className="flex flex-row justify-start items-center gap-2">
  //             <div>
  //               <FaRegCalendar />
  //             </div>
  //             <div>
  //               <div className="font-semibold text-sm">14 hours</div>
  //               <div className="text-xs text-gray-500">Time on the website</div>
  //             </div>
  //           </div>
  //         </div>

  //         {/* disclosure group */}
  //         <DisclosureGroup />
  //       </div>
  //       <div className="basis-1/5">
  //         <ContactForm />
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default PropertyModal
