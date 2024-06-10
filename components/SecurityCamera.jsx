import { Center, useGLTF } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import * as THREE from "three";
import VideoAnnotation from "./VideoAnnotation";
import { SecurityCameraModel } from "./SecurityCameraModel";
import { useState } from "react";

const SecurityCamera = ({ id, videoSrc }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <e.group theatreKey={`SecurityCameraGroup-${id}`}>
      <SecurityCameraModel
        onPointerEnter={() => {
          setShowVideo(true);
        }}
        onPointerLeave={() => {
          setShowVideo(false);
        }}
      />
      <e.mesh
        scale={0.5}
        theatreKey={`SecurityCameraSight-${id}`}
        position={[0.25, -0.24, 0.54]}
        rotation={[0.48, -1.1, 1.6]}
        onPointerEnter={() => {
          setShowVideo(true);
        }}
        onPointerLeave={() => {
          setShowVideo(false);
        }}
      >
        <coneGeometry args={[1, 2, 4, 1, true]} />
        <meshStandardMaterial
          color="green"
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </e.mesh>
      <VideoAnnotation src={videoSrc} show={showVideo} />
    </e.group>
  );
};

export default SecurityCamera;