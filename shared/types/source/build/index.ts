interface MainBuild {
  target: "main";
}

interface PreloadBuild {
  target: "preload";
}

interface RendererBuild {
  target: "renderer";
}

interface SharedBuild {
	mode?: "development" | "production";
}

export type IBuild = SharedBuild & (
  MainBuild | PreloadBuild | RendererBuild
);