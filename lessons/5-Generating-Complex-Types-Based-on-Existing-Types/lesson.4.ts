import { Project, TextLayer, ImageLayer, LayerType, Size } from "./types";
import { render } from "./render";

const projectSize: Size = {
  width: 512,
  height: 250
};

const textLayer: TextLayer = {
  type: LayerType.Text,
  maxWidth: 1000,
  position: { x: 128, y: 208 },
  color: "#e8166d",
  id: "10",
  rotation: 0,
  text: "Advanced TypeScript",
  fontSize: "20px"
};

const imageLayer: ImageLayer = {
  type: LayerType.Image,

  position: { x: 0, y: 0 },
  id: "20",
  rotation: 0,
  src: "ps-dark.png",
  maxBounds: { width: projectSize.width }
};

function setTextLayerProps(
  project: Project,
  id: string,
  props: Partial<TextLayer>
) {
  const layer = project.layers.find(l => l.id === id) as any;

  if (layer) {
    Object.entries(props).forEach(([k, v]) => {
      layer[k] = v;
    });
  }
}

const project: Project = {
  layers: [imageLayer, textLayer],
  size: projectSize
};

setTextLayerProps(project, "10", {
  text: "this is the updated text"
  // shouldnotwork: true
});

render(project);
