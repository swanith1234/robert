import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { iconPaths } from "../constants/index.js";
import Developer from "../components/Developer.jsx";
import CanvasLoader from "../components/Loading.jsx";

const WorkExperience = ({ userData }) => {
  const [animationName, setAnimationName] = useState("idle");
  const getTechnologyIcons = (technologies) => {
    return technologies.map((tech) => {
      const matchingIcon = iconPaths.find(
        (icon) => icon.name.toLowerCase() === tech.toLowerCase()
      );
      if (matchingIcon) {
        return (
          <img
            key={tech}
            src={matchingIcon.path}
            alt={tech}
            className="tech-logo w-8 h-8"
          />
        );
      }
      return (
        <span key={tech} className="tech-text">
          {tech}
        </span>
      ); // Fallback for unknown technologies
    });
  };

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {userData.experiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName("victory")}
                  onPointerOver={() => setAnimationName("victory")}
                  onPointerOut={() => setAnimationName("idle")}
                  className="work-content_container group"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.logo} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">
                      {item.companyName}
                    </p>
                    <p className="text-sm mb-5">
                      {item.role} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">
                      {item.description}
                    </p>
                    <p>getTechnologyIcons(item.technologies)</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
