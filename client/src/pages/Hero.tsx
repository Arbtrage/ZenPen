import { useState } from "react";
import Audience from "../components/Cards/Audience";
import Content from "../components/Cards/Content";
import Keywords from "../components/Cards/Keywords";

const components = [
  {
    id: 1,
    name: "Define your Content",
    component: <Content />,
  },
  {
    id: 2,
    name: "Specify Keywords",
    component: <Keywords />,
  },
  {
    id: 3,
    name: "Identify your audience",
    component: <Audience />,
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const activeComponent = components[index];

  const handleComponentChange = (increment: number) => {
    const newIndex = index + increment;

    if (newIndex >= 0 && newIndex < components.length) {
      setIndex(newIndex);
    }
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content p-10 w-9/12 justify-center flex flex-col text-center">
        <div className="tabs">
          {components.map((comp, idx) => (
            <a
              key={comp.id}
              className={`tab tab-md tab-lifted ${
                idx === index ? "tab-active" : ""
              }`}
            >
              {comp.name}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-5 w-fit">
          <h1 className="text-5xl font-bold mb-10 mt-5">{activeComponent.name}</h1>
          <div className="artboard artboard-horizontal phone-1 pb-10" >{activeComponent.component}</div>
          <div className="flex flex-row gap-5 mt-5 justify-center">
            <button
              className="btn btn-secondary"
              onClick={() => handleComponentChange(-1)}
            >
              Go Back
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleComponentChange(1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
