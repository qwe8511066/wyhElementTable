<template>
  <div>
    <wyhElementTable
      :column="column"
      listServe="/getList3"
      definitionPage="page.test.newPage"
      definitionPageSize="page.limit"
    ></wyhElementTable>

    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>
    &lt;wyhElementTable :column="column" listServe="/getList3" definitionPage="page.test.newPage"
      definitionPageSize="page.limit" &gt;
    &lt;/wyhElementTable&gt; 
  data() {
    return {
       column: [
        {
          prop: 'user.id',
          label: '编号',
        },
        {
          prop: 'name',
          label: '名称',
        },
      ],
    }
  }, 
  },
}
  </pre>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'requestData1',
  components: {},
  data() {
    return {
      column: [
        {
          prop: 'user.id',
          label: '编号',
        },
        {
          prop: 'user.name',
          label: '名称',
        },
      ],
    }
  },
}
</script>
<style scoped lang="scss">
.box-card {
  margin-bottom: 18px;
}
</style>
