import { useState } from 'react'
import './index.css'
import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import CategoryGrid from './components/CategoryGrid'
import FeaturedProducts from './components/FeaturedProducts'
import PromoBanner from './components/PromoBanner'
import ValueProps from './components/ValueProps'
import CollectionHighlight from './components/CollectionHighlight'
import Testimonials from './components/Testimonials'
import BrandStory from './components/BrandStory'
import Newsletter from './components/Newsletter'
import InstagramFeed from './components/InstagramFeed'
import Footer from './components/Footer'

function App() {
  const [announcementVisible, setAnnouncementVisible] = useState(true)

  return (
    <>
      {/* Fixed overlay: announcement bar + header float over the hero image */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        {announcementVisible && (
          <AnnouncementBar
            message="This is an announcement with a"
            linkText="Link →"
            linkHref="#"
            onDismiss={() => setAnnouncementVisible(false)}
          />
        )}
        <Header />
      </div>

      <HeroBanner
        heading="Heading"
        subheading="Subheading"
        imageSrc="/hero.png"
        ctaHref="#"
      />

      <CategoryGrid />
      <FeaturedProducts />
      <PromoBanner />
      <ValueProps />
      <CollectionHighlight />
      <Testimonials />
      <BrandStory />
      <Newsletter />
      <InstagramFeed />
      <Footer />
    </>
  )
}

export default App
