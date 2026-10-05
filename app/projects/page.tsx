import { redirect } from 'next/navigation'

// The CIEL project page moved under /properties
export default function ProjectsRedirect() {
  redirect('/properties/dsr-ciel')
}
