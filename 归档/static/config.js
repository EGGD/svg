/**
 * 正式发布地址
 *
 * baseUrl: 接口地址
 * imgBaseUrl: 图片所在域名地址
 * zxtUrl 子系统
 * znfxUrl 智能分析子系统
 * streetMapServerUrl 地图
 * communityMapServerUrl 地图
 * gridMapServerUrl 地图
 */
// baseUrl = 'http://192.168.1.150:27403';
// baseUrl = "http://localhost:27403"

window.config = {
  URL: {
    // baseUrl: "http://218.108.93.246:11586",
    baseUrl: 'http://218.92.187.70:10004/',
    zxtUrl: 'http://218.108.93.246:11583',
    znfxUrl: 'http://218.108.93.246:11584',
    streetMapServerUrl: 'http://218.108.93.246:11551/ArcGIS/rest/services/kq20170421/MapServer/118/query',
    communityMapServerUrl: 'http://218.108.93.246:11551/ArcGIS/rest/services/kq20170421/MapServer/117/query',
    gridMapServerUrl: 'http://218.108.93.246:11551/ArcGIS/rest/services/kq20170421/MapServer/119/query',
    LDMapServerUrl: 'http://218.108.93.246:11551/ArcGIS/rest/services/kq20170601_LD/MapServer',
    proxyUrl: '',
    // picURL: "http://218.108.93.246:11586/pic",
    // picURL: "http://localhost:27403/loadFile",
    // picURL: "http://221.214.76.68:8080/loadFile",
    picURL: 'http://221.214.76.67:8082/loadFile',
    videoURL: 'http://221.214.76.67:8082',
    zhxtUrl: 'http://218.108.93.246:11524',
    lcxxUrl: 'http://221.214.76.67:8081',
    qwglUrl: 'http://221.214.76.65:8081',
    tyywUrl: 'http://10.80.2.139:8080/soa/j_spring_security_check?username=tyyw&password=soa111',
    noPicURL: 'http://221.214.76.67:8085',
    downUrl: 'http://221.214.76.67:8082',
    picSJURL: 'http://123.232.122.169/JNUM.WebApi.Test/api/szq/123456/DowloadFile?fileid='
  }
};

// 受理中心内网地址
// window.config = {
//   URL: {
//     baseUrl: "http://10.1.1.21:10001",
//     zxtUrl: "http://10.1.1.21:10004",
//     znfxUrl: "http://10.1.1.21:10005",
//     streetMapServerUrl: "http://10.1.1.23:10000/ArcGIS/rest/services/kq20170421/MapServer/118/query",
//     communityMapServerUrl: "http://10.1.1.23:10000/ArcGIS/rest/services/kq20170421/MapServer/117/query",
//     gridMapServerUrl: "http://10.1.1.23:10000/ArcGIS/rest/services/kq20170421/MapServer/119/query",
//     LDMapServerUrl: "http://10.1.1.23:10000/ArcGIS/rest/services/kq20170601_LD/MapServer",
//     proxyUrl: 'http://10.1.1.21:10001/Proxy.ashx',
//     picURL: "http://10.1.1.21:10001",
//     zhxtUrl: "http://10.1.1.24:10008"
//   }
// }

// 电子政务网地址
// window.config = {
//  URL: {
//    baseUrl: "http://10.59.120.138:10001",
//    zxtUrl: "http://10.59.120.138:10004",
//    znfxUrl: "http://10.59.120.138:10005",
//    streetMapServerUrl: "http://10.59.120.138:10000/ArcGIS/rest/services/kq20170421/MapServer/118/query",
//    communityMapServerUrl: "http://10.59.120.138:10000/ArcGIS/rest/services/kq20170421/MapServer/117/query",
//    gridMapServerUrl: "http://10.59.120.138:10000/ArcGIS/rest/services/kq20170421/MapServer/119/query",
//    LDMapServerUrl: "http://10.59.120.138:10000/ArcGIS/rest/services/kq20170601_LD/MapServer",
//    proxyUrl: 'http://10.59.120.138:10001/Proxy.ashx',
//    picURL: "http://10.59.120.138:10001"
//    zhxtUrl: "http://10.59.120.138:10008"
//  }
// }
