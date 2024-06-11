'use client'

import Link from 'next/link'
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import { Separator } from '../ui/separator'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="nav-container">
      {/* ------------logo---------------- */}
      <div className="nav-logo">
        <h1>
          <Link href="/">Dream Homes</Link>
        </h1>
      </div>

      {/* ---------------web nav------------- */}
      <div className="web-nav">
        <ul className="nav-list-row">
          <li className="nav-item">
            <Link
              href="/buy"
              className={pathname === '/buy' ? 'active-link' : ''}
            >
              Buy
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/rent"
              className={pathname === '/rent' ? 'active-link' : ''}
            >
              Rent
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/sell"
              className={pathname === '/sell' ? 'active-link' : ''}
            >
              Sell
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/mortgage"
              className={pathname === '/mortgage' ? 'active-link' : ''}
            >
              Mortgage
            </Link>
          </li>
        </ul>
      </div>

      {/* ---------------mobile nav----------- */}
      <div className="mobile-nav">
        <Sheet>
          <SheetTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="sheet-header">
              <SheetClose asChild>
                <Link href="/" className="nav-logo">
                  Dream Homes
                </Link>
              </SheetClose>
            </SheetHeader>

            <Separator className="my-2" />

            <ul className="nav-list-col">
              <li className="nav-item">
                <SheetClose asChild>
                  <Link
                    href="/buy"
                    className={pathname === '/buy' ? 'active-link' : ''}
                  >
                    Buy
                  </Link>
                </SheetClose>
              </li>
              <li className="nav-item">
                <SheetClose asChild>
                  <Link
                    href="/rent"
                    className={pathname === '/rent' ? 'active-link' : ''}
                  >
                    Rent
                  </Link>
                </SheetClose>
              </li>
              <li className="nav-item">
                <SheetClose asChild>
                  <Link
                    href="/sell"
                    className={pathname === '/sell' ? 'active-link' : ''}
                  >
                    Sell
                  </Link>
                </SheetClose>
              </li>
              <li className="nav-item">
                <SheetClose asChild>
                  <Link
                    href="/mortgage"
                    className={pathname === '/mortgage' ? 'active-link' : ''}
                  >
                    Mortgage
                  </Link>
                </SheetClose>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export default Navbar
