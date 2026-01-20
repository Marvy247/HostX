import { type MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HostX",
    short_name: "HostX",
    description:
      "HostX is a decentralized platform for creating and managing events. Using the Stellar blockchain, we provide a secure and transparent way to manage events.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
  };
}
