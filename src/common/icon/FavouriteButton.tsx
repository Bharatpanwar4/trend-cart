import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FavouriteButton = () => {
  return (
    <Link href={'/fav'} className='group relative'>
    <Heart className='hoverEffect iconClass'/>
    <span className='absolute -top-1 -right-1 bg-shop_dark_green  size-3.5 rounded-full text-xs font-semibold  flex items-center justify-center  text-white'>0</span>
        </Link>
  )
}

export default FavouriteButton