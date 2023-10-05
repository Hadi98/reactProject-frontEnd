import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Header from '../components/Main/Header';
import Footer from '../components/Main/Footer';
import ScrollToTopButton from '../components/Main/ScrollToTopButton';
import SecondDiv from '../components/Home/Customize';
import CenteredDivisions from '../components/Product/CenteredDivisions';
import { useRouter } from 'next/router';
import Link from 'next/link';

const BlueNumber = styled.span`
  color: #73C7FC;
`;


const PRODUCTS = () => {
  const router = useRouter();
  const { route } = router;
  return (
    <div>
      <Header />
      <h1 style={{  marginTop: '10%', marginLeft: '10%' }}>
  <Link href="/" style={{ textDecoration: 'underline'}}>
    Home
  </Link>
  {' '}
  <a href={route}>
    {route}
  </a>
</h1>

      <ScrollToTopButton />
      <CenteredDivisions
        title="OUR PRODUCTS"
        divisions={[
          {
            imageSrc: '/images/Casemen.png',
            title: (
              <>
                <BlueNumber>1.</BlueNumber>CASEMENT
              </>
            ),
            paragraphs: [
              'Designed for replacement and new construction.',
              'For ease of new construction installation, it comes with a pre-punched nailing fin.',
              'Fusion welded sash and frame corners assure that this window stays true and square, and fits the rough opening.',
              'Opens to a full 90° for easy cleaning from inside a home.',
              'Dual Weatherstripping around perimeter of sash provides extra protection against air-infiltration which enhances the energy efficiency while increasing strength and security.',
            ],
            imageOnLeft: true,
          },
          {
            imageSrc: '/images/Casemen.png',
            title: (
              <>
              <BlueNumber>2.</BlueNumber>SINGLE HUNG
              </>
            ),
            paragraphs: [
              'Available in replacement and new construction configurations. For ease of new construction installation, it comes with a pre-punched nailing fin',
              'Fusion welded sash and frame corners assure that this window stays true and square, and fits the rough opening.',
              'Subtle accessory grooves come standard so you can securely accommodate trim and other attachments. Multiple accessories available.',
              'Dual Weatherstripping around perimeter of sash provides extra protection against air-infiltration which enhances the energy efficiency while increasing strength and security.',
            ],
            imageOnLeft: false,
          },
          {
            imageSrc: '/images/Casemen.png',
            title: (
              <>
              <BlueNumber>3.</BlueNumber>DOUBLE HUNG
              </>
              ),
            paragraphs: [
              'Available in replacement and new construction configurations. For ease of new construction installation, it comes with a pre-punched nailing fin',
              'Fusion welded sash and frame corners assure that this window stays true and square, and fits the rough opening.',
              'Subtle accessory grooves come standard so you can securely accommodate trim and other attachments. Multiple accessories available.',
              'Dual Weatherstripping around perimeter of sash provides extra protection against air-infiltration which enhances the energy efficiency while increasing strength and security.',
            ],
            imageOnLeft: true,
          },
        ]}
      />
      <SecondDiv />
      <Footer />
    </div>
  );
};

export default PRODUCTS;
