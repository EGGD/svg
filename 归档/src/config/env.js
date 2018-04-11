/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * imgBaseUrl: 图片所在域名地址
 *
 */
let baseUrl;
let imgBaseUrl;

// development 开发环境
if (process.env.NODE_ENV === 'development') {
  // 正式库
  // baseUrl = 'http://221.214.76.67:8082'
  // imgBaseUrl = 'http://10.19.72.197:8001/'
  // 测试库
  baseUrl = 'http://218.108.93.246:11342/';
  imgBaseUrl = 'http://218.108.93.246:11342/';
  // 陈康
  // baseUrl = 'http://192.168.0.24:8080/'
  // imgBaseUrl = 'http://192.168.0.24:8080/'
} else {
  baseUrl = window.config.URL.baseUrl;
  imgBaseUrl = '';
}

export { baseUrl, imgBaseUrl };
