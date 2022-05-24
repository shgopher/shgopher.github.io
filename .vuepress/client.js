import { defineClientConfig } from "@vuepress/client";
import { addIcons } from "oh-vue-icons";
import {
  CoGit,
  FaFortAwesome,
  FaSatelliteDish,
  FaTag,
  OiGitCompare,
  OiRocket,
  RiBilibiliLine,
  RiBook2Fill,
  RiGithubLine,
  RiSailboatLine,
  RiVuejsLine,
  CoWechat,
  BiGithub,
  CoTiktok,
  FaProjectDiagram,
  LaGofore,
  AiOsf,
  FaStaylinked,
  BiTagsFill,
  HiSolidHome
} from "oh-vue-icons/icons";

addIcons(
  RiBilibiliLine,
  FaFortAwesome,
  FaTag,
  FaSatelliteDish,
  RiBook2Fill,
  RiVuejsLine,
  CoGit,
  RiGithubLine,
  OiGitCompare,
  OiRocket,
  RiSailboatLine,
  CoWechat,
  BiGithub,
  CoTiktok,
  FaProjectDiagram,
  LaGofore,
  AiOsf,
  FaStaylinked,
  BiTagsFill,
  HiSolidHome
);

export default defineClientConfig({});