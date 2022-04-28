import * as THREE from 'three'
import {Mesh} from 'three'

export abstract class CubeCreator {
    geometry = new THREE.BoxGeometry(1, 1, 1).toNonIndexed();
    material = new THREE.MeshBasicMaterial({color: 0xffffff});
    abstract mesh: Mesh;
}

export class CenterCubeCreator extends CubeCreator {
    mesh: Mesh;

    constructor(private color = 0xffffff) {
        super();
        this.material = new THREE.MeshBasicMaterial({color: this.color});
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }
}

export class SideCubeCreator extends CubeCreator {
    mesh: Mesh;

    constructor(private firstSideColor = 0x00ffff, private secondSideColor = 0xffffff) {
        super();
        this.material = new THREE.MeshBasicMaterial({vertexColors: true});


        const paintSides = () => {
            const colors: number[] = [];

            const calculateIndexAccordingToVertex = (index: number, vertexLocationInBuffer: number) => {
                return {
                    first: index + vertexLocationInBuffer,
                    second: index + vertexLocationInBuffer + 1,
                    third: index + vertexLocationInBuffer + 2
                };
            }

            const paintFirstFace = () => {
                const paintFirstTriangle = () => {
                    const INDEX_OF_FIRST_TRIANGLE = 0
                    for (let i = 0; i < 9; i += 3) {
                        const color = new THREE.Color(this.firstSideColor);
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_FIRST_TRIANGLE).first] = color.r;
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_FIRST_TRIANGLE).second] = color.g;
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_FIRST_TRIANGLE).third] = color.b;
                    }
                }
                paintFirstTriangle();

                const paintSecondTriangle = () => {
                    const INDEX_OF_SECOND_TRIANGLE = 9;
                    for (let i = 0; i < 9; i += 3) {
                        const color = new THREE.Color(this.firstSideColor);
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_SECOND_TRIANGLE).first] = color.r;
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_SECOND_TRIANGLE).second] = color.g;
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_SECOND_TRIANGLE).third] = color.b;
                    }
                }
                paintSecondTriangle();
            }
            paintFirstFace();

            const paintSecondFace = () => {
                const paintFirstTriangle = () => {
                    const INDEX_OF_FIRST_TRIANGLE = (9 * 4)
                    for (let i = 0; i < 9; i += 3) {
                        const color = new THREE.Color(this.secondSideColor);
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_FIRST_TRIANGLE).first] = color.r;
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_FIRST_TRIANGLE).second] = color.g;
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_FIRST_TRIANGLE).third] = color.b;
                    }
                }
                paintFirstTriangle();

                const paintSecondTriangle = () => {
                    const INDEX_OF_SECOND_TRIANGLE = (9 * 5)
                    for (let i = 0; i < 9; i += 3) {
                        const color = new THREE.Color(this.secondSideColor);
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_SECOND_TRIANGLE).first] = color.r;
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_SECOND_TRIANGLE).second] = color.g;
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_SECOND_TRIANGLE).third] = color.b;
                    }
                }
                paintSecondTriangle();
            }
            paintSecondFace();
            this.geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        }
        paintSides();
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }
}

export class CornerCubeCreator extends CubeCreator {
    mesh: Mesh;

    constructor(private firstSideColor = 0x00ffff, private secondSideColor = 0xffffff, private thirdSideColor = 0xffffff) {
        super();
        this.material = new THREE.MeshBasicMaterial({vertexColors: true});

        const paintSides = () => {
            const colors: number[] = [];

            const calculateIndexAccordingToVertex = (index: number, vertexLocationInBuffer: number) => {
                return {
                    first: index + vertexLocationInBuffer,
                    second: index + vertexLocationInBuffer + 1,
                    third: index + vertexLocationInBuffer + 2
                };
            }

            const paintFirstFace = () => {
                const paintFirstTriangle = () => {
                    const INDEX_OF_FIRST_TRIANGLE = 0
                    for (let i = 0; i < 9; i += 3) {
                        const color = new THREE.Color(this.firstSideColor);
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_FIRST_TRIANGLE).first] = color.r;
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_FIRST_TRIANGLE).second] = color.g;
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_FIRST_TRIANGLE).third] = color.b;
                    }
                }
                paintFirstTriangle();

                const paintSecondTriangle = () => {
                    const INDEX_OF_SECOND_TRIANGLE = 9;
                    for (let i = 0; i < 9; i += 3) {
                        const color = new THREE.Color(this.firstSideColor);
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_SECOND_TRIANGLE).first] = color.r;
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_SECOND_TRIANGLE).second] = color.g;
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_SECOND_TRIANGLE).third] = color.b;
                    }
                }
                paintSecondTriangle();
            }
            paintFirstFace();

            const paintSecondFace = () => {
                const paintFirstTriangle = () => {
                    const INDEX_OF_FIRST_TRIANGLE = (9 * 4)
                    for (let i = 0; i < 9; i += 3) {
                        const color = new THREE.Color(this.secondSideColor);
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_FIRST_TRIANGLE).first] = color.r;
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_FIRST_TRIANGLE).second] = color.g;
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_FIRST_TRIANGLE).third] = color.b;
                    }
                }
                paintFirstTriangle();

                const paintSecondTriangle = () => {
                    const INDEX_OF_SECOND_TRIANGLE = (9 * 5)
                    for (let i = 0; i < 9; i += 3) {
                        const color = new THREE.Color(this.secondSideColor);
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_SECOND_TRIANGLE).first] = color.r;
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_SECOND_TRIANGLE).second] = color.g;
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_SECOND_TRIANGLE).third] = color.b;
                    }
                }
                paintSecondTriangle();
            }
            paintSecondFace();

            const paintThirdFace = () => {
                const paintFirstTriangle = () => {
                    const INDEX_OF_FIRST_TRIANGLE = (9 * 8)
                    for (let i = 0; i < 9; i += 3) {
                        const color = new THREE.Color(this.thirdSideColor);
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_FIRST_TRIANGLE).first] = color.r;
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_FIRST_TRIANGLE).second] = color.g;
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_FIRST_TRIANGLE).third] = color.b;
                    }
                }
                paintFirstTriangle();

                const paintSecondTriangle = () => {
                    const INDEX_OF_SECOND_TRIANGLE = (9 * 9)
                    for (let i = 0; i < 9; i += 3) {
                        const color = new THREE.Color(this.thirdSideColor);
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_SECOND_TRIANGLE).first] = color.r;
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_SECOND_TRIANGLE).second] = color.g;
                        colors[calculateIndexAccordingToVertex(i, INDEX_OF_SECOND_TRIANGLE).third] = color.b;
                    }
                }
                paintSecondTriangle();
            }
            paintThirdFace();

            this.geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        }
        paintSides();
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }
}