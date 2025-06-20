import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Board from '@/views/board'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import hulirenyuan from '@/views/modules/hulirenyuan/list'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import xuanzefuwu from '@/views/modules/xuanzefuwu/list'
    import yanglaofuwu from '@/views/modules/yanglaofuwu/list'
    import jiankangzhuangkuang from '@/views/modules/jiankangzhuangkuang/list'
    import fuwuquyu from '@/views/modules/fuwuquyu/list'
    import fuwuleixing from '@/views/modules/fuwuleixing/list'
    import shequ from '@/views/modules/shequ/list'
    import systemintro from '@/views/modules/systemintro/list'
    import yonghu from '@/views/modules/yonghu/list'
    import discussyanglaofuwu from '@/views/modules/discussyanglaofuwu/list'
    import chat from '@/views/modules/chat/list'
    import config from '@/views/modules/config/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/hulirenyuan',
        name: '护理人员',
        component: hulirenyuan
      }
      ,{
	path: '/news',
        name: '娱乐资讯',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/xuanzefuwu',
        name: '选择服务',
        component: xuanzefuwu
      }
      ,{
	path: '/yanglaofuwu',
        name: '养老服务',
        component: yanglaofuwu
      }
      ,{
	path: '/jiankangzhuangkuang',
        name: '健康状况',
        component: jiankangzhuangkuang
      }
      ,{
	path: '/fuwuquyu',
        name: '服务区域',
        component: fuwuquyu
      }
      ,{
	path: '/fuwuleixing',
        name: '服务类型',
        component: fuwuleixing
      }
      ,{
	path: '/shequ',
        name: '社区',
        component: shequ
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/discussyanglaofuwu',
        name: '养老服务评论',
        component: discussyanglaofuwu
      }
      ,{
	path: '/chat',
        name: '反馈和建议',
        component: chat
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/newstype',
        name: '娱乐资讯分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/board',
    name: 'board',
    component: Board,
    meta: {icon:'', title:'board'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
