import React, { useEffect } from 'react'
import CommonBanner from '../components/Banner/CommonBanner'
import SeasonBanner from '../components/SeasonsBanner/SeasonBanner';
import FixturesMatch from '../components/FixuresMatch/FixturesMatch';
const Title = "FIXTURES";
const FixturesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
       <CommonBanner Title={Title} />
       <SeasonBanner />
       <FixturesMatch/>
    </div>
  )
}

export default FixturesPage