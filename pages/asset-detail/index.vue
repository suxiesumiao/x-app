<template>
  <view class="asset-detail">
    <u-navbar
        :borderBottom="false"
        :customBack="back"
        backIconName="arrow-leftward"
        titleSize="34"
        :background="background"
        title="资产详情">
<!--      <view slot="right" class="check-detail" @click="forAssetRecord">-->
<!--        <u-icon name="order" size="38"></u-icon>-->
<!--      </view>-->
    </u-navbar>

    <nnkjc-detail-group>
      <nnkjc-detail-item
          detailTitle="资产编号"
          :detailContent="detail.code"
      >
      </nnkjc-detail-item>
      <nnkjc-detail-item
          detailTitle="业务专业"
          :detailContent="detail.proTypeText"
      >
      </nnkjc-detail-item>
      <nnkjc-detail-item
          detailTitle="设备专业"
          :detailContent="detail.className"
      >
      </nnkjc-detail-item>
      <nnkjc-detail-item
          detailTitle="设备名称"
          :detailContent="detail.name"
      >
      </nnkjc-detail-item>
      <nnkjc-detail-item
          detailTitle="序列号"
          :detailContent="detail.outerId"
      >
      </nnkjc-detail-item>
      <nnkjc-detail-item
          detailTitle="规程型号"
          :detailContent="detail.modelName"
      >
      </nnkjc-detail-item>
      <nnkjc-detail-item
          detailTitle="生产厂家"
          :detailContent="detail.factoryName"
      >
<!--        <view slot="content">-->
<!--          <u-parse :html="detail.content"></u-parse>-->
<!--        </view>-->
      </nnkjc-detail-item>

      <nnkjc-detail-item
          detailTitle="购置日期"
          :detailContent="detail.installDate"
      >
      </nnkjc-detail-item>

      <nnkjc-detail-item
          detailTitle="使用周期"
          :detailContent="detail.useCycle"
      >
      </nnkjc-detail-item>
      <nnkjc-detail-item
          detailTitle="资产状态"
          :detailContent="detail.statusText"
          :gap="false"
      >
      </nnkjc-detail-item>

    </nnkjc-detail-group>

    <nnkjc-detail-group>
      <nnkjc-detail-item
          detailTitle="楼宇楼层"
          :detailContent="(detail.buildingName || '') + '-' + (detail.floorName || '')"
      >
      </nnkjc-detail-item>
      <nnkjc-detail-item
          detailTitle="设备位置"
          :detailContent="detail.installPos"
      >
      </nnkjc-detail-item>
      <nnkjc-detail-item
          detailTitle="上级配电"
          :detailContent="detail.superiorPower"
      >
      </nnkjc-detail-item>
      <nnkjc-detail-item
          detailTitle="下级配电"
          :detailContent="detail.subPower"
      >
      </nnkjc-detail-item>

<!--      <nnkjc-detail-item-->
<!--          detailTitle="点位号"-->
<!--          :detailContent="detail.point"-->
<!--      >-->
<!--      </nnkjc-detail-item>-->

      <nnkjc-detail-item
          detailTitle="生产日期"
          :detailContent="detail.productDate"
      >
      </nnkjc-detail-item>

      <nnkjc-detail-item
          detailTitle="最近维保日期"
          :detailContent="detail.lastMaintDate"
      >
      </nnkjc-detail-item>

      <nnkjc-detail-item
          detailTitle="维保周期"
          :detailContent="detail.maintCycle"
      >
      </nnkjc-detail-item>

      <nnkjc-detail-item
          detailTitle="质保期"
          :detailContent="detail.warranty"
      >
      </nnkjc-detail-item>

<!--      <nnkjc-detail-item-->
<!--          detailTitle="BIM编码"-->
<!--          :detailContent="detail.bimCode"-->
<!--      >-->
<!--      </nnkjc-detail-item>-->

<!--      <nnkjc-detail-item-->
<!--          detailTitle="BIM初始化参数"-->
<!--          :detailContent="detail.bimParam"-->
<!--      >-->
<!--      </nnkjc-detail-item>-->

      <nnkjc-detail-item
          detailTitle="归属部门"
          :detailContent="detail.maintDeptName"
      >
      </nnkjc-detail-item>

      <nnkjc-detail-item
          detailTitle="归属人"
          :detailContent="detail.maintStaffName"
      >
      </nnkjc-detail-item>

      <nnkjc-detail-item
          detailTitle="使用部门"
          :detailContent="detail.useDeptName"
      >
      </nnkjc-detail-item>

      <nnkjc-detail-item
          detailTitle="使用人"
          :detailContent="detail.useStaffName"
      >
      </nnkjc-detail-item>

      <nnkjc-detail-item
          detailTitle="维保员"
          :detailContent="detail.maintStaffName"
      >
      </nnkjc-detail-item>

      <nnkjc-detail-item
          detailTitle="维保员电话号码"
          :detailContent="detail.maintStaffTel"
      >
      </nnkjc-detail-item>


      <nnkjc-detail-item
          detailTitle="运行状态"
          :detailContent="detail.statusFlag === '1'? '正常': '异常'"
      >
      </nnkjc-detail-item>

      <nnkjc-detail-item
          detailTitle="是否报警"
          :detailContent="detail.alarmFlag === '1'? '是':'否'"
      >
      </nnkjc-detail-item>

      <nnkjc-detail-item
          detailTitle="备注"
          :detailContent="detail.remarks"
          :gap="false"
      >
      </nnkjc-detail-item>
    </nnkjc-detail-group>

    <!--  查看维修记录 -->
    <view>
      <view class="save-tasks-inner-wrapper margin-normal radius-normal">
        <u-button ripple plain @click="forAssetRecord">
          <text style="color: #24a27c;">查看维修记录</text>
        </u-button>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "assetDetail",
    data() {
      return {
        background: {
          'background': '#f2f2f8'
        },
        detail: {},
        options: {},
        query: "",
        projectImageSrc: ""
      }
    },
    onLoad(options) {
      this.options = Object.assign({}, options);
      this.query = this.$u.queryParams(this.options);
    },
    onShow() {
      this.getDetail();
    },
    methods: {
      back() {
        uni.reLaunch({
          url: "/pages/home/index"
        })
      },
      forAssetRecord() {
        uni.navigateTo({
          url: "/pages/home/maint-record/index" + this.query
        })
      },
      getDetail() {
        const query = this.$u.queryParams(this.options);
        this.$u
            .get("/asset/getAssetByQrcode" + query)
            .then(res => {
              if (res.data) {
                this.detail = res.data;
                if(this.detail.buldArea) {
                  this.detail.buldArea += "平方米";
                }
              } else {
                this.detail = {};
                this.back();
              }
            })
            .catch(err => {
              console.log(err);
            });
      }
    }
  }
</script>

<style scoped>
  .asset-detail {
    padding-bottom: 20px!important;
  }
  .check-detail {
    margin-right: 30px;
  }
</style>