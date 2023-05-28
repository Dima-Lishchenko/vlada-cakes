import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Circle = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: rgb(218, 78, 162);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
  color: #fff;

  @media only screen and (min-width: 922px) {
    width: 300px;
    height: 300px;
  }
`;

const Label = styled.p`
  font-size: 24px;
`;

const Number = styled.p`
  font-size: 50px;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const AnimatedCircle = ({ label, value, duration }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const circleRef = useRef(null);

  useEffect(() => {
    let startTime;
    let animationFrameId;
    let observer;

    const animate = (timestamp) => {
      // If startTime is not set, initialize it with the current timestamp
      if (!startTime) startTime = timestamp;
      // Calculate the progress of the animation by subtracting the startTime from the current timestamp
      const progress = timestamp - startTime;
      // Calculate the percentage of completion based on the progress and duration
      const percentComplete = progress / duration;

      const increment = value * percentComplete;
      setCurrentValue(increment >= value ? value : increment);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          new Promise((resolve) => setTimeout(resolve, 500))
            .then(clearTimeout)
            .then(() => {
              animationFrameId = requestAnimationFrame(animate);
              observer.unobserve(entry.target);
            });
        }
      });
    };

    observer = new IntersectionObserver(handleIntersection, { threshold: 1 });

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      // if (circleRef.current) observer.unobserve(circleRef.current)
    };
  }, [value, duration]);

  return (
    <div ref={circleRef}>
      <Circle>
        <Label>{label}</Label>
        <Number>{Math.round(currentValue)}</Number>
      </Circle>
    </div>
  );
};
