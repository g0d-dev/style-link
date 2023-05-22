import { rest } from "msw";
import { contents } from "./contentsData";

export const handlers = [
  // 목록 조회
  rest.get("/main", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(contents));
  }),

  // 목록 추가
  rest.post("/main", (req, res, ctx) => {
    contents.push(req.body);
    return res(ctx.status(201));
  }),
];
