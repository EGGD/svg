function TGisMap(containerId, opts) {
  var self = this;
  var options = {
    isShowZRWG: false,
    isShowBtnGroup: false,
    isShowSearch: false
  };

  $.extend(options, opts);

  self.containerId = containerId;
  //绘制对象
  self.draw = null;
  //描点标注图层
  self.markerLayer = null;
  self.drawLayer = null;
  //路灯杆图层
  self.LDVectorLayer = null;
  //网格图层
  self.relateFeaturesLayer = null;
  //社区图层
  self.communityLayer = null;
  //街道图层
  self.streetLayer = null;
  //责任网格图层
  self.dutyLayer = null;
  //案件标注图层
  self.caseMarkerLayer = null;
  //案件弹框 overlay 
  self.casePopupOverlay = null;
  //案件标注选中事件
  self.OnCaseSelected = null;
  //视频监控
  self.onMonitorMarkDBClicked = null;

  //不同地图层级对应的底图数据源
  var tileLayerSource1, tileLayerSource2, tileLayerSource3, tileLayerSource4, tileLayerSource5, tileLayerSource6;
  var projection = ol.proj.get('EPSG:4326');
  var projectionExtent = projection.getExtent();
  var size = ol.extent.getWidth(projectionExtent) / 256;
  var resolutions = new Array(22);
  var matrixIds = new Array(22);
  for (var z = 0; z < 22; ++z) {
    resolutions[z] = size / Math.pow(2, z);
    matrixIds[z] = z;
  }
  tileLayerSource1 = new ol.source.WMTS({
    url: self.Config.tileUrl1,
    tileLoadFunction: function (imageTile, src) {
      if (self.Config.proxyUrl && self.Config.proxyUrl != "") {
        imageTile.getImage().src = self.Config.proxyUrl + "?url=" + encodeURIComponent(src);
      } else {
        imageTile.getImage().src = src;
      }
    },
    layer: 'vec',
    format: 'tiles',
    tileGrid: new ol.tilegrid.WMTS({
      origin: ol.extent.getTopLeft(projectionExtent),
      resolutions: resolutions,
      matrixIds: matrixIds,
    }),
    matrixSet: "c",
    style: 'default'
  });
  tileLayerSource2 = new ol.source.WMTS({
    url: self.Config.tileUrl2,
    tileLoadFunction: function (imageTile, src) {
      if (self.Config.proxyUrl && self.Config.proxyUrl != "") {
        imageTile.getImage().src = self.Config.proxyUrl + "?url=" + encodeURIComponent(src);
      } else {
        imageTile.getImage().src = src;
      }
    },
    layer: 'cva',
    format: 'tiles',
    tileGrid: new ol.tilegrid.WMTS({
      origin: ol.extent.getTopLeft(projectionExtent),
      resolutions: resolutions,
      matrixIds: matrixIds,
    }),
    matrixSet: "c",
    style: 'default'
  });
  tileLayerSource3 = new ol.source.WMTS({
    url: self.Config.tileUrl3,
    tileLoadFunction: function (imageTile, src) {
      if (self.Config.proxyUrl && self.Config.proxyUrl != "") {
        imageTile.getImage().src = self.Config.proxyUrl + "?url=" + encodeURIComponent(src);
      } else {
        imageTile.getImage().src = src;
      }
    },
    layer: 'vec',
    format: 'tiles',
    tileGrid: new ol.tilegrid.WMTS({
      origin: ol.extent.getTopLeft(projectionExtent),
      resolutions: resolutions,
      matrixIds: matrixIds,
    }),
    matrixSet: "c",
    style: 'default'
  });
  tileLayerSource4 = new ol.source.WMTS({
    url: self.Config.tileUrl4,
    tileLoadFunction: function (imageTile, src) {
      if (self.Config.proxyUrl && self.Config.proxyUrl != "") {
        imageTile.getImage().src = self.Config.proxyUrl + "?url=" + encodeURIComponent(src);
      } else {
        imageTile.getImage().src = src;
      }
    },
    layer: 'cva',
    format: 'tiles',
    tileGrid: new ol.tilegrid.WMTS({
      origin: ol.extent.getTopLeft(projectionExtent),
      resolutions: resolutions,
      matrixIds: matrixIds,
    }),
    matrixSet: "c",
    style: 'default'
  });
  tileLayerSource5 = new ol.source.WMTS({
    url: self.Config.tileUrl5,
    tileLoadFunction: function (imageTile, src) {
      if (self.Config.proxyUrl && self.Config.proxyUrl != "") {
        imageTile.getImage().src = self.Config.proxyUrl + "?url=" + encodeURIComponent(src);
      } else {
        imageTile.getImage().src = src;
      }
    },
    layer: 'KQEMAP',
    format: 'image/png',
    tileGrid: new ol.tilegrid.WMTS({
      origin: ol.extent.getTopLeft(projectionExtent),
      resolutions: resolutions,
      matrixIds: matrixIds,
    }),
    matrixSet: "TileMatrixSet0",
    style: 'default'
  });
  tileLayerSource6 = new ol.source.WMTS({
    url: self.Config.tileUrl6,
    tileLoadFunction: function (imageTile, src) {
      if (self.Config.proxyUrl && self.Config.proxyUrl != "") {
        imageTile.getImage().src = self.Config.proxyUrl + "?url=" + encodeURIComponent(src);
      } else {
        imageTile.getImage().src = src;
      }
    },
    layer: 'KQEMAPANNO',
    format: 'image/png',
    tileGrid: new ol.tilegrid.WMTS({
      origin: ol.extent.getTopLeft(projectionExtent),
      resolutions: resolutions,
      matrixIds: matrixIds,
    }),
    matrixSet: "TileMatrixSet0",
    style: 'default'
  });

  var control = ol.control.defaults({
    attributionOptions: ({
      collapsible: true
    })
  });
  if (options.isShowSearch) {
    ol.inherits(self.searchControl, ol.control.Control);
    control = control.extend([
      new self.searchControl({
        invoker: self
      })
    ])
  }

  self.map = new ol.Map({
    logo: false,
    layers: [
      new ol.layer.Tile({
        name: "baseVec",
        source: tileLayerSource1
      }),
      new ol.layer.Tile({
        name: "baseCva",
        source: tileLayerSource2
      }),
    ],
    target: containerId,
    controls: control,
    view: new ol.View({
      //center: [120.48201551754718, 30.086689326561373],
      center: [116.99820161480756,36.64675166297745],
      projection: ol.proj.get("EPSG:4326"),
      zoom: 13,
      minZoom: 1,
      maxZoom: 18
    })
  });

  //添加路灯瓦片图层
  //self.AddLDTileLayer();

  //添加路灯矢量图层
  //self.map.on("moveend", function () {
  //    self.AddLDVectorLayer();
  //});

  //添加所有责任网格图层
  if (options.isShowZRWG == true) {
    //self.AddZRWGLayer();
  }

  //self.map.getView().fit([120.404376545383, 30.0087014643942, 120.552778678422, 30.1571035974332], self.map.getSize(), { nearest: true });
  //添加全屏控件
  //self.map.addControl(new ol.control.FullScreen());
  //添加地图放大缩小控件
  self.map.addControl(new ol.control.Zoom());
  //控制不同地图层级时,切换底图数据源
  self.map.getView().on("change:resolution", function () {
    var zoom = self.map.getView().getZoom();
    if (!(typeof zoom === 'number' && zoom % 1 === 0)) {
      return;
    }
    if (zoom <= 14) {
      var l1 = self.map.getLayers().getArray()[0];
      l1.setSource(tileLayerSource1);
      var l2 = self.map.getLayers().getArray()[1];
      l2.setSource(tileLayerSource2);
    } else if (zoom >= 15 && zoom <= 17) {
      var l1 = self.map.getLayers().getArray()[0];
      l1.setSource(tileLayerSource3);
      var l2 = self.map.getLayers().getArray()[1];
      l2.setSource(tileLayerSource4);
    } else {
      var l1 = self.map.getLayers().getArray()[0];
      l1.setSource(tileLayerSource5);
      var l2 = self.map.getLayers().getArray()[1];
      l2.setSource(tileLayerSource6);
    }
  });
  self.map.on("click", function (e) {
    console.log(e.coordinate)    
    self.map.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
      //移除其他案件标注的高亮状态
      self.caseMarkerLayer.getSource().forEachFeature(function (f) {
        var caseIconSrc = f.get("caseObject").caseTypeId == 1 ? self.Config.caseMarkerSJ : self.Config.caseMarkerBJ;
        var caseIconOnSrc = f.get("caseObject").caseTypeId == 1 ? self.Config.caseMarkerSJOn : self.Config.caseMarkerBJOn;
        if (f == feature) {
          f.setStyle(new ol.style.Style({
            image: new ol.style.Icon(({
              anchor: [0.5, 1],
              anchorXUnits: 'fraction',
              anchorYUnits: 'fraction',
              src: caseIconOnSrc
            }))
          }));
          //设置弹框内容
          self._showCasePopup(f.getGeometry().getFirstCoordinate(), f.get("caseObject"));
          //触发案件标注选中事件
          if (self.OnCaseSelected && (typeof self.OnCaseSelected == "function")) {
            self.OnCaseSelected(f.get("caseObject"));
          }
        } else {
          f.setStyle(new ol.style.Style({
            image: new ol.style.Icon(({
              anchor: [0.5, 1],
              anchorXUnits: 'fraction',
              anchorYUnits: 'fraction',
              src: caseIconSrc
            }))
          }));
        }
      });
      //return true 停止循环遍历
      return true;
    }, {
      layerFilter: function (layer) {
        if (layer == self.caseMarkerLayer) {
          return true;
        } else {
          return false;
        }
      }
    });
  });
  self.map.on("dblclick", function (e) {
    self.map.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
      var data = feature.get('CameraParam');
      if (self.onMonitorMarkDBClicked && typeof self.onMonitorMarkDBClicked === 'function') {
        self.onMonitorMarkDBClicked(data);
      }
      return true;
    }, {
      layerFilter: function (layer) {
        if (layer == self.monitorLayer) {
          return true;
        } else {
          return false;
        }
      }
    });
  });
  self.map.on('pointermove', function (e) {
    //处理案件标注的 mouseover 事件
    if (self.caseMarkerLayer == null) {
      return;
    }
  });
  if (options.isShowBtnGroup) {
    self.AddFuncIcon();
  }
}

