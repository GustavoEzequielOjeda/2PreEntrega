import { Ring } from "@uiball/loaders";

const LoaderComponent = () => {
  return    <div style={{width: "100vw", height: "100vh", display: "flex", alignItems:"center", justifyContent:"center"}}>
    <Ring size={40} lineWeight={5} speed={2} color="black" />
  </div>;
}

export default LoaderComponent;
