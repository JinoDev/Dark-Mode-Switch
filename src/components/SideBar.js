import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaSmile} from 'react-icons/fa';

const SideBar = () => {
    return (
      <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                    bg-gray-100 text-gray-900 shadow-lg
                    dark:bg-gray-900 dark:text-white">
                      
          <SideBarIcon icon={<FaFire size="28" />} />
          <SideBarIcon icon={<BsPlus size="32" />} />
          <SideBarIcon icon={<BsFillLightningFill size="20" />} />
          <SideBarIcon icon={<FaSmile size="20" />} />
          <SideBarIcon icon={<BsGearFill size="22" />} />
      </div>
    );
  };
  
  const SideBarIcon = ({ icon, text = 'tooltip 🔥' }) => (
    <div className="sidebar-icon group">
      {icon}
     
    <span class="sidebar-tooltip group-hover:scale-100">
        {text}
    </span>

    </div>
  );
  
  
  
  
  export default SideBar;
  