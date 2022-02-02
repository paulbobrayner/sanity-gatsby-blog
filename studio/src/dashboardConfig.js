export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61fa2f29e9ce91c433617ed9",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-zj51riob",
                  apiId: "43ff80a2-bf90-4ed4-ad32-5a7f127bb62e",
                },
                {
                  buildHookId: "61fa2f250ce031c0f8f26d1d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-xtnmu7w6",
                  apiId: "72af86f0-7b50-4a39-b826-2ca21d91320c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/paulbobrayner/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-xtnmu7w6.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
