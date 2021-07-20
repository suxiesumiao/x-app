const ip = 'http://www.sdhnec.com/';
// const ip = 'http://10.168.1.184:8082/';
export default {
  statusTagMap: {
    '10': 'tag_new',
    '20': 'tag_sended',
    '30': 'tag_reveiced',
    '50': 'tag_finished',
    '90': 'tag_nok',
    '91': 'tag_ok'
  },
  ROUTE_MAP: {
    weixiu: {
      //  新建状态
      '10': '/pages/task-detail/index',
      //  20 准备委派 未维修
      '20': '/pages/task-detail/delegated',
      //  30 已经委派 已维修
      '30': '/pages/task-detail/delegated',
      //  已经维保完成
      '50': '/pages/task-detail/finished',
      //  验收
      '90': '/pages/task-detail/checked',
      '91': '/pages/task-detail/checked',
    },
    xuncha: {
      //  新建状态
      '10': '/pages/patrol-detail/index',
      //  已经委派 未接单
      '20': '/pages/patrol-detail/delegated',
      //  已经委派 已接单
      '30': '/pages/patrol-detail/delegated',
      //  已经巡查完成
      '50': '/pages/patrol-detail/finished',
      //  验收
      '90': '/pages/patrol-detail/checked',
      '91': '/pages/patrol-detail/checked',
    },
    weihu: {
      //  新建状态
      '10': '/pages/keepup-detail/index',
      //  已经委派 未接单
      '20': '/pages/keepup-detail/delegated',
      //  已经委派 已接单
      '30': '/pages/keepup-detail/delegated',
      //  已经巡查完成
      '50': '/pages/keepup-detail/finished',
      //  验收
      '90': '/pages/keepup-detail/checked',
      '91': '/pages/keepup-detail/checked',
    }
  },
  CYCLE_MAP: {
    year: '年',
    month: '月',
    week: '周',
    day: '日'
  },
  title: '',
  ip: ip,
  baseUrl: ip + 'hayner-system',
  // baseUrl: ip + '',
  online: true
}