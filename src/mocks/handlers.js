import { rest } from "msw";
import { contents } from "./contentsData";
import { tags } from "./tagData";

export const handlers = [
  rest.get("/main", (req, res, ctx) => {
    const content = contents.reverse();
    return res(ctx.status(200), ctx.json(content));
  }),

  rest.get("/main/:id", (req, res, ctx) => {
    const { id } = req.params;
    const result = contents.find((content) => content.id === id);

    return res(ctx.status(200), ctx.json(result));
  }),

  rest.get("/main/newest", (req, res, ctx) => {
    const newestResult = [...contents].sort(
      (a, b) => b.createdAt - a.createdAt
    );

    return res(ctx.status(200), ctx.json(newestResult));
  }),

  rest.get("/main/liked", (req, res, ctx) => {
    const likedResult = [...contents].sort(
      (a, b) => b.likedCount - a.likedCount
    );

    return res(ctx.status(200), ctx.json(likedResult));
  }),

  rest.get("/search/:search", (req, res, ctx) => {
    const { search } = req.params;
    const searchResult = tags.filter((tag) => tag.includes(search));

    return res(ctx.status(200), ctx.json(searchResult));
  }),

  rest.post("/main", (req, res, ctx) => {
    const year = String(new Date().getFullYear());
    let month = String(new Date().getMonth() + 1);
    let day = String(new Date().getDate());

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    const createdAt = Number(year + month + day);

    const data = {
      id: contents.length + 1,
      image:
        "https://images.unsplash.com/photo-1603217192766-e9db2d08a0fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80",
      displayName: "테스트",
      isLiked: false,
      likedCount: 0,
      createdAt,
      avatar:
        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      spec: [
        {
          height: 180,
          weight: 72,
          shoeSize: 270,
        },
      ],
    };
    const reqData = req.body;

    const newData = Object.assign({}, data, reqData);
    contents.push(newData);
    return res(ctx.status(201), ctx.json(newData));
  }),

  rest.patch("/main/:id", (req, res, ctx) => {
    const { id } = req.params;
    const result = contents.find((content) => content.id === id);
    const findIdx = contents.findIndex((content) => content.id === id);
    const data = req.body;

    const putData = Object.assign({}, result, data);
    contents.splice(findIdx, 1, putData);
    return res(ctx.status(200), ctx.json(putData));
  }),

  rest.delete("/main/:id", (req, res, ctx) => {
    const { id } = req.params;
    const findIdx = contents.findIndex((content) => content.id === id);

    contents.splice(findIdx, 1);
    return res(ctx.status(204));
  }),

  rest.get("/main/search/:search", (req, res, ctx) => {
    const { search } = req.params;
    const tagResult = contents.filter((content) =>
      content.tags.includes(search)
    );

    return res(ctx.status(200), ctx.json(tagResult));
  }),
];

// {
//   tags: ["", ""],
//   contents: "",
//   information: [
//     {
//       link: "",
//       product: "",
//       size: "",
//     },
//   ],
// }
