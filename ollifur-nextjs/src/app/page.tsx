import { Suspense } from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import Welcome from '@/components/Home/Welcome';
import Features from '@/components/Home/Features';
import Testimonials from '@/components/Home/Testimonials';
import Faq from '@/components/Home/Faq';
import PopularPosts from '@/components/Home/PopularPosts';
import brand from '@/lib/brand';

export const metadata = {
  title: `${brand.retail.name} - Home Page`,
};

export default function HomePage() {
  return (
    <MainLayout isHomePage>
      <section id="welcome">
        <Suspense fallback={<div>Loading...</div>}>
          <Welcome />
        </Suspense>
      </section>
      <section className="spaceTop">
        <Suspense fallback={<div>Loading...</div>}>
          <Features />
        </Suspense>
      </section>
      <section id="testimonials" className="spaceTopShort">
        <Suspense fallback={<div>Loading...</div>}>
          <Testimonials />
        </Suspense>
      </section>
      <section id="faq" className="spaceTop">
        <Suspense fallback={<div>Loading...</div>}>
          <Faq />
        </Suspense>
      </section>
      <section id="popularPosts" className="spaceTopShort">
        <Suspense fallback={<div>Loading...</div>}>
          <PopularPosts />
        </Suspense>
      </section>
    </MainLayout>
  );
}
