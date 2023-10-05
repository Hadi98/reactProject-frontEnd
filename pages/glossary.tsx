import React from 'react';
import styled from 'styled-components'; 
import tw from 'twin.macro';
import Header from '../components/Main/Header';
import Footer from '../components/Main/Footer';
import SecondDiv from '../components/Home/Customize';
import HowToMeasure from '../components/Measure/HowToMeasure';

import ScrollToTopButton from '../components/Main/ScrollToTopButton';
import { useRouter } from 'next/router';
import Link from 'next/link';
import CenteredYouTubeVideo from '../components/Measure/YouTube';
import ContentWithTable from '../components/Glossary/glossary';



const Glossary = () => {
    const router = useRouter();
    const { route } = router;
    const title = "GLOSSARY";
  const paragraph = "Window e-Store makes every style of residential window available to you including single hung, double hung, slider, casement, awning, hopper, half round, geometric, and more.";
  const tableData = [
    { header: "Awning", content: "A top-hinged window that swings outward for ventilation." },
    { header: "Argon Gas", content: "An odorless, colorless, and non-toxic gas which is six times denser than air. It is used to replace air between the glass panes to reduce temperature transfer." },
    { header: "Bay Window", content: "An angled combination of three windows that project out from the wall of the home. The windows are commonly joined at 30- or 45-degree angles." },
    { header: "Bow Window", content: "An angled combination of windows in 3-, 4- or 5-lite configurations. The windows are attached at 10-degree angles to project a more circular, arced appearance." },
    { header: "Casement", content: "A window with a side-hinged sash that opens outward for ventilation." },
    { header: "Double-strength Glass", content: "Glass with a thickness of 1/8″." },
    { header: "Double Hung", content: "A top-hinged window that swings outward for ventilation." },
    { header: "Egress Code", content: "An odorless, colorless, and non-toxic gas which is six times denser than air. It is used to replace air between the glass panes to reduce temperature transfer." },
    { header: "Geometric", content: "An angled combination of three windows that project out from the wall of the home. The windows are commonly joined at 30- or 45-degree angles." },
    { header: "Grids", content: "An angled combination of windows in 3-, 4- or 5-lite configurations. The windows are attached at 10-degree angles to project a more circular, arced appearance." },
    { header: "Hopper", content: "A window with a side-hinged sash that opens outward for ventilation." },
    { header: "Intercept® Spacer System", content: "Glass with a thickness of 1/8″." },
    { header: "KeepSafe Laminated Glass", content: "A top-hinged window that swings outward for ventilation." },
    { header: "Low E (Emissivity) Glass", content: "An odorless, colorless, and non-toxic gas which is six times denser than air. It is used to replace air between the glass panes to reduce temperature transfer." },
    { header: "Obscure Glass", content: "An angled combination of three windows that project out from the wall of the home. The windows are commonly joined at 30- or 45-degree angles." },
    { header: "Oriel", content: "An angled combination of windows in 3-, 4- or 5-lite configurations. The windows are attached at 10-degree angles to project a more circular, arced appearance." },
    { header: "Patio Door", content: "A window with a side-hinged sash that opens outward for ventilation." },
    { header: "Picture", content: "Glass with a thickness of 1/8″." },
    { header: "Sash", content: "An odorless, colorless, and non-toxic gas which is six times denser than air. It is used to replace air between the glass panes to reduce temperature transfer." },
    { header: "Single Hung", content: "An angled combination of windows in 3-, 4- or 5-lite configurations. The windows are attached at 10-degree angles to project a more circular, arced appearance." },
    { header: "Single Window", content: "Glass with a thickness of 1/8″." },
  ];
    return (
        <div>
            <div><Header/></div>
            <h1 style={{ color: 'black', marginTop: '10%', marginLeft: '10%' }}>
             <Link href="/" style={{ textDecoration: 'underline' }}>Home</Link>
             {' '}
             <a href={route}>{route}</a>
             </h1>
             <ScrollToTopButton/>
            <div><ContentWithTable title={title} paragraph={paragraph} tableData={tableData} /></div>
            <div><SecondDiv/></div>
            <div><Footer/></div>
        </div>
        );
};

export default Glossary;