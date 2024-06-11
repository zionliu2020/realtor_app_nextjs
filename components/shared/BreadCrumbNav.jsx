import React from 'react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import Link from 'next/link'

const BreadCrumbNav = () => {
  return (
    <div className="breadcrumb-nav">
      <div>
        <Link href="/">Back</Link>
      </div>

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="breadcrumb-item">
            <BreadcrumbLink href="/">Buy</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="breadcrumb-item">
            <BreadcrumbLink href="/components">Florida</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="breadcrumb-item">
            <BreadcrumbLink href="/buy">Fort Lauderdale</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}

export default BreadCrumbNav
