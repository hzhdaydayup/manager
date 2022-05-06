module.exports = {
  //可选类型
  types: [
    { value: 'feat', name: 'feat:       新功能'},
    { value: 'fix', name: 'fix:       修复'},
    { value: 'docs', name: 'docs:       文档变更'},
    { value: 'perf', name: 'perf:       性能优化'},
    { value: 'revert', name: 'revert:       回退'}
  ],
  //步骤
  message: {
    type: '请选择提交的类型',
    customScope: '请输入修改的范围（可选）',
    subject: '请简要描述提交',
    body: '请输入详细描述（可选）',
    footer: '请输入要关闭的issue（可选）',
    confirmCommit: '确认要使用以上信息提交？ （y/n）'
  },
  //长度限制 默认为72
  subjectLimit: 72
}