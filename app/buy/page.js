'use client'

import React, { useState, useEffect } from 'react'

import Filter from '@/components/shared/Filter'
import PropertyFilter from '@/components/shared/PropertyFilter'
import PropertyList from '@/components/shared/PropertyList'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import { fetchProperties } from '@/utils/fetchProperties'

const page = () => {
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

  const [query, setQuery] = useState({
    limit: 15,
    offset: 0,
    postal_code: '33433',
    status: ['for_sale'],
    list_price: { max: 800000, min: 600000 },
    beds: { max: 3, min: 3 },
    sort: {
      direction: 'desc',
      field: 'list_date',
    },
  })

  const handleFilter = (minPrice, maxPrice, beds) => {
    setQuery({
      ...query,
      list_price: { max: Number(maxPrice), min: Number(minPrice) },
      beds: { max: 10, min: Number(beds) },
    })
  }

  const { status, data, error } = useQuery({
    queryKey: ['properties', query],
    queryFn: () => fetchProperties(query),
  })

  useEffect(() => {
    // console.log(query)
  }, [query])

  return (
    <main className="flex flex-col">
      {/* <Filter /> */}

      <PropertyFilter handleFilter={handleFilter} />

      <div className="flex-1 flex flex-col justify-around items-center">
        {status === 'pending' && <div className="">Loading</div>}

        {status === 'error' && <div>Error: Ops! something went wrong...</div>}

        {data && <PropertyList properties={data} />}

        {/* <PropertyList /> */}
      </div>

      {/* <div className="flex-1 flex flex-col justify-around items-center">
        <div>loading . . .</div>
        <div></div>
      </div> */}
    </main>
  )
}

export default page