//地图配置
TGisMap.prototype.Config = {
  proxyUrl: window.config.URL.proxyUrl,
  tileUrl1: "http://t{0-7}.tianditu.com/vec_c/wmts",
  tileUrl2: "http://t{0-7}.tianditu.com/cva_c/wmts",
  tileUrl3: "http://www.sdmap.gov.cn/tileservice/SDPubMap",
  tileUrl4: "http://www.sdmap.gov.cn/tileservice/SDPubMap",
  tileUrl5: "http://www.sdmap.gov.cn/tileservice/SDPubMap",
  tileUrl6: "http://www.sdmap.gov.cn/tileservice/SDPubMap",
  markerIcon: "/static/images/marker.png",
  caseMarkerSJ: "/static/images/case_marker_sj.png",
  caseMarkerSJOn: "/static/images/case_marker_sj_on.png",
  caseMarkerBJ: "/static/images/case_marker_bj.png",
  caseMarkerBJOn: "/static/images/case_marker_bj_on.png",
  streetMapServerUrl: window.config.URL.streetMapServerUrl,
  communityMapServerUrl: window.config.URL.communityMapServerUrl,
  gridMapServerUrl: window.config.URL.gridMapServerUrl,
  LDMapServerUrl: window.config.URL.LDMapServerUrl, //"http://218.108.93.246:11551/ArcGIS/rest/services/kq20170601_LD/MapServer"
  streetSelectedIcon: "/static/images/street_selected_12px.png",
  streetUnselectedIcon: "/static/images/street_unselected_12px.png",
  communitySelectedIcon: "/static/images/community_selected_12px.png",
  communityUnselectedIcon: "/static/images/community_unselected_12px.png",
  dutySelectedIcon: "/static/images/duty_selected_12px.png",
  dutyUnselectedIcon: "/static/images/duty_unselected_12px.png",
  searchIcon: "/static/images/search-grey.png",
  lamppostIcon: "/static/images/lamppost.png",
  monitorIcon: "/static/images/monitor_position.png",
};

