function main() {
    const canvas = document.getElementById("renderCanvas");
    const engine = new BABYLON.Engine(canvas, true);

    const createScene = function () {
        const scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color4(0, 0, 0, 0); // 背景を透明にする

        const camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);
        camera.setPosition(new BABYLON.Vector3(0, 0, 5));
        camera.lowerRadiusLimit = 2;
        camera.attachControl(canvas, true);

        const light = new BABYLON.PointLight("light", new BABYLON.Vector3(20, 20, 0), scene);

        // GLTFファイルを指定する
        BABYLON.SceneLoader.Append("", "model/maxwell_the_cat_dingus.glb", scene, function (scene) {
            scene.createDefaultCameraOrLight(true, true, true);
            scene.activeCamera.alpha += Math.PI;
        });

        return scene;
    };

    const sample3d = createScene();

    function renderLoop() {
        sample3d.render();
    }

    engine.runRenderLoop(renderLoop);

    window.addEventListener("resize", function () {
        engine.resize();
    });
}
window.addEventListener('DOMContentLoaded', main);