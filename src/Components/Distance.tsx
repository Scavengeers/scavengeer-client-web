import { useRef, useState } from "react";
import Haversine from "./Helpers/Haversine";
import React, { useEffect, type FC, type ReactElement } from "react";
import Geolocation from "./Helpers/Geolocation";

interface props {
  currentCoords: number[] | null;
  targetCoords: number[] | null
}

const Distance = (props: props): ReactElement => {
  const { currentCoords, targetCoords } = props

  const { haversineDistance } = Haversine()
  const longitude = currentCoords ? currentCoords[0] : null;
  const latitude = currentCoords ? currentCoords[1] : null;
  const [distance, setDistance] = useState<number | null>(null);

  useEffect(() => {
    if (currentCoords && currentCoords[0] && currentCoords[1] &&
      targetCoords && targetCoords[0] && targetCoords[1]) {
      setDistance(Math.round(haversineDistance(currentCoords, targetCoords)))
    }
  }, [currentCoords, targetCoords])

  return (
    <>
      <h1 className="self-center">Distance from target</h1>
      <h1 className="self-center p-1 text-2xl text-center uppercase font-heading">
        {distance} meters
      </h1>
    </>
  );
}

export default Distance;