//添加标注
TGisMap.prototype.addMarker = function (opts) {
  var defaults = {
    x: 0,
    y: 0,
    isCenter: false
  };
  $.extend(defaults, opts);
  var self = this;
  self.map.removeLayer(self.markerLayer);
  var iconFeature = new ol.Feature({
    geometry: new ol.geom.Point([defaults.x, defaults.y])
  });
  var iconStyle = new ol.style.Style({
    image: new ol.style.Icon(({
      anchor: [0.5, 1],
      anchorXUnits: 'fraction',
      anchorYUnits: 'fraction',
      src: self.Config.markerIcon
    }))
  });
  iconFeature.setStyle(iconStyle);
  var vectorSource = new ol.source.Vector({
    features: [iconFeature]
  });

  self.markerLayer = new ol.layer.Vector({
    source: vectorSource
  });
  self.map.addLayer(self.markerLayer);
  if (defaults.isCenter == true) {
    self.map.getView().setCenter([defaults.x, defaults.y]);
  }
}

//添加单个案件标注
TGisMap.prototype.addCaseMarker = function (opts) {
  var self = this;
  var defaults = {
    caseCode: "",
    x: 0,
    y: 0,
    caseTypeId: 1,
    isCenter: false,
    isPopup: false
  };
  $.extend(defaults, opts);
  if (!defaults.x || !defaults.y) {
    return;
  }
  var caseIconSrc = defaults.caseTypeId == 1 ? self.Config.caseMarkerSJ : self.Config.caseMarkerBJ;
  var caseIconOnSrc = defaults.caseTypeId == 1 ? self.Config.caseMarkerSJOn : self.Config.caseMarkerBJOn;

  var caseFeature, iconStyle;
  if (self.caseMarkerLayer == null) {
    caseFeature = new ol.Feature({
      geometry: new ol.geom.Point([defaults.x, defaults.y])
    });
    caseFeature.setId(defaults.caseCode);
    iconStyle = new ol.style.Style({
      image: new ol.style.Icon(({
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        src: caseIconSrc
      }))
    });
    caseFeature.setStyle(iconStyle);
    var vectorSource = new ol.source.Vector({
      features: [caseFeature]
    });

    self.caseMarkerLayer = new ol.layer.Vector({
      source: vectorSource
    });
    self.map.addLayer(self.caseMarkerLayer);
    caseFeature.set("caseObject", defaults);
  } else {
    caseFeature = self.caseMarkerLayer.getSource().getFeatureById(defaults.caseCode);
    if (caseFeature == null) {
      caseFeature = new ol.Feature({
        id: defaults.caseCode,
        geometry: new ol.geom.Point([defaults.x, defaults.y])
      });
      caseFeature.setId(defaults.caseCode);
      iconStyle = new ol.style.Style({
        image: new ol.style.Icon(({
          anchor: [0.5, 1],
          anchorXUnits: 'fraction',
          anchorYUnits: 'fraction',
          src: caseIconSrc
        }))
      });
      caseFeature.setStyle(iconStyle);
      self.caseMarkerLayer.getSource().addFeature(caseFeature);
    } else {
      caseFeature.setGeometry(new ol.geom.Point([defaults.x, defaults.y]));
      if (self.casePopupOverlay != null && self.casePopupOverlay.getPosition() != undefined && self.casePopupOverlay.get("currentCaseCode") == defaults.caseCode) {
        self._showCasePopup([defaults.x, defaults.y], opts);
      }
    }
    caseFeature.set("caseObject", defaults);
  }

  if (defaults.isCenter == true) {
    self.map.getView().animate({
      center: [defaults.x, defaults.y],
      zoom: 19,
      duration: 200
    });
  }

  if (defaults.isHighlight == true) {
    //移除其他案件标注的高亮状态
    self.caseMarkerLayer.getSource().forEachFeature(function (f) {
      var tempCaseIconSrc = f.get("caseObject").caseTypeId == 1 ? self.Config.caseMarkerSJ : self.Config.caseMarkerBJ;
      f.setStyle(new ol.style.Style({
        image: new ol.style.Icon(({
          anchor: [0.5, 1],
          anchorXUnits: 'fraction',
          anchorYUnits: 'fraction',
          src: tempCaseIconSrc
        }))
      }));
    });
    caseFeature.setStyle(new ol.style.Style({
      image: new ol.style.Icon(({
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        src: caseIconOnSrc
      }))
    }));
  }

  if (defaults.isPopup == true) {
    self._showCasePopup([defaults.x, defaults.y], opts);
  }
}

