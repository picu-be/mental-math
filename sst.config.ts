/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "mental-math",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const domainConfig = {
      domainName: "mental-math.pi-cube.com",
      redirects: ["www.mental-math.pi-cube.com"],
    };

    new sst.aws.Nextjs("MentalMath", {
      domain: $app.stage === "production" ? domainConfig : undefined,
    });
  },
});
