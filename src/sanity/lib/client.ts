import  createClient from '@sanity/client'

import {  dataset, projectId, token } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-05-08",
  token,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
