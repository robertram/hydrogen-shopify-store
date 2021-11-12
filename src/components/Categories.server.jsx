import {useShopQuery, flattenConnection} from '@shopify/hydrogen';
import gql from 'graphql-tag';
import {Image, Link} from '@shopify/hydrogen';

export default function Categories({}) {
  const {data} = useShopQuery({query: QUERY});
  const shopName = data ? data.shop.name : '';
  const products = data && flattenConnection(data.products);

  const firstProduct = products ? products[0] : '';
  const firstProductImage = products;
  const imageUrl = firstProduct.images.edges[0].node.transformedSrc;

  return (
    <div className="text-gray-900 pt-16 rounded-[40px] my-16 px-4 xl:px-12 bg-gradient-to-b from-white -mx-4 xl:-mx-12">
      <div className="text-center mb-16">
        <h1 className="font-extrabold mb-4 text-5xl md:text-7xl">
          Shop By Category
        </h1>
        <h2 className="font-semibold mb-4 text-5xl md:text-4xl">
          Watch our star product
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {data.collections.edges.map((item, index) => {
          return (
            <Link
              className="border-2 rounded-md p-6 border-gray-200"
              to={`collections/${item.node.handle}`}
              key={index}
            >
              <h3 className="font-bold mb-4 text-5xl md:text-4xl">
                {item.node.title}
              </h3>
              <img
                className="bg-white w-full transition-all duration-500 ease-in-out transform bg-center bg-cover object-center object-contain hover:scale-110 "
                src={item.node.image.url}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const QUERY = gql`
  query categoriesContent {
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
          images(first: 1) {
            edges {
              node {
                id
                originalSrc
                altText
                width
                height
                transformedSrc
              }
            }
          }
        }
      }
    }
    collections(first: 3) {
      edges {
        node {
          description
          handle
          id
          title
          image {
            ...ImageFragment
          }
        }
      }
    }
  }
  ${Image.Fragment}
`;
