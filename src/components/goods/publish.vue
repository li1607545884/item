<template>
  <div id="publish">
    <div class="zf"><i class="el-icon-house"></i>  >>  商品  >>  商品发布</div>
    <div class="zf1">
      <div class="zf2">您当前选择的商品类别是：<span>数码 > 手机 > 三星</span></div>
      <div>
        <el-cascader-panel :options="options"></el-cascader-panel>
      </div>
      <div class="zf3"><button @click="open">发布商品</button></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
     open() {
        this.$message('发布成功');
      },
  },
    data() {
      return {
        options: [{
          value: 'zhinan',
          label: '数码',
          children: [{
            value: 'shejiyuanze',
            label: '手机',
            children: [{
              value: 'yizhi',
              label: '三星'
            }, {
              value: 'fankui',
              label: '苹果'
            }, {
              value: 'xiaolv',
              label: '华为'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
      };
    }
  };
</script>

<style scoped>
#publish{
  padding: 20px 120px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: rgba(240, 244, 246, 1);
}
#publish >>> .el-icon-house{
  color: #1989fa;
}
.zf{
  font-size: 12px;
  display: flex;
  align-items: center;
  color: #999;
}
.zf > i{
  font-size: 20px;
  margin-right: 8px;
}
.zf1{
  width: 100%;
  height: 560px;
  margin-top: 20px;
  background: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  box-sizing: border-box;
}
.zf2{
  border: 1px solid #F8AC59;
  color: #F8AC59;
  padding: 8px 15px;
  background-color: rgba(255, 244, 240, 1);
  font-weight: bold;
  font-size: 13px;
}
.zf2>span{
  color: #1AB394;
  font-weight: 100;
  font-size: 13px;
}
#publish >>> .el-cascader-panel>div{
  width: 250px;
}
.zf3{
  text-align: center;
  margin-top: 30px;
}
.zf3>button{
  background-color: rgba(26, 179, 148, 1);
  color: #fff;
  border: 1px solid rgba(26, 179, 148, 1);
  border-radius: 3px;
  padding: 5px 25px;
}
#classify >>> .el-table__row > td{
  padding: 0;
}
</style>