import React from 'react';
import {View} from 'react-native';
import {GLView} from 'expo-gl';
import ExpoThree, {THREE} from 'expo-three';

const SoldierThree = () => {
    interface ThreeObj {
        scene: any;
        camera: any;
        renderer: any;
        geometry: any;
        material: any;
        ambientLight: any;
        pointLight: any;
        cube: any;
        gl: any;
    }

    // FIXME: 새로운 구분이 필요함, 가변적인 함수는 빼는 것이 좋은가?
    const three: ThreeObj={
      scene: new THREE.Scene(),
      camera: null,
      geometry: new THREE.BoxGeometry(1,1,1),
      material: new THREE.MeshPhongMaterial({
        color: 0x555555
      }),
      ambientLight: new THREE.AmbientLight(0x4000ff),
      pointLight: new THREE.PointLight(0xffffff, 6, 40),
      gl: null,
      cube: null,
      renderer: null
    };

    const onContextCreate = gl => {
      THREE.suppressExpoWarnings();

      three.gl = gl;
      three.gl.canvas = {
        width: '100%',
        height: '100%'
      };

      three.camera= new THREE.OrthographicCamera(-3*(gl.drawingBufferWidth / gl.drawingBufferHeight), 3*(gl.drawingBufferWidth / gl.drawingBufferHeight), 3, -3, 1, 400);
      three.camera.position.set(5,5,5);
      three.camera.lookAt(three.scene.position);

      three.cube = new THREE.Mesh(three.geometry, three.material);

      three.pointLight.position.set(10, 20, 15);
      three.scene.add(three.pointLight);

      // FIXME: Helpler
      three.scene.add(new THREE.GridHelper(10,10));

      three.scene.add(three.ambientLight);
      three.scene.add(three.cube);

      three.renderer = new ExpoThree.Renderer({
        gl, 
        pixelRatio: gl.scale, 
        width: gl.drawingBufferWidth,
        height: gl.drawingBufferHeight
      });
      three.renderer.setClearColor(0xffffff, 0);
      three.renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
      three.renderer.render(three.scene, three.camera);

      three.gl.endFrameEXP();
    };

    return (
      <GLView style={
        {
          width: '100%',
          height: '100%',
          backgroundColor: 'white'
        }
      }
      onContextCreate={onContextCreate}/>
    );
};

export default SoldierThree;

