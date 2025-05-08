import  createClient from '@sanity/client'

import { SANITY_API_TOKEN } from "../env";

export const client = createClient({
  projectId:"s3099j9r",
  dataset: "production",
  apiVersion: "2024-05-08",
  token: SANITY_API_TOKEN,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
