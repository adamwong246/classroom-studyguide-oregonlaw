
import Disinfectle from './assets/licensemons/Disinfectle';
import Glowgiene from './assets/licensemons/Glowgiene';
import Ventiloom from './assets/licensemons/Ventiloom';
import Sharpshock from './assets/licensemons/Sharpshock';
import Waxit from './assets/licensemons/Waxit';
import Towelyn from './assets/licensemons/Towelyn';
import Dermaplaneon from './assets/licensemons/Dermaplaneon';
import Peelizard from './assets/licensemons/Peelizard';
import Contaminull from './assets/licensemons/Contaminull';
import Floorguard from './assets/licensemons/Floorguard';

import DefaultMon from './assets/licensemons/DefaultMon';
import './LicenseMonDisplay.css';

export default function LicenseMonDisplay({ mon }: { mon: LicenseMon }) {
  const getMonComponent = () => {
    switch(mon.id) {
      case 1: return <Disinfectle />;
      case 2: return <Glowgiene />;
      case 3: return <Ventiloom />;
      case 4: return <Sharpshock />;
      case 5: return <Waxit />;
      case 6: return <Towelyn />;
      case 7: return <Dermaplaneon />;
      case 8: return <Peelizard />;
      case 9: return <Contaminull />;
      case 10: return <Floorguard />;
      default: return <DefaultMon />;
    }
  };

  return (
    <div className="license-mon-display row">
      <div className="mon-image col-xs-6">
        {getMonComponent()}
      </div>

      <div className="col-xs-6">
      {mon.description && (
        <p className="mon-description">{mon.description}</p>
      )}
      </div>

      
    </div>
  );
}
