module.exports = {
  docs: [
    {
      type: "category",
      label: "시작하기",
      items: ["start/start"]
    },
    {
      type: "category",
      label: "학교 정보",
      items: ["school/introduce"]
    },
    {
      type: "category",
      label: "면접 질문",
      items: ["interview/frontend", "interview/backend", "interview/android", "interview/ios"]
    },
    {
      type: "category",
      label: "웹",
      items: [
        {
          type: "category",
          label: "HTML",
          items: ["web/html/structure", "web/html/doctype", "web/html/element"]
        }
      ]
    },
    {
      type: "category",
      label: "iOS",
      items: [
        {
          type: "category",
          label: "Swift",
          items: ["ios/swift/arc", "ios/swift/closure"]
        }
      ]
    }
  ]
};
