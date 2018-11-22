<template>
  <div class="home" ref="home">
    <div>
      <div class="banner" @click="goDepartment">
        <div class="logo flex flex-column" if="!userInfo.projectImage">
          <img class="logo-img" src="http://web.bihuyihu.com/static/img/logo2.svg"/>
          <div class="logo-text">庇护您的健康</div>
          <div class="mask">
            <div class="mask-text">{{userInfo.hospitalName}}</div>
          </div>
        </div>
        <div if="userInfo.projectImage" class="project-banner" :style="'background-image: url('+ userInfo.projectImage+ ')'">
          <div class="mask">
            <div class="mask-text">{{userInfo.hospitalName}}</div>
          </div>
        </div>
      </div>

      <div class="flex">
        <div for="labelIcon" :key="index" class="main-icon">
          <div class="icon">{{item.url}}</div>
          <div class="badge" if="item.nums">{{item.nums}}</div>
          <p>{{item.label}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as util from '../../util';

const labelIcon = [{
  label: '免费咨询',
  url: '/img/client_home_consult@2x.png',
  path: '/chatList',
  hasNew: false,
  nums: 0,
}, {
  label: '科室宣教',
  url: 'essay',
  path: '/education',
  hasNew: false,
  nums: 0,
}, {
  label: '健康问卷',
  url: 'questionaire',
  path: '/healthQuestionsList',
  hasNew: false,
  nums: 0,
}, {
  label: '预约床位',
  url: 'reserve',
  path: '/sickbed',
  hasNew: false,
  nums: 0,
}];

export default {
  data() {
    return {
      userInfo: {
        hospitalName: '壁虎E护'
      },
      labelIcon,
    };
  },
  methods: {
    // 跳转科室详情
    goDepartment() {
      console.log('todo');
    },

    getImgUrl(url) {
      return util.getImgPath(url);
    },
  },
};
</script>

<style lang="less" scoped>
@import "./home.less";
</style>
