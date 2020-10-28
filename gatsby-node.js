/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

const team = [
  {
    id: "abhisek",
    name: "Abhisek Sarda",
    description: "Founder & Creative Director. Lego and Edison Bulb Lover",
  },
  {
    id: "indranil",
    name: "Indranil Udupi",
    description: "Project Manager. Turns up headphones way too loud",
  },
  {
    id: "sanjana",
    name: "Sanjana Hegde",
    description: "Graphic Designer. Chef and quisher of dog's faces",
  },
  {
    id: "priyanka",
    name: "Priyanka Poulose",
    description:
      "Graphic Designer. Architect too, once upon a time. Aspiring crazy cat lady",
  },
  {
    id: "vidit",
    name: "Vidit Agarwal",
    description: "Graphic Designer. Inhouse weeaboo & Dark Web enthusiast.",
  },
  {
    id: "chris",
    name: "Chris D'souza",
    description:
      "UI/UX Designer. Legitimately needs OCD treatment and to chill out a bit.",
  },
  {
    id: "jude",
    name: "Jude Gonsalves",
    description:
      "UI/UX Designer. Baker. You *have* to try his brookies sometime. Seriously.",
  },
  {
    id: "ishan",
    name: "Ishan Nahata",
    description:
      "UI/UX Designer. Enigma. Inhouse memelord. Dry humour kinda person",
  },
  {
    id: "jitesh",
    name: "Jitesh Gupta",
    description:
      "Studio Assistant. Dejected that TikTok is now banned. Still loves his bike though.",
  },
  {
    id: "prakash",
    name: "Prakash Solanki",
    description:
      "Studio Assistant. Kindest eyes and smile. But sounds scary when angry.",
  },
  {
    id: "bodoni",
    name: "Bodoni",
    description: "Chairperson. Loves his beanbag. Might secretly be a cat.",
  },
  {
    id: "gotham",
    name: "Gotham",
    description: "Definitely a dog, no doubt about it.",
  },
];

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  team.map((member) => {
    createPage({
      path: `/about/${member.id}`,
      matchPath: `/about/${member.id}`,
      context: {
        name: member.name,
      },
      component: path.resolve("src/components/modal/teamModal.js"),
    });
  });
};
