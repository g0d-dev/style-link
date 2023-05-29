import { rest } from "msw";
import { contents } from "./contentsData";
import { tags } from "./tags";

export const handlers = [
  // ! 조회 요청
  // 메인페이지 목록 조회
  rest.get("/main", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(contents));
  }),

  // 메인페이지 상세페이지 조회
  rest.get("/main/:id", async (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.status(200),
      ctx.json(contents.find((content) => content.id === id))
    );
  }),

  rest.get("/search/:search", (req, res, ctx) => {
    const { search } = req.params;
    const searchResult = tags.filter((tag) => tag.includes(search));
    return res(ctx.status(200), ctx.json(searchResult));
  }),

  // ! 등록 요청
  // 메인페이지 데이터 추가
  rest.post("/main/:id", async (req, res, ctx) => {
    const { id } = req.params;
    const content = req.body;
    content.id = id;
    contents.data.push(content);
    return res(ctx.status(201));
  }),
];
