import { useSelector } from "react-redux";
import { Numbers } from "../numbers/Numbers";
import { WelcomePic } from "../welcomePic/welcomePic";
import { RootState } from "../../store";
import { GetPets } from "../GetPets";
import { AddPet } from "../addPet/AddPet";


export const HomePage = () => {
  const isDog = useSelector((state: RootState) => state.isDog.isDog);

  let content;

  if (isDog === "home page") {
    content = (
      <>
        <WelcomePic />
        <Numbers />
      </>
    );
  } else if (isDog === "dogs") {
    content = <>
    <AddPet kind="dog"/>
    <GetPets />
    </> 
  } else if(isDog === "cats"){
    content = <>
    <AddPet kind="cat"/>
    <GetPets />
    </> 
  }

  return <>{content}</>;
};
