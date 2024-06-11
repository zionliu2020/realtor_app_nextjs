'use client'

import { useState, useEffect } from 'react'
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa6'

import { priceList, bedsList } from '@/constants'

const PropertyFilter = ({ handleFilter }) => {
  const [minPrice, setMinPrice] = useState('0')
  const [maxPrice, setMaxPrice] = useState('99999999999')
  const [beds, setBeds] = useState('1')

  const handleSubmit = () => {
    handleFilter(minPrice, maxPrice, beds)
    console.log('fired')
  }

  return (
    <section className="filter-container">
      <form className="filter-form w-full md:basis-1/5">
        <input
          type="text"
          className="filter-input "
          placeholder="City or Zipcode"
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
          // disabled
        />
      </form>

      <div className="w-full flex flex-col items-center md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-1 md:basis-3/5">
        {/* price */}
        <div className="w-full md:basis-3/4 flex flex-row  space-x-1 ">
          {/* min price */}
          <Listbox
            as="div"
            className="relative w-full basis-1/2 "
            value={minPrice}
            onChange={setMinPrice}
            // disabled={disabled}
          >
            <ListboxButton className="filter-btn">
              <div>
                {minPrice === '99999999999'
                  ? 'any'
                  : minPrice === '0'
                  ? '0'
                  : Number(minPrice) / 1000000 < 1
                  ? `${Number(minPrice) / 1000}K`
                  : `${Number(minPrice) / 1000000}M`}
              </div>
              <div className="flex flex-row">
                Min Price
                <div className="pt-1 pl-2">
                  <FaChevronDown />
                </div>
              </div>
            </ListboxButton>
            <ListboxOptions className="dropdown-panel">
              {priceList.map((priceItem) => (
                <ListboxOption
                  key={priceItem.id}
                  value={priceItem.value}
                  disabled={Number(priceItem.value) >= Number(maxPrice)}
                  className={
                    Number(priceItem.value) >= Number(maxPrice)
                      ? 'line-through text-gray-500 cursor-not-allowed'
                      : 'cursor-pointer'
                  }
                >
                  {priceItem.name}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>

          {/* max price */}
          <Listbox
            as="div"
            className="relative w-full   basis-1/2"
            value={maxPrice}
            onChange={setMaxPrice}
            // disabled={disabled}
          >
            <ListboxButton className="filter-btn">
              <div>
                {' '}
                {maxPrice === '99999999999'
                  ? 'any'
                  : maxPrice === '0'
                  ? '0'
                  : Number(maxPrice) / 1000000 < 1
                  ? `${Number(maxPrice) / 1000}K`
                  : `${Number(maxPrice) / 1000000}M`}
              </div>
              <div className="flex flex-row">
                Max Price
                <div className="pt-1 pl-2">
                  <FaChevronDown />
                </div>
              </div>
            </ListboxButton>
            <ListboxOptions className="dropdown-panel">
              {priceList.map((priceItem) => (
                <ListboxOption
                  key={priceItem.id}
                  value={priceItem.value}
                  disabled={Number(priceItem.value) <= Number(minPrice)}
                  className={
                    Number(priceItem.value) <= Number(minPrice)
                      ? 'line-through text-gray-500 cursor-not-allowed'
                      : 'cursor-pointer'
                  }
                >
                  {priceItem.name}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>
        </div>

        {/* bed */}
        <Listbox
          as="div"
          className="relative  w-full md:basis-1/4 "
          value={beds}
          onChange={setBeds}
          // disabled={disabled}
        >
          <ListboxButton className="filter-btn">
            <div>{beds}</div>
            <div className="flex flex-row">
              Beds
              <div className="pt-1 pl-2">
                <FaChevronDown />
              </div>
            </div>
          </ListboxButton>
          <ListboxOptions className="dropdown-panel">
            {bedsList.map((bedItem) => (
              <ListboxOption key={bedItem.id} value={bedItem.value}>
                {bedItem.name}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>

      <div className="w-full md:basis-1/5">
        <button
          className="filter-submit "
          onClick={() => handleSubmit()}
          // disabled={disabled}
        >
          Apply Filter
        </button>
      </div>
    </section>
  )
}

export default PropertyFilter
