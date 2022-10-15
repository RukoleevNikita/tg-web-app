import React from 'react'
import { useTelegram } from '../../hooks/useTelegram';

export const Product = () => {
    const {tg, queryId} = useTelegram();

  return (
    <div>Product</div>
  )
}