//获取案件弹窗对象
TGisMap.prototype._showCasePopup = function (coordinate, caseObj) {
  var self = this;
  if (self.casePopupOverlay == null) {
    //构造弹框 dom 元素
    var $popupDom = $("<div id='" + self.containerId + "CasePopup' class='ol-popup'><a href='#' id='" + self.containerId + "CasePopupCloser' class='ol-popup-closer'></a><div id='" + self.containerId + "CasePopupContent'></div></div>");
    $("#" + self.containerId).append($popupDom);;
    self.casePopupOverlay = new ol.Overlay(({
      element: document.getElementById(self.containerId + 'CasePopup'),
      offset: [0, -26],
      autoPan: true,
      autoPanAnimation: {
        duration: 0
      }
    }));
    self.casePopupOverlay.setPosition(coordinate);
    self.map.addOverlay(self.casePopupOverlay);
    //绑定弹框关闭按钮事件
    document.getElementById(self.containerId + 'CasePopupCloser').onclick = function () {
      self.casePopupOverlay.setPosition(undefined);
      document.getElementById(self.containerId + 'CasePopupCloser').blur();
      return false;
    };
  } else {
    self.casePopupOverlay.setPosition(coordinate);
  }
  document.getElementById(self.containerId + 'CasePopupContent').innerHTML = caseObj.caseCode;
  self.casePopupOverlay.set("currentCaseCode", caseObj.caseCode);
}

//关闭案件弹窗对象
TGisMap.prototype._closeCasePopup = function () {
  var self = this;
  if (self.casePopupOverlay != null) {
    self.casePopupOverlay.setPosition(undefined);
    document.getElementById(self.containerId + 'CasePopupCloser').blur();
  }
}

//添加多个案件标注
TGisMap.prototype.addCaseMarkers = function (opts) {
  var self = this;
  var defaults = [];
  $.extend(defaults, opts);
  var arryX = [],
    arryY = [];
  for (var i = 0, caseCount = defaults.length; i < caseCount; i++) {
    if (!defaults[i].x || !defaults[i].y) {
      continue;
    }
    this.addCaseMarker(defaults[i]);
    arryX.push(defaults[i].x);
    arryY.push(defaults[i].y);
  };
  self.map.getView().fit([Math.min.apply(null, arryX), Math.min.apply(null, arryY), Math.max.apply(null, arryX), Math.max.apply(null, arryY)],
    self.map.getSize(), {
      duration: 200,
      nearest: true,
      padding: [100, 100, 100, 100]
    });
}

//移除案件标注
TGisMap.prototype.removeCaseMarker = function (opts) {
  var self = this;
  var defaults = {
    caseCode: "",
    x: 0,
    y: 0,
    caseTypeId: 1,
    isCenter: false,
    isPopup: false
  };
  $.extend(defaults, opts);
  if (!defaults.caseCode) {
    return;
  }
  if (self.caseMarkerLayer && self.caseMarkerLayer.getSource()) {
    var feature = self.caseMarkerLayer.getSource().getFeatureById(opts.caseCode);
    if (feature) {
      self.caseMarkerLayer.getSource().removeFeature(feature);
    }
  }
}

//添加多个案件标注不需要进行限定范围
TGisMap.prototype.addCaseMarkersWithoutExtent = function (opts) {
  var self = this;
  var defaults = [];
  $.extend(defaults, opts);
  for (var i = 0, caseCount = defaults.length; i < caseCount; i++) {
    if (!defaults[i].x || !defaults[i].y) {
      continue;
    }
    this.addCaseMarker(defaults[i]);
  };
}

//移除多个案件标注不需要进行限定范围
TGisMap.prototype.removeCaseMarkersWithoutExtent = function (opts) {
  var self = this;
  var defaults = [];
  $.extend(defaults, opts);
  for (var i = 0, caseCount = defaults.length; i < caseCount; i++) {
    if (!defaults[i].x || !defaults[i].y) {
      continue;
    }
    this.removeCaseMarker(defaults[i]);
  };
}

//清除所有的案件标注
TGisMap.prototype.clearCaseMarkers = function () {
  var self = this;
  if (self.caseMarkerLayer != null) {
    self.caseMarkerLayer.getSource().clear();
  }
  this._closeCasePopup();
}

//展示位置
TGisMap.prototype.viewPoint = function (opts) {
  var self = this;
  var defaults = {
    x: 0,
    y: 0,
    isCenter: false
  };
  $.extend(defaults, opts);
  if (!defaults.x || !defaults.y) {
    return;
  }

  self.addRelateFeatures({
    x: defaults.x,
    y: defaults.y
  });
  self.addMarker({
    x: defaults.x,
    y: defaults.y,
    isCenter: true
  });
}

//标注位置
TGisMap.prototype.drawPoint = function (opts) {
  var self = this;
  self.map.removeLayer(self.markerLayer);
  self.map.removeInteraction(self.draw);
  self.map.removeLayer(self.drawLayer);

  var defaults = {
    x: 0,
    y: 0,
    isCenter: false
  };
  $.extend(defaults, opts);
  self.addRelateFeatures({
    x: defaults.x,
    y: defaults.y
  });

  if (defaults.x && defaults.y) {
    self.addMarker({
      x: defaults.x,
      y: defaults.y,
      isCenter: defaults.isCenter
    });
  }

  if (typeof opts.callback != "function") {
    alert("drawPoint 方法参数中的callback类型必须为 function")
  }

  var source = new ol.source.Vector();
  self.drawLayer = new ol.layer.Vector({
    source: source
  });
  self.map.addLayer(self.drawLayer);
  self.draw = new ol.interaction.Draw({
    source: source,
    type: 'Point'
  });

  self.draw.on("drawstart", function (obj) {
    //清除之前绘制的点
    source.clear();
  });

  self.draw.on("drawend", function (obj) {
    var pointArry = obj.feature.getGeometry().getCoordinates();
    
    //重新添加责任网格等信息
    self.addRelateFeatures({
      x: pointArry[0],
      y: pointArry[1],
      callback: function (data) {
        data.x = pointArry[0];
        data.y = pointArry[1];
        defaults.callback(data);
      }
    });
    //重新添加标记
    self.addMarker({
      x: pointArry[0],
      y: pointArry[1],
      isCenter: false,
    });
  });
  self.map.addInteraction(self.draw);
}

