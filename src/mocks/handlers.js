import { rest } from "msw";
import { contents } from "./contentsData";
import { tags } from "./tags";

export const handlers = [
  rest.get("/main", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(contents));
  }),

  rest.post("/main", (req, res, ctx) => {
    contents.push(req.body);
    return res(ctx.status(201));
  }),

  rest.get("/search/:search", (req, res, ctx) => {
    const { search } = req.params;
    const searchResult = tags.filter((tag) => tag.includes(search));
    return res(ctx.status(200), ctx.json(searchResult));
  }),
];
