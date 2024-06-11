import React, { useDebugValue } from 'react'
import PropertyCard from './PropertyCard'

const PropertyList = ({ properties }) => {
  if (properties) {
    return (
      <div className="property-list-container">
        {properties.map((property) => (
          <PropertyCard key={property.property_id} property={property} />
        ))}
      </div>
    )
  }

  return (
    <div className="property-list-container -z-20">
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
    </div>
  )
}

export default PropertyList
