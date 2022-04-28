import * as THREE from 'three'
import {CenterCubeCreator, CornerCubeCreator, SideCubeCreator} from "./cubeCreator";
import {Mesh} from "three";

export default class Scene extends THREE.Scene {
    public initialize(): void {
        const createRubik = (): void => {
            const cubes: THREE.Mesh[] = [];

            const core = (): Mesh => {
                const cube = new CenterCubeCreator().mesh;
                cube.name = 'core';
                return cube;
            }

            const whiteCenter = (): Mesh => {
                const cube = new CenterCubeCreator(0xffffff).mesh;
                cube.name = 'whiteCenter';
                cube.position.y = 1;
                return cube;
            }

            const whiteBlueSide = (): Mesh => {
                const cube = new SideCubeCreator(0x0000ff, 0xffffff).mesh;
                cube.name = 'whiteBlueSide';
                cube.position.y = 1.0;
                cube.position.x = 1.0;
                return cube;
            }

            const whiteRedSide = (): Mesh => {
                const cube = new SideCubeCreator(0xff0000, 0xffffff).mesh;
                cube.name = 'whiteRedSide';
                cube.position.y = 1.0;
                cube.position.z = 1.0;
                cube.rotateY(-Math.PI / 2)
                return cube;
            }

            const whiteGreenSide = (): Mesh => {
                const cube = new SideCubeCreator(0x00ff00, 0xffffff).mesh;
                cube.name = 'whiteGreenSide';
                cube.position.y = 1.0;
                cube.position.x = -1.0;
                cube.rotateY(Math.PI)
                return cube;
            }

            const whiteOrangeSide = (): Mesh => {
                const cube = new SideCubeCreator(0xFFAE00, 0xffffff).mesh;
                cube.name = 'whiteOrangeSide';
                cube.position.y = 1.0;
                cube.position.z = -1.0;
                cube.rotateY(Math.PI * 0.5)
                return cube;
            }

            const whiteBlueRedCorner = (): Mesh => {
                const cube =
                    new CornerCubeCreator(0x0000ff, 0xffffff, 0xff0000).mesh;
                cube.name = 'whiteBlueRedCorner';
                cube.position.set(1, 1, 1)
                return cube;
            }

            const whiteGreenRedCorner = (): Mesh => {
                const cube =
                    new CornerCubeCreator(0xff0000, 0xffffff, 0x00ff00).mesh;
                cube.name = 'whiteGreenRedCorner';
                cube.position.set(-1, 1, 1)
                cube.rotateY(-Math.PI / 2)
                return cube;
            }

            const whiteGreenOrangeCorner = (): Mesh => {
                const cube =
                    new CornerCubeCreator(0x00ff00, 0xffffff, 0xFFAE00).mesh;
                cube.name = 'whiteGreenOrangeCorner';
                cube.position.set(-1, 1, -1)
                cube.rotateY(Math.PI)
                return cube;
            }

            const whiteBlueOrangeCorner = (): Mesh => {
                const cube =
                    new CornerCubeCreator(0xFFAE00, 0xffffff, 0x0000ff).mesh;
                cube.name = 'whiteBlueOrangeCorner';
                cube.position.set(1, 1, -1)
                cube.rotateY(Math.PI / 2)
                return cube;
            }

            const redCenter = (): Mesh => {
                const cube = new CenterCubeCreator(0xff0000).mesh;
                cube.name = 'redCenter';
                cube.position.set(0, 0, 1)
                return cube;
            }

            const orangeCenter = (): Mesh => {
                const cube = new CenterCubeCreator(0xFFAE00).mesh;
                cube.name = 'orangeCenter';
                cube.position.set(0, 0, -1)
                return cube;
            }

            const blueCenter = (): Mesh => {
                const cube = new CenterCubeCreator(0x0000ff).mesh;
                cube.name = 'blueCenter';
                cube.position.set(1, 0, 0)
                return cube;
            }

            const greenCenter = (): Mesh => {
                const cube = new CenterCubeCreator(0x00ff00).mesh;
                cube.name = 'greenCenter';
                cube.position.set(-1, 0, 0)
                return cube;
            }

            const redBlueSide = (): Mesh => {
                const cube = new SideCubeCreator(0x0000ff, 0xff0000).mesh;
                cube.name = 'redBlueSide';
                // cube.position.y = 1.0;
                cube.position.set(1, 0, 1)
                cube.rotateX(Math.PI / 2)
                return cube;
            }

            const redGreenSide = (): Mesh => {
                const cube = new SideCubeCreator(0x00ff00, 0xff0000).mesh;
                cube.name = 'redGreenSide';
                // cube.position.y = 1.0;
                cube.position.set(-1, 0, 1)
                cube.rotateX(Math.PI / 2)
                cube.rotateY(Math.PI)
                return cube;
            }

            const greenOrangeSide = (): Mesh => {
                const cube = new SideCubeCreator(0x00ff00, 0xFFAE00).mesh;
                cube.name = 'greenOrangeSide';
                // cube.position.y = 1.0;
                cube.position.set(-1, 0, -1)
                cube.rotateX(-Math.PI / 2)
                cube.rotateY(Math.PI)
                return cube;
            }

            const blueOrangeSide = (): Mesh => {
                const cube = new SideCubeCreator(0x0000ff, 0xFFAE00).mesh;
                cube.name = 'blueOrangeSide';
                // cube.position.y = 1.0;
                cube.position.set(1, 0, -1)
                cube.rotateX(-Math.PI / 2)
                return cube;
            }

            const yellowCenter = (): Mesh => {
                const cube = new CenterCubeCreator(0xffff00).mesh;
                cube.name = 'yellowCenter';
                cube.position.set(0, -1, 0)
                return cube;
            }

            const yellowRedSide = (): Mesh => {
                const cube = new SideCubeCreator(0xff0000, 0xffff00).mesh;
                cube.name = 'yellowRedSide';
                cube.position.set(0, -1, 1)
                cube.rotateZ(Math.PI)
                cube.rotateY(-Math.PI / 2)
                return cube;
            }

            const yellowBlueSide = (): Mesh => {
                const cube = new SideCubeCreator(0xffff00 ,0x0000ff).mesh;
                cube.name = 'yellowBlueSide';
                cube.position.set(1, -1, 0)
                cube.rotateZ(-Math.PI / 2)
                return cube;
            }

            const yellowGreenSide = (): Mesh => {
                const cube = new SideCubeCreator(0x00ff00 , 0xffff00).mesh;
                cube.name = 'yellowGreenSide';
                cube.position.set(-1, -1, 0)
                cube.rotateZ(Math.PI)
                return cube;
            }

            const yellowOrangeSide = (): Mesh => {
                const cube = new SideCubeCreator(0xFFAE00, 0xffff00).mesh;
                cube.name = 'yellowOrangeSide';
                cube.position.set(0, -1, -1)
                cube.rotateY(Math.PI / 2)
                cube.rotateX(Math.PI)
                return cube;
            }



            cubes.push(
                // core
                core(),

                // top row
                // whiteCenter(),
                // whiteBlueSide(),
                // whiteRedSide(),
                // whiteGreenSide(),
                // whiteOrangeSide(),
                // whiteBlueRedCorner(),
                // whiteGreenRedCorner(),
                // whiteGreenOrangeCorner(),
                // whiteBlueOrangeCorner(),

                // middle row
                // redCenter(),
                // blueCenter(),
                // greenCenter(),
                // orangeCenter(),
                // redBlueSide(),
                // redGreenSide(),
                // greenOrangeSide(),
                // blueOrangeSide(),

                // bottom row
                yellowCenter(),
                yellowRedSide(),
                yellowBlueSide(),
                yellowGreenSide(),
                yellowOrangeSide()
            )

            const addCubesToScene = () => {
                const addCubes = (mesh: Mesh) => {
                    this.add(mesh)
                }
                cubes.forEach(addCubes)
            }
            addCubesToScene();
        }
        createRubik();

        const addAmbientLight = (): void => {
            const light = new THREE.AmbientLight(0xffffff); // soft white light
            this.add(light);
        }
        addAmbientLight();

        console.log(this)
    }

    public update(): void {
    }
}