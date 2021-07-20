const dictMapPart = {
  messageType: {
    "1": "会议通告",
    "2": "奖惩通告",
    "3": "活动通知",
    "4": "审批通知",
  },
  sex: [{
    text: '女',
    value: '0'
  }, {
    text: '男',
    value: '1'
  }],
  politicalStatus: [{
    text: '群众',
    value: '0'
  }, {
    text: '党员',
    value: '1'
  }, {
    text: '共青团员',
    value: '3'
  }, {
    text: '其他',
    value: '4'
  }],
  education: [
    {
      text: '大专',
      value: '0'
    }, {
      text: '本科',
      value: '1'
    }, {
      text: '硕士',
      value: '3'
    }, {
      text: '博士',
      value: '4'
    }
  ],
  maritalStatus: [
    {
      text: '未婚',
      value: '0'
    }, {
      text: '已婚',
      value: '1'
    }, {
      text: '离异',
      value: '3'
    }, {
      text: '丧偶',
      value: '4'
    }
  ]
}

export default dictMapPart