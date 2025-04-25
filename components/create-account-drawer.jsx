"use client"

import React, { useState } from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
    DrawerHeader,
    DrawerTitle,
  } from "@/components/ui/drawer";
  
const CreateAccountDrawer = ({children}) => {

    const [open, setOpen] = useState(false);

    use
  return (
    <Drawer open={open} onOpenChange={setOpen}>
    <DrawerTrigger>{children}</DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Create New Account</DrawerTitle>
      </DrawerHeader>
      <div>
        <form>

        </form>
      </div>
    </DrawerContent>
  </Drawer>
  
  )
}

export default CreateAccountDrawer