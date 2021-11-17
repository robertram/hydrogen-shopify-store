import {useState} from 'react';
import {Image, Link} from '@shopify/hydrogen/client';

import CartToggle from './CartToggle.client';
import CurrencySelector from './CurrencySelector.client';
import Navigation from './Navigation.client';
import MobileNavigation from './MobileNavigation.client';

export default function Header({collections, storeName}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="h-20 lg:h-25" role="banner">
      <div
        className={`fixed z-20 h-20 lg:h-25 w-full border-b border-gray-200 px-6 md:px-8 md:py-6 lg:pt-3 lg:pb-0 mx-auto bg-white ${
          isMobileNavOpen ? '' : 'bg-opacity-95'
        }`}
      >
        <div className="h-full flex lg:flex-col place-content-between">
          <div className="text-center w-full flex justify-between items-center">
            {/*<CurrencySelector />*/}
            <MobileNavigation
              collections={collections}
              isOpen={isMobileNavOpen}
              setIsOpen={setIsMobileNavOpen}
            />
            <div className="flex lg:flex-row justify-between w-full text-center items-center">
              {/* <Image width="622" height="465" image={collection.image} />*/}

              <div className="w-full flex justify-center lg:w-auto">
                <Link
                  className="font-bold uppercase text-2xl tracking-widest text-green-900"
                  to="/"
                >
                  <img src="logo.svg" alt={storeName} />
                </Link>
              </div>
              <Navigation collections={collections} storeName={storeName} />
              <CartToggle
                handleClick={() => {
                  if (isMobileNavOpen) setIsMobileNavOpen(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
