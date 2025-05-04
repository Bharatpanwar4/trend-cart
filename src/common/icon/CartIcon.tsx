import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
    <Link href={'/cart'} className='group relative'>
<ShoppingBag className='hoverEffect iconClass'/>
<span className='absolute -top-1 -right-1 bg-shop_dark_green  size-3.5 rounded-full text-xs font-semibold  flex items-center justify-center  text-white'>0</span>
    </Link>
  )
}

export default CartIcon