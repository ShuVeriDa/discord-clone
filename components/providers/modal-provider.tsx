"use client"

import {FC, useEffect, useState} from 'react';
import {CreateServerModal} from "@/components/modals/create-server-modal";

interface IModalProviderProps {
}

export const ModalProvider: FC<IModalProviderProps> = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, []);

  if (!isMounted) {
    return null
  }

  return (
    <>
      <CreateServerModal/>
    </>
  );
};