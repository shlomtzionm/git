import { useSelector } from "react-redux";
import { Numbers } from "../numbers/Numbers";
import { WelcomePic } from "../welcomePic/welcomePic";
import { RootState } from "../../store";
import { GetPets } from "../GetPets";


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
  } else if (isDog === "dogs" || isDog === "cats") {
    content =<>
    <GetPets />
    </> 
  }

  return <>{content}</>;
};
