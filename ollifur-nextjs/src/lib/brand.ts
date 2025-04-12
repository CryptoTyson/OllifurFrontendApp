interface BrandConfig {
  name: string;
  desc: string;
  prefix: string;
  footerText: string;
  logoText: string;
  projectName: string;
  url: string;
  img: string;
}

interface Brand {
  retail: BrandConfig;
}

const brand: Brand = {
  retail: {
    name: 'Ollifur',
    desc: 'Cherish the ones you love.',
    prefix: 'Ollifur',
    footerText: 'Ollifur 2023',
    logoText: 'Ollifur',
    projectName: 'Ollifur',
    url: '/',
    img: '/static/images/logo-retail.png',
  },
};

export default brand;
