import React, { useState } from "react"
import { Canvas } from "react-three-fiber"
import { useSpring, a } from 'react-spring/three';
import "./style.css"


const Box = () => {
    const [hovered, setHovered] = useState (false)
    const [active, setActive] = useState (false)
    const props = useSpring ({
        
        scale :active ? [1.5, 1.5, 1.5] : [1, 1, 1],
        color: hovered ? "hotpink" : "blue",
    })
                            
    return (
            <a.mesh
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => setActive(!active)}
            scale={props.scale}
            >
    
    <boxBufferGeometry attach="geometry" arg  s={[1, 1, 1]} />
    <meshBasicMaterial attach="material" color={props.color} />
</a.mesh>
 )
}



export default () => (
                      <Canvas>
    <Box />
                      </Canvas>
)
