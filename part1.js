function main() {
    const canvas = document.querySelector("#glCanvas");
    const gl = canvas.getContext("webgl");
    gl.clearColor(0.3921, 0.5843, 0.9294, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  }
  
  window.onload = main;