//根据责任网格 code 查找责任网格的坐标信息,并将责任网格绘制在地图上
TGisMap.prototype.addGridByGridCode = function (opts) {
  var defaults = {
    gridCode: ""
  };
  $.extend(defaults, opts);

  var self = this;
  var vectorSource = null;
  if (self.relateFeaturesLayer == null) {
    vectorSource = new ol.source.Vector();
    self.relateFeaturesLayer = new ol.layer.Vector({
      source: vectorSource,
      style: new ol.style.Style({
        fill: new ol.style.Fill({
          color: 'rgba(255, 0, 0, 0.2)'
        }),
        stroke: new ol.style.Stroke({
          color: 'rgba(255, 0, 0, 1)',
          width: 2
        }),
        image: new ol.style.Circle({
          radius: 7,
          snapToPixel: false,
          fill: new ol.style.Fill({
            color: 'black'
          }),
          stroke: new ol.style.Stroke({
            color: 'white',
            width: 2
          })
        })
      })
    });
    self.map.addLayer(self.relateFeaturesLayer);
  } else {
    vectorSource = self.relateFeaturesLayer.getSource();
  }

  vectorSource.clear();
  var esrijsonFormat = new ol.format.EsriJSON();
  //请求所在的责任网格
  var zrwgLayerUrl = self.Config.gridMapServerUrl + "?text=" + defaults.gridCode + "&geometry=&geometryType=esriGeometryPoint&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&objectIds=&where=&time=&returnIdsOnly=false&returnGeometry=true&maxAllowableOffset=&outSR=&outFields=&f=pjson";
  var zrwgDeferred = $.ajax({
    url: zrwgLayerUrl,
    dataType: 'jsonp',
    success: function (response) {
      if (response.error) {
        alert(response.error.message + '\n' +
          response.error.details.join('\n'));
      } else {
        var features = esrijsonFormat.readFeatures(response);
        if (features.length > 0) {
          vectorSource.addFeatures(features);
        }
      }
    }
  });
};

TGisMap.prototype.cleanGridLayer = function () {
  if (this.relateFeaturesLayer) {
    this.relateFeaturesLayer.getSource().clear();
  }
}

//根据坐标点查找该点坐在的社、街道、责任网格,并将责任网格绘制在地图上
TGisMap.prototype.addRelateFeatures = function (opts) {
  var defaults = {
    x: 0,
    y: 0,
    callback: function (data) {}
  };
  $.extend(defaults, opts);

  if (!defaults.x || !defaults.y) {
    return;
  }
  var self = this;
  var esrijsonFormat = new ol.format.EsriJSON();

  //要通过回调函数返回的值
  var returnData = {
    streetCode: "",
    communityCode: ""
  };
  //请求所在的责任网格
  // var zrwgLayerUrl = self.Config.gridMapServerUrl + "?text=&geometry=" + defaults.x + "," + defaults.y + "&geometryType=esriGeometryPoint&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&objectIds=&where=&time=&returnIdsOnly=false&returnGeometry=true&maxAllowableOffset=&outSR=&outFields=&f=pjson";
  // var zrwgDeferred = $.ajax({
  //   url: zrwgLayerUrl,
  //   dataType: 'jsonp',
  //   success: function (response) {
  //     if (response.error) {
  //       alert(response.error.message + '\n' +
  //         response.error.details.join('\n'));
  //     } else {
  //       var features = esrijsonFormat.readFeatures(response);
  //       if (features.length > 0) {
  //         returnData.gridCode = response.features[0].attributes.网格编码;
  //       }
  //     }
  //   }
  // });
  //查询所在的街道
  //var jdLayerUrl = self.Config.streetMapServerUrl + "?text=&geometry=" + defaults.x + "," + defaults.y + "&geometryType=esriGeometryPoint&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&objectIds=&where=&time=&returnIdsOnly=false&returnGeometry=true&maxAllowableOffset=&outSR=&outFields=&f=pjson";
  var jdLayerUrl = window.config.URL.downUrl + "/api/public/getgrid?latitude=" + defaults.y + "&longitude=" + defaults.x;
  var jdDeferred = $.ajax({
    url: jdLayerUrl,
    dataType: 'json',
    success: function (response) {
      returnData.streetCode = response.Data.street == null ? "" : response.Data.street.ID;
      returnData.communityCode = response.Data.community == null ? "" : response.Data.community.ID;
      // if (response.error) {
      //   alert(response.error.message + '\n' +
      //     response.error.details.join('\n'));
      // } else {
      //   var features = esrijsonFormat.readFeatures(response);
      //   if (features.length > 0) {
      //   }
      // }
    },
    error:function (msg){
      console.log(msg);
    }
  });
  //查询所在的社区
  // var sqLayerUrl = self.Config.communityMapServerUrl + "?text=&geometry=" + defaults.x + "," + defaults.y + "&geometryType=esriGeometryPoint&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&objectIds=&where=&time=&returnIdsOnly=false&returnGeometry=true&maxAllowableOffset=&outSR=&outFields=&f=pjson";
  // var sqDeferred = $.ajax({
  //   url: sqLayerUrl,
  //   dataType: 'jsonp',
  //   success: function (response) {
  //     if (response.error) {
  //       alert(response.error.message + '\n' +
  //         response.error.details.join('\n'));
  //     } else {
  //       var features = esrijsonFormat.readFeatures(response);
  //       if (features.length > 0) {
  //         returnData.communityCode = response.features[0].attributes.社区编码;
  //       }
  //     }
  //   }
  // });
  $.when(jdDeferred).always(function (msg) {
    if (defaults.callback && (typeof defaults.callback == "function")) {
      defaults.callback(returnData);
    }
  });
}

//添加路灯瓦片图层
TGisMap.prototype.AddLDTileLayer = function () {
  var self = this;

  var ldTileLayer = new ol.layer.Tile({
    source: new ol.source.TileArcGISRest({
      url: self.Config.LDMapServerUrl
    })
  });

  self.map.addLayer(ldTileLayer);
}

