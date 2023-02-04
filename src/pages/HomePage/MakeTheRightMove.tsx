import { useLottie } from "lottie-react";
import Businessmen from "../../assets/businessmen.json";
import "../../styles/MakeTheRightMove.css";

export const MakeTheRightMove = () => {
  const options = {
    animationData: Businessmen,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <section className="MakeTheRightMove__gradient MakeTheRightMove">
      <div className="container_c right_move__container">
        <div className="move_container_right">
          <h2>Make The Right Move:</h2>
          <h4>Business Move</h4>
          <div className="hr_divider"></div>

          <p>
            We are a team of branding experts; marketing stragists, digital
            traders, designers and growth programmers. We use the strength of
            human psychology and our understanding of digital landscapes to help
            business attract customers.
          </p>
        </div>
        <div className="animate-file"> {View}</div>
      </div>
    </section>
  );
};
