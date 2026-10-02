import type { PageContextServer } from "vike/types";
import { getPublicSiteInfo } from "../modules/site/service";

export async function onBeforeRender(pageContext: PageContextServer) {
  const site = await getPublicSiteInfo(pageContext.prisma);
  return {
    pageContext: {
      site,
      title: site?.siteName || "EK Card Store",
      description: site?.siteSubtitle || "A digital store powered by Cloudflare Workers",
    },
  };
}