//添加路灯矢量图层
TGisMap.prototype.AddLDVectorLayer = function () {
  var self = this;

  if (!self.Config.LDMapServerUrl || self.Config.LDMapServerUrl == "") {
    return;
  }

  self.map.un('pointermove');

  //清空路灯杆
  if (self.LDVectorLayer != null) {
    self.LDVectorLayer.getSource().clear();
  }

  var zoom = self.map.getView().getZoom();
  if (!(typeof zoom === 'number' && zoom % 1 === 0 && zoom >= 18)) {
    return;
  }

  var esrijsonFormat = new ol.format.EsriJSON();

  if (self.LDVectorLayer == null) {
    self.LDVectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector(),
      style: new ol.style.Style({
        image: new ol.style.Circle({
          radius: 3,
          snapToPixel: false,
          fill: new ol.style.Fill({
            color: 'rgba(88, 0, 166, 0.8)'
          }),
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 0.8)',
            width: 1
          })
        })
      })
    });
    self.map.addLayer(self.LDVectorLayer);
    self.map.on('pointermove', function (evt) {
      if (evt.dragging) {
        return;
      }
      var pixel = self.map.getEventPixel(evt.originalEvent);
      displayFeatureInfo(pixel);
    });
  }

  var extent = self.map.getView().calculateExtent(self.map.getSize());

  var url = self.Config.LDMapServerUrl + '/0/query?f=json&' +
    'spatialRel=esriSpatialRelIntersects&geometry=' +
    encodeURIComponent('{xmin:' + extent[0] + ',ymin:' + extent[1] + ',xmax:' + extent[2] + ',ymax:' + extent[3] + '}') +
    '&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&objectIds=&where=&time=&returnIdsOnly=false&returnGeometry=true&maxAllowableOffset=&outSR=&outFields=*';
  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function (response) {
      if (response.error) {
        alert(response.error.message + '\n' +
          response.error.details.join('\n'));
      } else {
        var features = esrijsonFormat.readFeatures(response);
        if (features.length > 0) {
          self.LDVectorLayer.getSource().addFeatures(features);
        }
      }
    }
  });

  var displayFeatureInfo = function (pixel) {
    self.map.getTargetElement().style.cursor = '';

    self.map.forEachFeatureAtPixel(pixel, function (feature, layer) {
      var ldbh = feature.get('LDBH');
      self.map.getTargetElement().style.cursor = 'pointer';
      //return true 停止循环遍历
      return true;
    }, {
      layerFilter: function (layer) {
        if (layer == self.LDVectorLayer) {
          return true;
        } else {
          return false;
        }
      }
    });
  };
}

//添加所有责任网格矢量图层
TGisMap.prototype.AddZRWGLayer = function () {
  var self = this;

  if (!self.Config.gridMapServerUrl || self.Config.gridMapServerUrl == "") {
    return;
  }

  if (!self.dutyLayer) {
    self.dutyLayer = new ol.layer.Vector({
      source: new ol.source.Vector(),
      style: new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: 'rgba(255, 0, 51, 1)',
          lineDash: [2, 1],
          width: 1
        })
      })
    });

    self.map.addLayer(self.dutyLayer);
  }
  self.currentLayer = self.dutyLayer;
  self.layerTitleName = "网格名称";
  self.map.on('pointermove', self.highlightFeatureWrapper, self);
  self.dutyLayer.getSource().clear();
  var esrijsonFormat = new ol.format.EsriJSON();
  //请求所在的责任网格
  var zrwgLayerUrl = self.Config.gridMapServerUrl + "?text=&geometry=&geometryType=esriGeometryPoint&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&objectIds=&where=1%3D1&time=&returnIdsOnly=false&returnGeometry=true&maxAllowableOffset=&outSR=&outFields=*&f=pjson";
  $.ajax({
    url: zrwgLayerUrl,
    dataType: 'jsonp',
    success: function (response) {
      if (response.error) {
        alert(response.error.message + '\n' +
          response.error.details.join('\n'));
      } else {
        var features = esrijsonFormat.readFeatures(response);
        if (features.length > 0) {
          self.dutyLayer.getSource().addFeatures(features);
        }
      }
    }
  });
}

//添加街道矢量图层
TGisMap.prototype.AddStreetLayer = function () {
  var self = this;

  if (!self.Config.streetMapServerUrl || self.Config.streetMapServerUrl == "") {
    return;
  }
  if (!self.streetLayer) {
    self.streetLayer = new ol.layer.Vector({
      source: new ol.source.Vector(),
      style: new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: 'rgba(255, 0, 51, 1)',
          lineDash: [2, 1],
          width: 1
        })
      })
    });
    self.map.addLayer(self.streetLayer);

  }
  self.currentLayer = self.streetLayer;
  self.layerTitleName = "街道名称";
  self.map.on('pointermove', self.highlightFeatureWrapper, self);
  self.streetLayer.getSource().clear();
  var esrijsonFormat = new ol.format.EsriJSON();
  //请求所在的责任网格
  var streetLayerUrl = self.Config.streetMapServerUrl + "?text=&geometry=&geometryType=esriGeometryPoint&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&objectIds=&where=1%3D1&time=&returnIdsOnly=false&returnGeometry=true&maxAllowableOffset=&outSR=&outFields=*&f=pjson";
  $.ajax({
    url: streetLayerUrl,
    dataType: 'jsonp',
    success: function (response) {
      if (response.error) {
        alert(response.error.message + '\n' +
          response.error.details.join('\n'));
      } else {
        var features = esrijsonFormat.readFeatures(response);
        if (features.length > 0) {
          self.streetLayer.getSource().addFeatures(features);
        }
      }
    }
  });
}

