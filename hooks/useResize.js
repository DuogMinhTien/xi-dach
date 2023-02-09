const { useState, useEffect } = require('react');
import baseCss from '~/public/styles/base.module.scss';

export default function useResize() {
  const [device, setDevice] = useState('mobile');
  function resizeDevice() {
    if (typeof window != 'undefined') {
      if (window.innerWidth >= baseCss?.largeDevice) {
        setDevice('large');
      } else if (window.innerWidth >= baseCss?.mediumDevice && window.innerWidth < baseCss?.largeDevice) {
        setDevice('medium');
      } else if (window.innerWidth >= baseCss?.smallDevice && window.innerWidth < baseCss?.mediumDevice) {
        setDevice('small');
      } else if (window.innerWidth < baseCss?.smallDevice) {
        setDevice('extra-small');
      }
    }
  }
  useEffect(() => {
    resizeDevice();
    window.addEventListener('resize', resizeDevice);
    return () => {
      window.removeEventListener('resize', resizeDevice);
    };
  }, []);
  return device;
}
