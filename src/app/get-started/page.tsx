/**
 * Redirect page - redirects /get-started to /book-call
 */

import { redirect } from 'next/navigation'

export default function GetStartedPage() {
  redirect('/book-call')
}
