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
                    "60c499a6e8a42beedd136de8",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-hvw6ifsc",
                  apiId: "108165dd-7a3e-4ce3-be65-245138071e25",
                },
                {
                  buildHookId: "60c499a65cb350d7646c6fbc",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-3yd6v1v7",
                  apiId: "a7806238-ecee-4333-aedc-ce9a9e86963d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Andre-NetBistrot/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-3yd6v1v7.netlify.app",
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
