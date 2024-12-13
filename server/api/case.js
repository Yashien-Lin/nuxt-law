// export default defineEventHandler(() => 'Hello World!');

export default defineEventHandler(() => {
  // 模擬延遲
  console.log('start');

  return [
      {
        id: 1,
        image: '/images/case1.jpg',
        title: '民事糾紛 - 房屋租賃糾紛',
        description: '張先生因租屋合約未到期即遭房東提前終止租約，並被要求立即搬離。房東同時拒絕退還租金押金，聲稱張先生違反了合約條款。'
      },
      {
        id: 2,
        image: '/images/case2.jpg',
        title: '公司法 - 股東爭議處理',
        description: '某科技公司兩位主要股東因業務擴展方向產生分歧，一方試圖動用公司資金進行未經核准的投資，另一方則擔心資金風險而堅決反對。'
      },
      {
        id: 3,
        image: '/images/case3.jpg',
        title: '刑事案件 - 誹謗罪辯護',
        description: '李女士因在社交媒體發表批評某企業的言論，被企業提告誹謗，要求公開道歉並賠償損失。'
      },
      {
        id: 4,
        image: '/images/case4.jpg',
        title: '勞動法 - 不當解僱',
        description: '陳先生在一家科技公司工作多年，卻因與主管意見不合突然被通知解僱，公司未支付資遣費，也未提供合理理由。'
      },
    ]
});

