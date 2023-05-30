import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import BlackAndWhiteColors from "./BlackAndWhiteColors";
import Colors from "./Colors";
import YellowAndBlackColors from "./YellowAndBlackColors";
import BlueColor from "./BlueColor";

const ProductsPage = () => {
  let colors = false;
  let blackAndWhiteColors = false;
  let yellowAndBlackColors = false;
  let blueColor = false;

  let params = useParams();
  const paramsId = Number(params.productId);
  console.log(paramsId)
  if (paramsId === 1) {
    colors = true;
  } else if (paramsId === 2) {
    blackAndWhiteColors = true;
  } else if (paramsId === 3) {
    yellowAndBlackColors = true;
  } else {
    blueColor = true;
  }

  return (
    <>
      {colors && <Colors />}
      {blackAndWhiteColors && <BlackAndWhiteColors />}
      {yellowAndBlackColors && <YellowAndBlackColors />}
      {blueColor && <BlueColor/>}
    </>
  );
};

export default ProductsPage;
