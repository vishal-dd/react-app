import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeLayout } from './component/home';
import { Homepage } from './component/homepage';
import { Error } from './component/404';
import { About } from './component/about';
import {Blog} from './component/Blog';
import { Service } from './component/service';
import { CaseStudies } from './component/case-studies';
import { FaqAccordion } from './component/FaqAccordion';
import { Card } from './component/cards';
import {Reuse} from './component/reuse'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Homepage />} />               
        <Route path="home" element={<Homepage />} /> 
        <Route path="blog" element={<Blog />} />
        <Route path='about' element={<About/> } />  
        <Route path='Service' element={<Service/> } />    
        <Route path='casestudies' element={<CaseStudies/> } />    
        <Route path='faqaccrdion' element={<FaqAccordion />} />
        <Route path='reuse' element={<Reuse />} />
        <Route path='card' element={<Card />} />
        <Route path="*" element={<Error />} />           
      </Route>
    </Routes>
  );
}

export default App;