//添加社区图层
TGisMap.prototype.AddCommunityLayer = function () {
  var self = this;

  if (!self.Config.communityMapServerUrl || self.Config.communityMapServerUrl == "") {
    return;
  }
  if (!self.communityLayer) {
    self.communityLayer = new ol.layer.Vector({
      source: new ol.source.Vector(),
      style: new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: 'rgba(255, 0, 51, 1)',
          lineDash: [2, 1],
          width: 1
        })
      })
    });
    self.map.addLayer(self.communityLayer);
  }
  self.currentLayer = self.communityLayer;
  self.layerTitleName = "社区名称";
  self.map.on('pointermove', self.highlightFeatureWrapper, self);
  self.communityLayer.getSource().clear();
  var esrijsonFormat = new ol.format.EsriJSON();
  //请求所在的责任网格
  var communityLayerUrl = self.Config.communityMapServerUrl + "?text=&geometry=&geometryType=esriGeometryPoint&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&objectIds=&where=1%3D1&time=&returnIdsOnly=false&returnGeometry=true&maxAllowableOffset=&outSR=&outFields=*&f=pjson";
  $.ajax({
    url: communityLayerUrl,
    dataType: 'jsonp',
    success: function (response) {
      if (response.error) {
        alert(response.error.message + '\n' +
          response.error.details.join('\n'));
      } else {
        var features = esrijsonFormat.readFeatures(response);
        if (features.length > 0) {
          self.communityLayer.getSource().addFeatures(features);
        }
      }
    }
  });
}

TGisMap.prototype.addMonitorMark = function (opts) {
  var defaults = {
    x: 0,
    y: 0,
    IndexCode: '',
    isCenter: false
  };
  $.extend(defaults, opts);
  var self = this;
  var montiorFeature = new ol.Feature({
    geometry: new ol.geom.Point([defaults.x, defaults.y])
  });
  var montiorStyle = new ol.style.Style({
    image: new ol.style.Icon(({
      anchor: [0.5, 1],
      anchorXUnits: 'fraction',
      anchorYUnits: 'fraction',
      src: self.Config.monitorIcon
    }))
  });
  if (self.monitorLayer) {
    montiorFeature = self.monitorLayer.getSource().getFeatureById(defaults.IndexCode);
    if (montiorFeature === null) {
      montiorFeature = new ol.Feature({
        Id: defaults.IndexCode,
        geometry: new ol.geom.Point([defaults.x, defaults.y])
      });
      montiorFeature.setStyle(montiorStyle);
      montiorFeature.setId(defaults.IndexCode);
      montiorFeature.set('CameraParam', defaults);
      self.monitorLayer.getSource().addFeature(montiorFeature);
    } else {
      montiorFeature.setGeometry(new ol.geom.Point([defaults.x, defaults.y]));
    }
  } else {
    montiorFeature.setStyle(montiorStyle);
    montiorFeature.set('CameraParam', defaults);
    montiorFeature.setId(defaults.IndexCode);
    self.monitorLayer = new ol.layer.Vector({
      source: new ol.source.Vector()
    });
    self.monitorLayer.getSource().addFeature(montiorFeature);
    self.map.addLayer(self.monitorLayer);
  }
  if (defaults.isCenter == true) {
    self.map.getView().setCenter([defaults.x, defaults.y]);
  }
}

TGisMap.prototype.addMonitorMarks = function (opts) {
  var self = this;
  var defaults = [];
  $.extend(defaults, opts);
  if (self.monitorLayer) {
    self.map.removeLayer(self.monitorLayer);
    self.monitorLayer = null;
  }
  var arryX = [],
    arryY = [];
  for (var i = 0, caseCount = defaults.length; i < caseCount; i++) {
    if (!defaults[i].x || !defaults[i].y) {
      continue;
    }
    this.addMonitorMark(defaults[i]);
    arryX.push(defaults[i].x);
    arryY.push(defaults[i].y);
  };
  // self.map.getView().fit([Math.min.apply(null, arryX), Math.min.apply(null, arryY), Math.max.apply(null, arryX), Math.max.apply(null, arryY)],
  //   self.map.getSize(), {
  //     duration: 200,
  //     nearest: true,
  //     padding: [100, 100, 100, 100]
  //   });
}

//添加功能方法
TGisMap.prototype.AddFuncIcon = function () {
  var self = this;
  var $funcDom = $("<div id='" + self.containerId + "-btn-group' class='ol-btn-group'><button title='街道' data-title='街道名称' data-layer='streetLayer'  data-method='AddStreetLayer'><img data-selected='streetSelectedIcon' data-unselected='streetUnselectedIcon' src='" + self.Config.streetUnselectedIcon + "' /></button><button title='社区' data-title='社区名称' data-layer='communityLayer' data-method='AddCommunityLayer'><img data-selected='communitySelectedIcon' data-unselected='communityUnselectedIcon' src='" + self.Config.communityUnselectedIcon + "' /></button><button data-layer='dutyLayer' title='责任网格' data-title='网格名称' data-method='AddZRWGLayer'><img data-selected='dutySelectedIcon' data-unselected='dutyUnselectedIcon' src='" + self.Config.dutySelectedIcon + "' /></button></div>");
  $("#" + self.containerId).append($funcDom);
  $("#" + self.containerId + '-btn-group button').click(function (event) {
    var targetLayer = $(this).data().layer;
    var title = $(this).data().title;
    var targetImg = $('img', this).get(0);
    $('button', this.parentNode).each(function () {
      var layerObj = $(this).data().layer;
      var imgObj = $('img', this).get(0);
      if (self[layerObj] && layerObj != targetLayer) {
        self[layerObj].setVisible(false);
        var icon = $(imgObj).data().unselected;
        $(imgObj).attr('src', self.Config[icon]);
      }
    })
    self.map.un('pointermove', self.highlightFeatureWrapper, self);
    if (self[targetLayer]) {
      var visible = !self[targetLayer].getVisible();
      var selectedData = $(targetImg).data();
      var icon = visible ? selectedData.selected : selectedData.unselected;
      self[targetLayer].setVisible(visible);
      $(targetImg).attr('src', self.Config[icon]);
      if (visible) {
        self.currentLayer = self[targetLayer];
        self.layerTitleName = title;
        self.map.on('pointermove', self.highlightFeatureWrapper, self);
      }
    } else {
      var method = $(this).data().method;
      if (typeof self[method] === 'function') {
        self[method]();
        var icon = $(targetImg).data().selected;
        $(targetImg).attr('src', self.Config[icon]);
      }
    }

  })
}

