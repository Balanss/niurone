import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Particle() {




  return (
<div className="relative z-[100000000000000000000]">
<Particles
      id="tsparticles"
      options={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            }
          }
        }
      }}
    />
</div>
  );
}
