<template>
  <div>
    <wyhElementTable :column="column" listServe="/getList" requestType="$flyioHttp"></wyhElementTable>

    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>
    &lt;wyhElementTable :column="column" listServe="/getList"&gt;
    &lt;/wyhElementTable&gt; 
  data() {
    return {
       column: [
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
  name: 'requestData4',
  components: {},
  data() {
    return {
      column: [
        {
          prop: 'name',
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
