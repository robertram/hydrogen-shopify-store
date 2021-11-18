import {Link} from '@shopify/hydrogen';

export default function Footer({collection, product}) {
  return (
    <footer role="contentinfo">
      <div className="relative bg-white border-t border-b border-black border-opacity-5">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* eslint-disable-next-line @shopify/jsx-prefer-fragment-wrappers */}
          <div>
            <h2 className="text-md font-medium uppercase mb-4">Social Media</h2>
            <ul className="mt-8 space-y-4">
              <li className="text-sm font-medium text-gray-600 hover:text-gray-900">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center"
                >
                  Facebook
                </a>
              </li>
              <li className="text-sm font-medium text-gray-600 hover:text-gray-900">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          {/* eslint-disable-next-line @shopify/jsx-prefer-fragment-wrappers */}
          <div>
            <h2 className="text-md font-medium uppercase mb-4">Collections</h2>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                <Link to="/home">Home</Link>
              </li>
              <li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                <Link to={`/products/${product?.handle}`}>Product</Link>
              </li>
              <li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                <Link to={`/collections/${collection?.handle}`}>
                  Collection
                </Link>
              </li>
            </ul>
          </div>
          {/* eslint-disable-next-line @shopify/jsx-prefer-fragment-wrappers */}
          <div>
            <h2 className="text-md font-medium uppercase mb-4">Contact</h2>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                <a href="#" className="flex items-center">
                  <svg
                    data-v-1cd6c88b=""
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    data-v-15467eca=""
                    className="mr-2"
                  >
                    <path
                      d="M14.5722 10.5995L11.2909 9.19326C11.1508 9.13352 10.995 9.12093 10.847 9.15739C10.6991 9.19385 10.567 9.27738 10.4706 9.39541L9.01745 11.1708C6.73686 10.0956 4.90151 8.26021 3.82624 5.97963L5.60166 4.52647C5.71993 4.43028 5.80364 4.29818 5.84011 4.15016C5.87659 4.00215 5.86385 3.84628 5.80382 3.70615L4.39754 0.42484C4.33165 0.273785 4.21513 0.150453 4.06805 0.0761123C3.92097 0.00177107 3.75256 -0.0189204 3.59186 0.0176058L0.544932 0.720743C0.389998 0.756521 0.251766 0.843757 0.152796 0.968214C0.0538267 1.09267 -3.56904e-05 1.247 1.77431e-08 1.40601C1.77431e-08 8.92079 6.09093 15 13.594 15C13.7531 15.0001 13.9075 14.9463 14.032 14.8473C14.1565 14.7483 14.2438 14.6101 14.2796 14.4551L14.9827 11.4081C15.019 11.2467 14.9979 11.0776 14.9229 10.93C14.848 10.7824 14.724 10.6656 14.5722 10.5995Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  506 888888
                </a>
              </li>
              <li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                <a href="#" className="flex items-center">
                  <svg
                    data-v-1cd6c88b=""
                    width="15"
                    height="15"
                    viewBox="0 0 19 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-v-15467eca=""
                    className="mr-2"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.2929 0H0.00115023C0.124235 0.000260476 0.247468 0.045692 0.343874 0.137024L9.49057 8.80232L18.2929 0ZM9.85355 9.85355L19 0.707109V15H0V1.18875L9.15613 9.86298C9.35278 10.0493 9.66201 10.0451 9.85355 9.85355Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Mail
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-6 px-4 md:px-8 bg-gray-50">
        <p className="text-gray-600">© 2021 Shopify</p>
      </div>
    </footer>
  );
}
