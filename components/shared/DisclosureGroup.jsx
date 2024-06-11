import React from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const DisclosureGroup = () => {
  return (
    <div className="disclosure-group-container">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Property details</AccordionTrigger>
          <AccordionContent>Details coming soon...</AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Monthly payment</AccordionTrigger>
          <AccordionContent>Details coming soon...</AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Property history</AccordionTrigger>
          <AccordionContent>Details coming soon...</AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Home value</AccordionTrigger>
          <AccordionContent>Details coming soon...</AccordionContent>
        </AccordionItem>
      </Accordion>

      <Disclosure>
        <DisclosureButton className="py-2">Open houses</DisclosureButton>
        <DisclosurePanel className="text-gray-500">
          Contact agent for a private showing.
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}

export default DisclosureGroup
