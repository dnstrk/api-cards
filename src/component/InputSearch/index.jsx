import { Input, TextField } from '@mui/material'
import React from 'react'
import cl from './index.module.css'

export default function InputSearch() {
  return (
    <Input className={cl.input} placeholder='Search'/>
  )
}

