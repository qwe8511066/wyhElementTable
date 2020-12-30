# wyh-element-table

> 基于element table 和lb-table 做的一个通用的业务列表组件

# 原型 
**Live demo:** https://qwe8511066.github.io/wyhElementTable/dist/index.html#/staticData

# 使用注意 

<font color="green"> 必须全局注册请求工具如：Vue.prototype.$http = service </font>  
<font color="green"> 必须全局注册请求工具如：Vue.prototype.$http = service </font>  
<font color="green"> 必须全局注册请求工具如：Vue.prototype.$http = service </font>   
<font color="green"> 默认$http </font>   

# 使用说明 
npm install wyh-element-table --save  

# 全局注册使用
在 `main.js` 文件中引入插件并注册  
import wyhElementTable from 'wyh-element-table'    
Vue.use(wyhElementTable)  

# 局部注册使用
在对应的文件中引入插件并注册  
import wyhElementTable from 'wyh-element-table'  
components: {  
    wyhElementTable,  
},   

## 组件属性参数
**publicTabel**
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| pageSizes     | 分页数量的配置    | Array    | [] | [10, 25, 50, 100]  |
| isPagination     | 是否显示分页    | Boolean    | true/false | true  |
| layout     | 分页的种类    | string    | 'total, sizes,prev, pager, next, jumper' | 'total, sizes,prev, pager, next, jumper'  |
| type     |  类型    | string    | ''/radio/checkbox | ''  |
| myPages     | 动态参数    | Object    | — | {}  |
| baseParams     | 基本参数    | Object    | — | {}  |
| checkboxDeleteValue     | 每次刷新列表 清空已选的列表    | Boolean    | true/false | true  |
| checkboxAttribute     | 多选属性    | Object    | — |  {} |
| radioAttribute     | 单选属性    | Object    | — |  {} |
| maxHeight | 最大高度    | number/string    | - |  null |
| column | 列的设置    | Array    | [] |  [] |
| listServe     | 列表请求的url   | String    | - |  '' |
| list     | 静态列表数据   | Array    | - |  [] |
| definitionTotal     | 分页的Total Key    | String    |  |  totalCount |
| definitionData     | 分页的Data Key    | String    |  |  list |
| definitionPage     | 分页的Page Key    | String    |  |  page |
| definitionPageValue     | 分页的Page的默认值   | Number    |  |  1 |
| definitionPageSize     | 分页的PageSize Key    | String    |  |  pageSize |
| definitionPageSizeValue     | 分页的PageSize的默认值   | Number |  |  10 | 
| requestType     | 请求开源工具的类型   | String | '$http' |  '' | 

## 组件方法
**publicTabel**
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| getList     | 获取列表    | Function    | null | null  |
| search     | 搜索列表(会把页码改成1)    | Function    | null | null  |
| reset     | 重置列表(把页码改成1并且初始化myPages的参数)  | Function | null | null |
| resetColumn   |  重置列(根据列的iif判断渲染或者不渲染) | Function    | null | null  |

## 项目
```bash
# clone the project
git clone https://github.com/qwe8511066/wyhElementTable.git

# enter the project directory
cd wyhElementTable

# install dependency
npm install

# develop
npm run dev
```
 