import { Home } from "@home/Home";

/**
 * Defines the HomePage type.
 * @category Components
 * @example
 * xxx
 */
export type THomePage = {
  title: string;
} & typeof HomePageDefaultProps;

/**
 * Defines the Home default props.
 * @category Components
 * @example
 * xxx
 */
const HomePageDefaultProps = {
  title: "Home",
};

const HomePage = () => {
  return <Home />;
};

HomePage.defaultProps = HomePageDefaultProps;
export default HomePage;
