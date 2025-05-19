// export default async function BlogPage(props) {
//   console.log('SSR Blog id Page')
//   const { id } = await props.params

//   return <h1>New page {id}</h1>
// }

'use client'

import { use } from "react"

export default function BlogPage(props) {
  console.log('SSR Blog id Page')
  const { id } = use(props.params)

  return <h1>New page {id}</h1>
}