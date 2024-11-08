'use client';

import DashboardSidebar from './dashboard-sidebar';
import DashboardMain from './dashboard-main';
import { useState } from 'react';

const Dashboard = () => {
  const [link, setLink] = useState('Overview');

  return (
    <div className='flex relative'>
      <DashboardSidebar link={link} setLink={setLink} />
      <DashboardMain link={link} />
    </div>
  );
};
export default Dashboard;
