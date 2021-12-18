// Components
import SmallScreen from "./smallScreen/smallScreen";
import BigScreen from "./bigScreen/bigScreen";

// Custome hooks
import WindowSizeInfo from "../../hooks/getWindowSize";

const Headerbar = () => {

  const { width } = WindowSizeInfo();

  return width >= 768 ? (

    <BigScreen />

  ) : (

    <SmallScreen />
    
  );
};

export default Headerbar;