TGisMap.prototype.highlightFeatureWrapper = function (evt) {
  var pixel = this.map.getEventPixel(evt.originalEvent);
  var targetLayer = this.currentLayer;
  var name = this.layerTitleName;
  this.highlightFeature(pixel, targetLayer, name);
}

TGisMap.prototype.highlightFeature = function (pixel, targetLayer, name) {
  var self = this;
  self.map.getTargetElement().style.cursor = '';
  self.map.getTargetElement().title = '';
  self.map.forEachFeatureAtPixel(pixel, function (feature, layer) {
    var gridName = feature.get(name);
    self.map.getTargetElement().style.cursor = 'pointer';
    self.map.getTargetElement().title = gridName;
    targetLayer.getSource().forEachFeature(function (f) {
      f.setStyle(new ol.style.Style({
        fill: new ol.style.Fill({
          color: 'rgba(255, 0, 51, 0)'
        }),
        stroke: new ol.style.Stroke({
          color: 'rgba(255, 0, 51, 1)',
          lineDash: [2, 1],
          width: 1
        })
      }));

      var zoom = self.map.getView().getZoom();

      if (zoom <= 17) {
        feature.setStyle(new ol.style.Style({
          fill: new ol.style.Fill({
            color: 'rgba(255, 0, 51, 0.2)'
          }),
          stroke: new ol.style.Stroke({
            color: 'rgba(255, 0, 51, 1)',
            lineDash: [2, 1],
            width: 1
          })
        }));
      }
    });
    return true;
  }, {
    layerFilter: function (layer) {
      if (layer == targetLayer) {
        return true;
      } else {
        return false;
      }
    }
  });
};

//查询控件
TGisMap.prototype.searchControl = function (opt_options) {
  var options = opt_options || {};
  var self = options.invoker;
  var input = document.createElement('input');
  var picDom = $("<span><img src='" + self.Config.searchIcon + "'/></span>").get(0);
  input.addEventListener('change', function (event) {
    self.searchContent = event.target.value;
    if (event.target.value.length === 0 && self.searchLDLayer) {
      self.searchLDLayer.getSource().clear();
    }
  });
  input.addEventListener('keydown', function (event) {
    if (event && event.keyCode === 13) {
      self.searchContent = event.target.value;
      self.searchLD();
    }
  });
  picDom.addEventListener('click', self.searchLD.bind(self), false);

  var element = document.createElement('div');
  element.className = 'ol-search ol-unselectable';
  element.appendChild(input);
  element.appendChild(picDom);

  ol.control.Control.call(this, {
    element: element,
    target: options.target
  });

}

//查询路灯杆编号
TGisMap.prototype.searchLD = function () {
  var self = this;
  if (!self.searchContent) {
    self.searchLDLayer.getSource().getSource().clear();
    self.searchLDLayer.getSource().clear();
    return false;
  }
  if (self.searchLDLayer == null) {
    self.searchLDLayer = new ol.layer.Vector({
      source: new ol.source.Cluster({
        source: new ol.source.Vector(),
        distance: 10
      }),
      style: new ol.style.Style({
        image: new ol.style.Icon(({
          anchor: [0.5, 1],
          anchorXUnits: 'fraction',
          anchorYUnits: 'fraction',
          src: self.Config.lamppostIcon
        }))
      })
    });
    self.map.addLayer(self.searchLDLayer);
  }
  if (self.searchLDLayer) {
    self.searchLDLayer.getSource().getSource().clear();
    self.searchLDLayer.getSource().clear();
  }
  var esrijsonFormat = new ol.format.EsriJSON();
  // var extent = self.map.getView().calculateExtent(self.map.getSize());
  // console.log(extent);
  var url = self.Config.LDMapServerUrl + '/0/query?f=json&' +
    'spatialRel=esriSpatialRelIntersects' + //&geometry=' +
    //encodeURIComponent('{xmin:' + extent[0] + ',ymin:' + extent[1] + ',xmax:' + extent[2] + ',ymax:' + extent[3] + '}') +
    '&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&objectIds=&where=LDBH+like+%27%25' + self.searchContent + '%25%27&time=&returnIdsOnly=false&returnGeometry=true&maxAllowableOffset=&outSR=&outFields=*';
  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function (response) {
      if (response.error) {
        alert(response.error.message + '\n' +
          response.error.details.join('\n'));
      } else {
        var longitudes = [];
        var latitudes = [];
        var features = esrijsonFormat.readFeatures(response);
        var length = response.features.length > 50 ? 50 : response.features.length;
        for (var i = 0; i < length; i++) {
          longitudes[i] = response.features[i].geometry.x;
          latitudes[i] = response.features[i].geometry.y;
        }
        if (features.length > 0) {
          self.searchLDLayer.getSource().getSource().addFeatures(features.splice(0, 50));
          self.map.getView().fit([Math.min.apply(null, longitudes), Math.min.apply(null, latitudes), Math.max.apply(null, longitudes), Math.max.apply(null, latitudes)], self.map.getSize(), {
            duration: 200,
            nearest: true,
            padding: [100, 100, 100, 100]
          });
        }
      }
    }
  });
}

//清除查询结果
TGisMap.prototype.cleanSearchResult = function () {
  $(".ol-search input", this.map.getTargetElement()).val('');
  if (this.searchLDLayer) {
    this.searchLDLayer.getSource().getSource().clear();
    this.searchLDLayer.getSource().clear();
  }
}

TGisMap.prototype.cleanMonitorLayer = function () {
  if (this.monitorLayer) {
    this.monitorLayer.getSource().clear();
  }
}
