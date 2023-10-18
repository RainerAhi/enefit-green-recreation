import { Suspense, useRef, useState, useLayoutEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Center, AccumulativeShadows, RandomizedLight, OrbitControls, Environment, Lightformer, MeshReflectorMaterial, Sparkles, Float, MeshPortalMaterial, useTexture, useHelper, Stage, SoftShadows, Effects } from '@react-three/drei'
import { easing } from 'maath'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from "@react-three/fiber";
import * as THREE from "three"
import CustomEffects from './Effects'
import HouseModel from './House'
gsap.registerPlugin(ScrollTrigger)

export default function Experience() {

  const { camera, scene } = useThree()

  const controlsRef = useRef()

  const tl = gsap.timeline()

  useLayoutEffect(() => {

    //FIRST TO SECOND

    tl
    .to(camera.position, {
      x: -10,
      y: 1.5,
      z: 2,
      scrollTrigger: {
        trigger: ".second-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(scene.rotation, {
      x: 0,
      y: 0,
      z: 0,
      scrollTrigger: {
        trigger: ".second-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(scene.position, {
      x: 0,
      y: 1.75,
      z: 0,
      scrollTrigger: {
        trigger: ".second-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })




    .to(controlsRef.current.target, {
      x: 0,
      y: 0,
      z: 2,
      scrollTrigger: {
        trigger: ".second-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })
    
    //SECOND TO THIRD

    .to(camera.position, {
      x: -2.1,
      y: 5.7,
      z: -7.2,
      scrollTrigger: {
        trigger: ".forth-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(controlsRef.current.target, {
      x: 2,
      y: -0.3,
      z: -1.8,
      scrollTrigger: {
        trigger: ".forth-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })
    
  }, [])


  //BUTTON GSAP ANIMATION

	// document.querySelectorAll('.button--test')?.forEach(item => {
	// 	item.addEventListener('click', () => {
	// 		window.scrollTo({ top: 2000, left: 0, behavior: 'smooth' })
	// 	})
	// })

  // const button = document.getElementById("button--test");

  // function handleButtonClick() {

  //   tl.to(camera.position, {
  //     x: 8,
  //     y: 4,
  //     z: 2,
  //     duration: 1,
  //     ease: "power2.out"
  //   });

  //   console.log("clicked button")

  // }

  // button.addEventListener("click", handleButtonClick);

  return (
    <>
      <SoftShadows intensity={ 20 } />
      {/* <Sparkles 
        count={ 100 }
        color={ "white" }
        scale={ 20 }
        size={ 4 }
      /> */}
        <HouseModel position={ [ 0, -3.25, 0 ] }  scale={ 0.5 } />
      <OrbitControls ref={controlsRef} minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 1} enableZoom={ false } enableRotate={ true } />
      <Environment preset='sunset' />
      </>
  )
}

function CameraRig({ children }) {
  const group = useRef()
  useFrame((state, delta) => {
    easing.dampE(group.current.rotation, [0, -state.pointer.x / 10, 0], 0.5, delta)
  })
  return <group ref={group}>{children}</group>
}