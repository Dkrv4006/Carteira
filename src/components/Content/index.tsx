
import React from "react"
import { Container } from "./style"

interface ChildrenProps{
  children?: React.ReactNode
}

export const Contents: React.FC<ChildrenProps>= ({ children }) => {
  return (
    <Container>
      { children }
    </Container>
  )
}