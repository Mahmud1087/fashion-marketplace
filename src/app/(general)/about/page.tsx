import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div className='bg-white text-gray-800'>
      <header className='bg-gray-900 text-white py-16'>
        <div className='container mx-auto text-center'>
          <h1 className='text-4xl font-bold mb-4'>About Us</h1>
          <p className='text-xl'>Discover who we are and what we stand for.</p>
        </div>
      </header>

      <section className='container mx-auto py-12 px-4 md:px-0'>
        {/* Section 1: Who We Are */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12'>
          <div>
            <h2 className='text-3xl font-bold mb-4'>Who We Are</h2>
            <p className='mb-4'>
              Fashion E-Marketplace is a dynamic online platform that brings
              together fashion enthusiasts, buyers, and sellers from all over
              the world. Our goal is to make fashion accessible to everyone by
              providing a seamless shopping experience.
            </p>
            <p>
              Whether you’re looking to discover the latest trends, shop for
              unique items, or showcase your own brand, we’re here to support
              you every step of the way. We take pride in curating a diverse
              selection of clothing, accessories, and footwear for all tastes
              and styles.
            </p>
          </div>
          <div>
            <Image
              src='/fashion-who-we-are.jpg' // Replace with your image path
              alt='Fashion marketplace'
              width={600}
              height={400}
              className='rounded-lg'
            />
          </div>
        </div>

        {/* Section 2: Our Mission */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12'>
          <div className='order-2 md:order-1'>
            <Image
              src='/fashion-mission.jpg' // Replace with your image path
              alt='Our mission'
              width={600}
              height={400}
              className='rounded-lg'
            />
          </div>
          <div className='order-1 md:order-2'>
            <h2 className='text-3xl font-bold mb-4'>Our Mission</h2>
            <p className='mb-4'>
              Our mission is simple – to connect people with fashion that
              inspires and empowers them. We believe fashion is a form of
              expression, and our platform helps users showcase their
              individuality while supporting independent sellers and emerging
              brands.
            </p>
            <p>
              By fostering a community of creativity and inclusivity, we aim to
              redefine the way people shop and interact with fashion online. Our
              marketplace provides sellers with the tools they need to succeed,
              while offering buyers a broad range of styles and designs.
            </p>
          </div>
        </div>

        {/* Section 3: Our Values */}
        <div className='mb-12'>
          <h2 className='text-3xl font-bold mb-4 text-center'>Our Values</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <h3 className='text-xl font-semibold mb-2'>Inclusivity</h3>
              <p>
                We believe in offering fashion for everyone, regardless of size,
                shape, or style. Everyone is welcome here.
              </p>
            </div>
            <div className='text-center'>
              <h3 className='text-xl font-semibold mb-2'>Sustainability</h3>
              <p>
                We promote eco-friendly practices by supporting sustainable
                fashion and encouraging conscious consumerism.
              </p>
            </div>
            <div className='text-center'>
              <h3 className='text-xl font-semibold mb-2'>Innovation</h3>
              <p>
                We’re always looking for new ways to improve the shopping
                experience and stay ahead of fashion trends.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Call to Action */}
        <div className='text-center'>
          <h2 className='text-3xl font-bold mb-4'>Join Our Community</h2>
          <p className='mb-4'>
            Ready to dive into the world of fashion? Whether you’re a buyer or a
            seller, Fashion E-Marketplace has something for you.
          </p>
          <Link href='/signup'>
            <Button className='bg-blue-600 text-white px-6 py-2 mt-4'>
              Sign Up Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
export default About;
