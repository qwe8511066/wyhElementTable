(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d5c1a81"],{"0047":function(n,t,e){},"0651":function(n,t,e){"use strict";e("0047")},"912c":function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("wyhElementTable",{attrs:{column:n.column,listServe:"/getList"},on:{onGetList:n.onGetList}}),e("div",{staticClass:"padding20"},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[n._v("代码片段")])]),e("pre",[n._v("    <wyhElementTable :column=\"column\" listServe=\"/getList\" @onGetList=\"onGetList\">\n    </wyhElementTable> \n  data() {\n    return {\n       column: [\n        {\n          prop: 'name',\n          label: '名称',\n        },\n        {\n          prop: 'test',\n          label: '测试数据',\n        },\n      ],\n    }\n  }, \n  methods: {\n    onGetList(value) {\n      value.data.list.forEach((item, index) => {\n        item.test = '测试' + index\n        item.name = '名字' + index\n      })\n      this.$message('数据：' + JSON.stringify(value.data))\n    },\n  },\n}\n  ")])])],1)],1)},s=[],i=(e("4160"),e("b0c0"),e("159b"),{name:"setListTable",components:{},data:function(){return{column:[{prop:"name",label:"名称"},{prop:"test",label:"测试数据"}]}},methods:{onGetList:function(n){n.data.list.forEach((function(n,t){n.test="测试"+t,n.name="名字"+t})),this.$message("数据："+JSON.stringify(n.data))}}}),l=i,o=(e("0651"),e("2877")),c=Object(o["a"])(l,a,s,!1,null,"7a438b68",null);t["default"]=c.exports}}]);