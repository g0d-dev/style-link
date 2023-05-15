const contents = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1603217192766-e9db2d08a0fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80",
    displayName: "최영웅",
    isLiked: false,
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    tags: ["#블레이저", "#탱크탑"],
    contents: "",
    spec: [
      {
        height: 188,
        weight: 75,
        shoeSize: 270,
      },
    ],
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1587754539999-b5f5492704c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
    displayName: "이승미",
    isLiked: true,
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    tags: ["#첼시부츠", "#슬랙스", "#트렌치코트"],
    contents: "",
    spec: [
      {
        height: 188,
        weight: 75,
        shoeSize: 270,
      },
    ],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1526540354-471ebff95055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80",
    displayName: "김용희",
    isLiked: false,
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    tags: ["#트러커자켓", "#프린팅티셔츠"],
    contents: "",
    spec: [
      {
        height: 188,
        weight: 75,
        shoeSize: 270,
      },
    ],
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1588187284031-cb3fa95ebb27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG9vdGR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    displayName: "이건희",
    isLiked: false,
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1587971315800-1fe31f4e9757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fG9vdGR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    tags: ["#셔츠", "#스웨터"],
    contents: "",
    spec: [
      {
        height: 188,
        weight: 75,
        shoeSize: 270,
      },
    ],
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1571075002844-e5180c614639?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fG9vdGR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    displayName: "윤복희",
    isLiked: false,
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1623682536896-d519751f2726?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG9vdGR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    tags: ["#ootd", "#캐주얼", "#플랫슈즈"],
    contents: "",
    spec: [
      {
        height: 188,
        weight: 75,
        shoeSize: 270,
      },
    ],
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1603217040830-34473db521a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fG9vdGR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    displayName: "이금희",
    isLiked: true,
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    tags: ["#나이키", "#런닝복"],
    contents: "",
    spec: [
      {
        height: 188,
        weight: 75,
        shoeSize: 270,
      },
    ],
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1621343342498-a0b6a9b40510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    displayName: "주호민",
    isLiked: false,
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1457075237321-d3278892dc01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["#셔츠", "#여자들이좋아하는"],
    contents: "",
    spec: [
      {
        height: 188,
        weight: 75,
        shoeSize: 270,
      },
    ],
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1662838643858-37b91af7af40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    displayName: "전종서",
    isLiked: true,
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1661379061418-b64210280cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMzfHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["#와이드팬츠", "#팔찌"],
    contents: "",
    spec: [
      {
        height: 188,
        weight: 75,
        shoeSize: 270,
      },
    ],
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1638898790370-fc2068b1f8b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    displayName: "카즈하",
    isLiked: false,
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1643104897341-c7b504c161f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ5fHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["#블랙코트", "#올블랙", "#비니"],
    contents: "",
    spec: [
      {
        height: 188,
        weight: 75,
        shoeSize: 270,
      },
    ],
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1517859832841-3cd5eebf5e51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    displayName: "코드쿤스트",
    isLiked: false,
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1587971315800-1fe31f4e9757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fG9vdGR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    tags: ["#데님자켓", "#분위기"],
    contents: "",
    spec: [
      {
        height: 188,
        weight: 75,
        shoeSize: 270,
      },
    ],
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1680180489469-a276cf057538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgxfHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    displayName: "김진영",
    isLiked: false,
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1643104896468-6471457f0062?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg1fHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["#동탄미시룩", "#원피스", "#맥시원피스"],
    contents: "",
    spec: [
      {
        height: 188,
        weight: 75,
        shoeSize: 270,
      },
    ],
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1550188053-b4e1e8e4f94f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg4fHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    displayName: "조승우",
    isLiked: true,
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1643104896347-9c2ce2446c02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk0fHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["#이지부스트", "#아디다스"],
    contents: "",
    spec: [
      {
        height: 188,
        weight: 75,
        shoeSize: 270,
      },
    ],
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1527698719334-d2cef360d0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA3fHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    displayName: "유재석",
    isLiked: false,
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1512236393941-3d6da97e56bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA4fHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["#남자캐주얼", "#볼캡", "#티셔츠"],
    contents: "",
    spec: [
      {
        height: 188,
        weight: 75,
        shoeSize: 270,
      },
    ],
  },
  {
    id: 14,
    image:
      "https://images.unsplash.com/photo-1643106038019-c5da70f4b31f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE2fHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    displayName: "이병건",
    isLiked: true,
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1643104897892-d6de362aacca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE1fHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["#아메카지", "#캐주얼", "#간지남"],
    contents: "",
    spec: [
      {
        height: 188,
        weight: 75,
        shoeSize: 270,
      },
    ],
  },
  {
    id: 15,
    image:
      "https://images.unsplash.com/photo-1649513008641-7fbc7ad6d9e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI3fHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    displayName: "최인철",
    isLiked: false,
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1643106217362-1344dd920485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM0fHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["#미니멀", "#체크셔츠"],
    contents: "",
    spec: [
      {
        height: 188,
        weight: 75,
        shoeSize: 270,
      },
    ],
  },
  {
    id: 16,
    image:
      "https://images.unsplash.com/photo-1551383136-8662bbfaf273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQzfHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    displayName: "지드래곤",
    isLiked: false,
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1654465371950-19479855cb76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQyfHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["#첫눈", "#방울모자"],
    contents: "",
    spec: [
      {
        height: 188,
        weight: 75,
        shoeSize: 270,
      },
    ],
  },
  {
    id: 17,
    image:
      "https://images.unsplash.com/photo-1623858897312-9cfd8755d79f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjU2fHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    displayName: "탁재훈",
    isLiked: false,
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1641856879556-c6fed6f5a26d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjYzfHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["#픽시", "#캐주얼", "#반스"],
    contents: "",
    spec: [
      {
        height: 188,
        weight: 75,
        shoeSize: 270,
      },
    ],
  },
  {
    id: 18,
    image:
      "https://images.unsplash.com/photo-1603449133876-211a797b2ad5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzA1fHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    displayName: "이동욱",
    isLiked: true,
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1570178484325-9d73fbaf04f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzA0fHxvb3RkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["#드레드", "#스키니진", "#남자들이좋아하는"],
    contents: "",
    spec: [
      {
        height: 188,
        weight: 75,
        shoeSize: 270,
      },
    ],
  },
];

export { contents };
