(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fdcb4ad0"],{"665e":function(e,n,t){"use strict";t.r(n);var l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:e.changeSwitch},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}}),t("span",{staticStyle:{color:"red"}},[e._v("(重置column 有0.333秒的延迟。防止闪烁)")]),t("wyhElementTable",{ref:"publicTabel",attrs:{column:e.column,listServe:"/getList1"}}),t("div",{staticClass:"padding20"},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("代码片段")])]),t("pre",[e._v("  \n          <el-switch\n      v-model=\"value\"\n      @change=\"changeSwitch\"\n      active-color=\"#13ce66\"\n      inactive-color=\"#ff4949\"\n    ></el-switch>\n        <wyhElementTable :column=\"column\" ref=\"publicTabel\" listServe=\"/getList1\"\n  >  </wyhElementTable>\n \n  data() {\n    return {\n       value: true,\n      column: [\n        {\n          prop: 'user.name',\n          label: '名称',\n        },\n        {\n          iif: (value) => {\n            return this.value\n          },\n          width: 200,\n          type: 'img',\n          prop: 'user.img',\n          label: '头像',\n        },\n        {\n          type: 'boolean',\n          prop: 'user.status',\n          label: '状态',\n        },\n      ],\n    }\n  }, \n  methods: {\n    changeSwitch(value) {\n      this.$refs.publicTabel.resetColumn()\n    },\n  },\n}\n  ")])])],1)],1)},a=[],c={name:"columnJudgment",components:{},data:function(){var e=this;return{value:!0,column:[{prop:"user.name",label:"名称"},{iif:function(n){return e.value},width:200,type:"img",prop:"user.img",label:"头像"},{type:"boolean",prop:"user.status",label:"状态"}]}},methods:{changeSwitch:function(e){console.log(this.value),this.$refs.publicTabel.resetColumn()}}},i=c,s=(t("fe30"),t("2877")),o=Object(s["a"])(i,l,a,!1,null,"b3e19a20",null);n["default"]=o.exports},db85:function(e,n,t){},fe30:function(e,n,t){"use strict";t("db85")}}]);