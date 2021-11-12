import {useShopQuery, flattenConnection} from '@shopify/hydrogen';
import gql from 'graphql-tag';
import {Link} from '@shopify/hydrogen';

function StorefrontInfo({firstProduct}) {
  return (
    <div className="bg-white p-12 shadow-xl rounded-xl text-gray-900 w-3/6 ">
      <Link
        to={`/products/${firstProduct.handle}`}
        className="text-md font-bold hover:underline"
      >
        <h2 className="text-2xl font-bold mb-4">{firstProduct.title}</h2>
        <img src={firstProduct.featuredImage.url} alt={firstProduct.title} />
      </Link>
    </div>
  );
}

export default function Hero({}) {
  const {data} = useShopQuery({query: QUERY});
  const shopName = data ? data.shop.name : '';
  const products = data && flattenConnection(data.products);

  const firstProduct = products ? products[0] : '';
  const firstProductImage = products;

  return (
    <div className="text-gray-900 pt-16 rounded-[40px] my-16 px-4 xl:px-12 bg-gradient-to-b from-white -mx-4 xl:-mx-12">
      <div className="text-center mb-16">
        <h1 className="font-extrabold mb-4 text-5xl md:text-7xl">
          Welcome to {shopName}
        </h1>
        <h2 className="font-semibold mb-4 text-5xl md:text-4xl">
          Watch our star product
        </h2>
      </div>
      <div className="grid grid-cols-1 content-center place-items-center">
        <StorefrontInfo firstProduct={firstProduct} />
      </div>
    </div>
  );
}

const QUERY = gql`
  query heroContent {
    shop {
      name
    }
    products(first: 1) {
      edges {
        node {
          handle
          title
          featuredImage {
            url
          }
        }
      }
    }
  }
`;
