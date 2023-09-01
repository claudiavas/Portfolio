import { Layout } from '@/components/Layout'
import { Hero } from '@/components/Hero'
import { Tech } from '@/components/Tech'
// import { Projects } from './projects'

export default function Home () {
  return (
    <Layout>
      <Hero />
      <Tech />
      {/* <Projects /> */}
    </Layout>
  )
}