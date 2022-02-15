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
        gl: any;
    }

    const three: ThreeObj={
      scene: new THREE.Scene(),
      camera: new THREE.PerspectiveCamera(),
      geometry: null,
      material: null,
      gl: null,
      renderer: null
    };

    const onContextCreate = gl => {
      three.gl = gl;
      // that.gl.canvas = {'100%', '100%'}

      three.gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      three.gl.clearColor(0, 1, 1, 1);

      // Create vertex shader (shape & position)
      const vert = three.gl.createShader(gl.VERTEX_SHADER);
      three.gl.shaderSource(vert, `
      void main(void) {
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        gl_PointSize = 150.0;
      }
    `,);
      three.gl.compileShader(vert);

      // Create fragment shader (color)
      const frag = three.gl.createShader(gl.FRAGMENT_SHADER);
      three.gl.shaderSource(frag, `
      void main(void) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
      }
    `,);
      three.gl.compileShader(frag);

      // Link together into a program
      const program = three.gl.createProgram();
      three.gl.attachShader(program, vert);
      three.gl.attachShader(program, frag);
      three.gl.linkProgram(program);
      three.gl.useProgram(program);

      three.gl.clear(three.gl.COLOR_BUFFER_BIT);
      three.gl.drawArrays(three.gl.POINTS, 0, 1);

      three.gl.flush();
      three.gl.endFrameEXP();
    };

    return (
      <GLView style={
        {
          width: '100%',
          height: '100%'
        }
      }
      onContextCreate={onContextCreate}/>
    );
};

export default SoldierThree;

