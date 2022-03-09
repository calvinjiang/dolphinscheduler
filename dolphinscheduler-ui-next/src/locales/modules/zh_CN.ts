/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const login = {
  test: '测试',
  userName: '用户名',
  userName_tips: '请输入用户名',
  userPassword: '密码',
  userPassword_tips: '请输入密码',
  login: '登录'
}

const modal = {
  cancel: '取消',
  confirm: '确定'
}

const theme = {
  light: '浅色',
  dark: '深色'
}

const userDropdown = {
  profile: '用户信息',
  password: '密码管理',
  logout: '退出登录'
}

const menu = {
  home: '首页',
  project: '项目管理',
  resources: '资源中心',
  datasource: '数据源中心',
  monitor: '监控中心',
  security: '安全中心',
  project_overview: '项目概览',
  workflow_relation: '工作流关系',
  workflow: '工作流',
  workflow_definition: '工作流定义',
  workflow_instance: '工作流实例',
  task: '任务',
  task_instance: '任务实例',
  task_definition: '任务定义',
  file_manage: '文件管理',
  udf_manage: 'UDF管理',
  resource_manage: '资源管理',
  function_manage: '函数管理',
  service_manage: '服务管理',
  master: 'Master',
  worker: 'Worker',
  db: 'DB',
  statistical_manage: '统计管理',
  statistics: 'Statistics',
  audit_log: '审计日志',
  tenant_manage: '租户管理',
  user_manage: '用户管理',
  alarm_group_manage: '告警组管理',
  alarm_instance_manage: '告警实例管理',
  worker_group_manage: 'Worker分组管理',
  yarn_queue_manage: 'Yarn队列管理',
  environment_manage: '环境管理',
  k8s_namespace_manage: 'K8S命名空间管理',
  token_manage: '令牌管理',
  task_group_manage: '任务组管理',
  task_group_option: '任务组配置',
  task_group_queue: '任务组队列',
  data_quality: '数据质量',
  task_result: '任务结果',
  rule: '规则管理'
}

const home = {
  task_state_statistics: '任务状态统计',
  process_state_statistics: '流程状态统计',
  process_definition_statistics: '流程定义统计',
  number: '数量',
  state: '状态',
  submitted_success: '提交成功',
  running_execution: '正在运行',
  ready_pause: '准备暂停',
  pause: '暂停',
  ready_stop: '准备停止',
  stop: '停止',
  failure: '失败',
  success: '成功',
  need_fault_tolerance: '需要容错',
  kill: 'KILL',
  waiting_thread: '等待线程',
  waiting_depend: '等待依赖完成',
  delay_execution: '延时执行',
  forced_success: '强制成功',
  serial_wait: '串行等待'
}

const password = {
  edit_password: '修改密码',
  password: '密码',
  confirm_password: '确认密码',
  password_tips: '请输入密码',
  confirm_password_tips: '请输入确认密码',
  two_password_entries_are_inconsistent: '两次密码输入不一致',
  submit: '提交'
}

const profile = {
  profile: '用户信息',
  edit: '编辑',
  username: '用户名',
  email: '邮箱',
  phone: '手机',
  state: '状态',
  permission: '权限',
  create_time: '创建时间',
  update_time: '更新时间',
  administrator: '管理员',
  ordinary_user: '普通用户',
  edit_profile: '编辑用户',
  username_tips: '请输入用户名',
  email_tips: '请输入邮箱',
  email_correct_tips: '请输入正确格式的邮箱',
  phone_tips: '请输入手机号',
  state_tips: '请选择状态',
  enable: '启用',
  disable: '禁用'
}

const monitor = {
  master: {
    cpu_usage: '处理器使用量',
    memory_usage: '内存使用量',
    load_average: '平均负载量',
    create_time: '创建时间',
    last_heartbeat_time: '最后心跳时间',
    directory_detail: '目录详情',
    host: '主机',
    directory: '注册目录'
  },
  worker: {
    cpu_usage: '处理器使用量',
    memory_usage: '内存使用量',
    load_average: '平均负载量',
    create_time: '创建时间',
    last_heartbeat_time: '最后心跳时间',
    directory_detail: '目录详情',
    host: '主机',
    directory: '注册目录'
  },
  db: {
    health_state: '健康状态',
    max_connections: '最大连接数',
    threads_connections: '当前连接数',
    threads_running_connections: '数据库当前活跃连接数'
  },
  statistics: {
    command_number_of_waiting_for_running: '待执行的命令数',
    failure_command_number: '执行失败的命令数',
    tasks_number_of_waiting_running: '待运行任务数',
    task_number_of_ready_to_kill: '待杀死任务数'
  },
  audit_log: {
    user_name: '用户名称',
    resource_type: '资源类型',
    project_name: '项目名称',
    operation_type: '操作类型',
    create_time: '创建时间',
    start_time: '开始时间',
    end_time: '结束时间',
    user_audit: '用户管理审计',
    project_audit: '项目管理审计',
    create: '创建',
    update: '更新',
    delete: '删除',
    read: '读取'
  }
}

const resource = {
  file: {
    file_manage: '文件管理',
    create_folder: '创建文件夹',
    create_file: '创建文件',
    upload_files: '上传文件',
    enter_keyword_tips: '请输入关键词',
    name: '名称',
    user_name: '所属用户',
    whether_directory: '是否文件夹',
    file_name: '文件名称',
    description: '描述',
    size: '大小',
    update_time: '更新时间',
    operation: '操作',
    edit: '编辑',
    rename: '重命名',
    download: '下载',
    delete: '删除',
    yes: '是',
    no: '否',
    folder_name: '文件夹名称',
    enter_name_tips: '请输入名称',
    enter_description_tips: '请输入描述',
    enter_content_tips: '请输入资源内容',
    enter_suffix_tips: '请输入文件后缀',
    file_format: '文件格式',
    file_content: '文件内容',
    delete_confirm: '确定删除吗?',
    confirm: '确定',
    cancel: '取消',
    success: '成功',
    file_details: '文件详情',
    return: '返回',
    save: '保存'
  },
  udf: {
    udf_resources: 'UDF资源',
    create_folder: '创建文件夹',
    upload_udf_resources: '上传UDF资源',
    udf_source_name: 'UDF资源名称',
    whether_directory: '是否文件夹',
    file_name: '文件名称',
    file_size: '文件大小',
    description: '描述',
    create_time: '创建时间',
    update_time: '更新时间',
    operation: '操作',
    yes: '是',
    no: '否',
    edit: '编辑',
    download: '下载',
    delete: '删除',
    success: '成功',
    folder_name: '文件夹名称',
    upload: '上传',
    upload_files: '上传文件',
    file_upload: '文件上传',
    delete_confirm: '确定删除吗?',
    enter_keyword_tips: '请输入关键词',
    enter_name_tips: '请输入名称',
    enter_description_tips: '请输入描述'
  },
  function: {
    udf_function: 'UDF函数',
    create_udf_function: '创建UDF函数',
    edit_udf_function: '编辑UDF函数',
    udf_function_name: 'UDF函数名称',
    class_name: '类名',
    type: '类型',
    description: '描述',
    jar_package: 'jar包',
    update_time: '更新时间',
    operation: '操作',
    rename: '重命名',
    edit: '编辑',
    delete: '删除',
    success: '成功',
    package_name: '包名类名',
    udf_resources: 'UDF资源',
    instructions: '使用说明',
    upload_resources: '上传资源',
    udf_resources_directory: 'UDF资源目录',
    delete_confirm: '确定删除吗?',
    enter_keyword_tips: '请输入关键词',
    enter_udf_unction_name_tips: '请输入UDF函数名称',
    enter_package_name_tips: '请输入包名类名',
    enter_select_udf_resources_tips: '请选择UDF资源',
    enter_select_udf_resources_directory_tips: '请选择UDF资源目录',
    enter_instructions_tips: '请输入使用说明',
    enter_name_tips: '请输入名称',
    enter_description_tips: '请输入描述'
  },
  task_group_option: {
    manage: '任务组管理',
    option: '任务组配置',
    create: '创建任务组',
    edit: '编辑任务组',
    delete: '删除任务组',
    view_queue: '查看任务组队列',
    switch_status: '切换任务组状态',
    code: '任务组编号',
    name: '任务组名称',
    project_name: '项目名称',
    resource_pool_size: '资源容量',
    resource_used_pool_size: '已用资源',
    desc: '描述信息',
    status: '任务组状态',
    enable_status: '启用',
    disable_status: '不可用',
    please_enter_name: '请输入任务组名称',
    please_enter_desc: '请输入任务组描述',
    please_enter_resource_pool_size: '请输入资源容量大小',
    resource_pool_size_be_a_number: '资源容量大小必须大于等于1的数值',
    please_select_project: '请选择项目',
    create_time: '创建时间',
    update_time: '更新时间',
    actions: '操作',
    please_enter_keywords: '请输入搜索关键词'
  },
  task_group_queue: {
    actions: '操作',
    task_name: '任务名称',
    task_group_name: '任务组名称',
    project_name: '项目名称',
    process_name: '工作流名称',
    process_instance_name: '工作流实例',
    queue: '任务组队列',
    priority: '组内优先级',
    priority_be_a_number: '优先级必须是大于等于0的数值',
    force_starting_status: '是否强制启动',
    in_queue: '是否排队中',
    task_status: '任务状态',
    view_task_group_queue: '查看任务组队列',
    the_status_of_waiting: '等待入队',
    the_status_of_queuing: '排队中',
    the_status_of_releasing: '已释放',
    modify_priority: '修改优先级',
    start_task: '强制启动',
    priority_not_empty: '优先级不能为空',
    priority_must_be_number: '优先级必须是数值',
    please_select_task_name: '请选择节点名称',
    create_time: '创建时间',
    update_time: '更新时间',
    edit_priority: '修改优先级'
  }
}

const project = {
  list: {
    create_project: '创建项目',
    edit_project: '编辑项目',
    project_list: '项目列表',
    project_tips: '请输入项目名称',
    description_tips: '请输入项目描述',
    username_tips: '请输入所属用户',
    project_name: '项目名称',
    project_description: '项目描述',
    owned_users: '所属用户',
    workflow_define_count: '工作流定义数',
    process_instance_running_count: '正在运行的流程数',
    description: '描述',
    create_time: '创建时间',
    update_time: '更新时间',
    operation: '操作',
    edit: '编辑',
    delete: '删除',
    confirm: '确定',
    cancel: '取消',
    delete_confirm: '确定删除吗?'
  },
  workflow: {
    workflow_relation: '工作流关系',
    create_workflow: '创建工作流',
    import_workflow: '导入工作流',
    workflow_name: '工作流名称',
    current_selection: '当前选择',
    online: '已上线',
    offline: '已下线',
    refresh: '刷新',
    show_hide_label: '显示 / 隐藏标签',
    workflow_offline: '工作流下线',
    schedule_offline: '调度下线',
    schedule_start_time: '定时开始时间',
    schedule_end_time: '定时结束时间',
    crontab_expression: 'Crontab',
    workflow_publish_status: '工作流上线状态',
    schedule_publish_status: '定时状态',
    workflow_definition: '工作流定义',
    workflow_instance: '工作流实例',
    status: '状态',
    create_time: '创建时间',
    update_time: '更新时间',
    description: '描述',
    create_user: '创建用户',
    modify_user: '修改用户',
    operation: '操作',
    edit: '编辑',
    confirm: '确定',
    cancel: '取消',
    start: '运行',
    timing: '定时',
    timezone: '时区',
    up_line: '上线',
    down_line: '下线',
    copy_workflow: '复制工作流',
    cron_manage: '定时管理',
    delete: '删除',
    tree_view: '工作流树形图',
    tree_limit: '限制大小',
    export: '导出',
    version_info: '版本信息',
    version: '版本',
    file_upload: '文件上传',
    upload_file: '上传文件',
    upload: '上传',
    file_name: '文件名称',
    success: '成功',
    set_parameters_before_starting: '启动前请先设置参数',
    set_parameters_before_timing: '定时前请先设置参数',
    start_and_stop_time: '起止时间',
    next_five_execution_times: '接下来五次执行时间',
    execute_time: '执行时间',
    failure_strategy: '失败策略',
    notification_strategy: '通知策略',
    workflow_priority: '流程优先级',
    worker_group: 'Worker分组',
    environment_name: '环境名称',
    alarm_group: '告警组',
    complement_data: '补数',
    startup_parameter: '启动参数',
    whether_dry_run: '是否空跑',
    continue: '继续',
    end: '结束',
    none_send: '都不发',
    success_send: '成功发',
    failure_send: '失败发',
    all_send: '成功或失败都发',
    whether_complement_data: '是否是补数',
    schedule_date: '调度日期',
    mode_of_execution: '执行方式',
    serial_execution: '串行执行',
    parallel_execution: '并行执行',
    parallelism: '并行度',
    custom_parallelism: '自定义并行度',
    please_enter_parallelism: '请输入并行度',
    please_choose: '请选择',
    start_time: '开始时间',
    end_time: '结束时间',
    crontab: 'Crontab',
    delete_confirm: '确定删除吗?',
    enter_name_tips: '请输入名称',
    switch_version: '切换到该版本',
    confirm_switch_version: '确定切换到该版本吗?',
    current_version: '当前版本',
    run_type: '运行类型',
    scheduling_time: '调度时间',
    duration: '运行时长',
    run_times: '运行次数',
    fault_tolerant_sign: '容错标识',
    dry_run_flag: '空跑标识',
    executor: '执行用户',
    host: 'Host',
    start_process: '启动工作流',
    execute_from_the_current_node: '从当前节点开始执行',
    recover_tolerance_fault_process: '恢复被容错的工作流',
    resume_the_suspension_process: '恢复运行流程',
    execute_from_the_failed_nodes: '从失败节点开始执行',
    scheduling_execution: '调度执行',
    rerun: '重跑',
    stop: '停止',
    pause: '暂停',
    recovery_waiting_thread: '恢复等待线程',
    recover_serial_wait: '串行恢复',
    recovery_suspend: '恢复运行',
    recovery_failed: '恢复失败',
    gantt: '甘特图',
    name: '名称',
    all_status: '全部状态',
    submit_success: '提交成功',
    running: '正在运行',
    ready_to_pause: '准备暂停',
    ready_to_stop: '准备停止',
    failed: '失败',
    need_fault_tolerance: '需要容错',
    kill: 'Kill',
    waiting_for_thread: '等待线程',
    waiting_for_dependence: '等待依赖',
    waiting_for_dependency_to_complete: '等待依赖完成',
    delay_execution: '延时执行',
    forced_success: '强制成功',
    serial_wait: '串行等待',
    executing: '正在执行',
    startup_type: '启动类型',
    complement_range: '补数范围',
    parameters_variables: '参数变量',
    global_parameters: '全局参数',
    local_parameters: '局部参数',
    type: '类型',
    retry_count: '重试次数',
    submit_time: '提交时间',
    refresh_status_succeeded: '刷新状态成功',
    view_log: '查看日志',
    update_log_success: '更新日志成功',
    no_more_log: '暂无更多日志',
    no_log: '暂无日志',
    loading_log: '正在努力请求日志中...',
    close: '关闭',
    download_log: '下载日志',
    refresh_log: '刷新日志',
    enter_full_screen: '进入全屏',
    cancel_full_screen: '取消全屏',
    task_state: '任务状态',
    mode_of_dependent: '依赖模式',
    open: '打开'
  },
  task: {
    task_name: '任务名称',
    task_type: '任务类型',
    create_task: '创建任务',
    workflow_instance: '工作流实例',
    workflow_name: '工作流名称',
    workflow_name_tips: '请选择工作流名称',
    workflow_state: '工作流状态',
    version: '版本',
    current_version: '当前版本',
    switch_version: '切换到该版本',
    confirm_switch_version: '确定切换到该版本吗?',
    description: '描述',
    move: '移动',
    upstream_tasks: '上游任务',
    executor: '执行用户',
    node_type: '节点类型',
    state: '状态',
    submit_time: '提交时间',
    start_time: '开始时间',
    create_time: '创建时间',
    update_time: '更新时间',
    end_time: '结束时间',
    duration: '运行时间',
    retry_count: '重试次数',
    dry_run_flag: '空跑标识',
    host: '主机',
    operation: '操作',
    edit: '编辑',
    delete: '删除',
    delete_confirm: '确定删除吗?',
    submitted_success: '提交成功',
    running_execution: '正在运行',
    ready_pause: '准备暂停',
    pause: '暂停',
    ready_stop: '准备停止',
    stop: '停止',
    failure: '失败',
    success: '成功',
    need_fault_tolerance: '需要容错',
    kill: 'KILL',
    waiting_thread: '等待线程',
    waiting_depend: '等待依赖完成',
    delay_execution: '延时执行',
    forced_success: '强制成功',
    view_log: '查看日志',
    download_log: '下载日志'
  },
  dag: {
    create: '创建工作流',
    search: '搜索',
    download_png: '下载工作流图片',
    fullscreen_open: '全屏',
    fullscreen_close: '退出全屏',
    save: '保存',
    close: '关闭',
    format: '格式化',
    refresh_dag_status: '刷新DAG状态',
    layout_type: '布局类型',
    grid_layout: '网格布局',
    dagre_layout: '层次布局',
    rows: '行数',
    cols: '列数',
    copy_success: '复制成功',
    workflow_name: '工作流名称',
    description: '描述',
    tenant: '租户',
    timeout_alert: '超时告警',
    global_variables: '全局变量',
    basic_info: '基本信息',
    minute: '分',
    key: '键',
    value: '值',
    success: '成功',
    delete_cell: '删除选中的线或节点',
    online_directly: '是否上线流程定义',
    dag_name_empty: 'DAG图名称不能为空',
    positive_integer: '请输入大于 0 的正整数',
    prop_empty: '自定义参数prop不能为空',
    prop_repeat: 'prop中有重复',
    node_not_created: '未创建节点保存失败',
    copy_name: '复制名称',
    view_variables: '查看变量',
    startup_parameter: '启动参数'
  },
  node: {
    current_node_settings: '当前节点设置',
    instructions: '使用说明',
    view_history: '查看历史',
    view_log: '查看日志',
    enter_this_child_node: '进入该子节点',
    name: '节点名称',
    name_tips: '请输入名称(必填)',
    task_type: '任务类型',
    task_type_tips: '请选择任务类型(必选)',
    process_name: '工作流名称',
    process_name_tips: '请选择工作流(必选)',
    child_node: '子节点',
    enter_child_node: '进入该子节点',
    run_flag: '运行标志',
    normal: '正常',
    prohibition_execution: '禁止执行',
    description: '描述',
    description_tips: '请输入描述',
    task_priority: '任务优先级',
    worker_group: 'Worker分组',
    worker_group_tips: '该Worker分组已经不存在，请选择正确的Worker分组！',
    environment_name: '环境名称',
    task_group_name: '任务组名称',
    task_group_queue_priority: '组内优先级',
    number_of_failed_retries: '失败重试次数',
    times: '次',
    failed_retry_interval: '失败重试间隔',
    minute: '分',
    delay_execution_time: '延时执行时间',
    state: '状态',
    branch_flow: '分支流转',
    cancel: '取消',
    loading: '正在努力加载中...',
    confirm: '确定',
    success: '成功',
    failed: '失败',
    backfill_tips: '新创建子工作流还未执行，不能进入子工作流',
    task_instance_tips: '该任务还未执行，不能进入子工作流',
    branch_tips: '成功分支流转和失败分支流转不能选择同一个节点',
    timeout_alarm: '超时告警',
    timeout_strategy: '超时策略',
    timeout_strategy_tips: '超时策略必须选一个',
    timeout_failure: '超时失败',
    timeout_period: '超时时长',
    timeout_period_tips: '超时时长必须为正整数',
    script: '脚本',
    script_tips: '请输入脚本（必填）',
    resources: '资源',
    resources_tips: '请选择资源',
    no_resources_tips: '请删除所有未授权或已删除资源',
    useless_resources_tips: '未授权或已删除资源',
    custom_parameters: '自定义参数',
    copy_failed: '该浏览器不支持自动复制',
    prop_tips: 'prop(必填)',
    prop_repeat: 'prop中有重复',
    value_tips: 'value(选填)',
    value_required_tips: 'value(必填)',
    pre_tasks: '前置任务',
    program_type: '程序类型',
    spark_version: 'Spark版本',
    main_class: '主函数的Class',
    main_class_tips: '请填写主函数的Class',
    main_package: '主程序包',
    main_package_tips: '请选择主程序包',
    deploy_mode: '部署方式',
    app_name: '任务名称',
    app_name_tips: '请输入任务名称(选填)',
    driver_cores: 'Driver核心数',
    driver_cores_tips: '请输入Driver核心数',
    driver_memory: 'Driver内存数',
    driver_memory_tips: '请输入Driver内存数',
    executor_number: 'Executor数量',
    executor_number_tips: '请输入Executor数量',
    executor_memory: 'Executor内存数',
    executor_memory_tips: '请输入Executor内存数',
    executor_cores: 'Executor核心数',
    executor_cores_tips: '请输入Executor核心数',
    main_arguments: '主程序参数',
    main_arguments_tips: '请输入主程序参数',
    option_parameters: '选项参数',
    option_parameters_tips: '请输入选项参数',
    positive_integer_tips: '应为正整数',
    flink_version: 'Flink版本',
    job_manager_memory: 'JobManager内存数',
    job_manager_memory_tips: '请输入JobManager内存数',
    task_manager_memory: 'TaskManager内存数',
    task_manager_memory_tips: '请输入TaskManager内存数',
    slot_number: 'Slot数量',
    slot_number_tips: '请输入Slot数量',
    parallelism: '并行度',
    custom_parallelism: '自定义并行度',
    parallelism_tips: '请输入并行度',
    parallelism_number_tips: '并行度必须为正整数',
    parallelism_complement_tips:
      '如果存在大量任务需要补数时,可以利用自定义并行度将补数的任务线程设置成合理的数值,避免对服务器造成过大的影响',
    task_manager_number: 'TaskManager数量',
    task_manager_number_tips: '请输入TaskManager数量',
    http_url: '请求地址',
    http_url_tips: '请填写请求地址(必填)',
    http_method: '请求类型',
    http_parameters: '请求参数',
    http_check_condition: '校验条件',
    http_condition: '校验内容',
    http_condition_tips: '请填写校验内容',
    timeout_settings: '超时设置',
    connect_timeout: '连接超时',
    ms: '毫秒',
    socket_timeout: 'Socket超时',
    status_code_default: '默认响应码200',
    status_code_custom: '自定义响应码',
    body_contains: '内容包含',
    body_not_contains: '内容不包含',
    http_parameters_position: '参数位置',
    target_task_name: '目标任务名',
    target_task_name_tips: '请输入Pigeon任务名',
    datasource_type: '数据源类型',
    datasource_instances: '数据源实例',
    sql_type: 'SQL类型',
    sql_type_query: '查询',
    sql_type_non_query: '非查询',
    sql_statement: 'SQL语句',
    pre_sql_statement: '前置SQL语句',
    post_sql_statement: '后置SQL语句',
    sql_input_placeholder: '请输入非查询SQL语句',
    sql_empty_tips: '语句不能为空',
    procedure_method: 'SQL语句',
    procedure_method_tips: '请输入存储脚本',
    procedure_method_snippet:
      '--请输入存储脚本 \n\n--调用存储过程: call <procedure-name>[(<arg1>,<arg2>, ...)] \n\n--调用存储函数：?= call <procedure-name>[(<arg1>,<arg2>, ...)]',
    start: '运行',
    edit: '编辑',
    copy: '复制节点',
    delete: '删除',
    custom_job: '自定义任务',
    custom_script: '自定义脚本',
    sqoop_job_name: '任务名称',
    sqoop_job_name_tips: '请输入任务名称(必填)',
    direct: '流向',
    hadoop_custom_params: 'Hadoop参数',
    sqoop_advanced_parameters: 'Sqoop参数',
    data_source: '数据来源',
    type: '类型',
    datasource: '数据源',
    datasource_tips: '请选择数据源',
    model_type: '模式',
    form: '表单',
    table: '表名',
    table_tips: '请输入Mysql表名(必填)',
    column_type: '列类型',
    all_columns: '全表导入',
    some_columns: '选择列',
    column: '列',
    column_tips: '请输入列名，用 , 隔开',
    database: '数据库',
    database_tips: '请输入Hive数据库(必填)',
    hive_table_tips: '请输入Hive表名(必填)',
    hive_partition_keys: 'Hive 分区键',
    hive_partition_keys_tips: '请输入分区键',
    hive_partition_values: 'Hive 分区值',
    hive_partition_values_tips: '请输入分区值',
    export_dir: '数据源路径',
    export_dir_tips: '请输入数据源路径(必填)',
    sql_statement_tips: 'SQL语句(必填)',
    map_column_hive: 'Hive类型映射',
    map_column_java: 'Java类型映射',
    data_target: '数据目的',
    create_hive_table: '是否创建新表',
    drop_delimiter: '是否删除分隔符',
    over_write_src: '是否覆盖数据源',
    hive_target_dir: 'Hive目标路径',
    hive_target_dir_tips: '请输入Hive临时目录',
    replace_delimiter: '替换分隔符',
    replace_delimiter_tips: '请输入替换分隔符',
    target_dir: '目标路径',
    target_dir_tips: '请输入目标路径(必填)',
    delete_target_dir: '是否删除目录',
    compression_codec: '压缩类型',
    file_type: '保存格式',
    fields_terminated: '列分隔符',
    fields_terminated_tips: '请输入列分隔符',
    lines_terminated: '行分隔符',
    lines_terminated_tips: '请输入行分隔符',
    is_update: '是否更新',
    update_key: '更新列',
    update_key_tips: '请输入更新列',
    update_mode: '更新类型',
    only_update: '只更新',
    allow_insert: '无更新便插入',
    concurrency: '并发度',
    concurrency_tips: '请输入并发度',
    sea_tunnel_master: 'Master',
    sea_tunnel_master_url: 'Master URL',
    sea_tunnel_queue: '队列',
    sea_tunnel_master_url_tips: '请直接填写地址,例如:127.0.0.1:7077',
    switch_condition: '条件',
    switch_branch_flow: '分支流转',
    and: '且',
    or: '或',
    datax_custom_template: '自定义模板',
    datax_json_template: 'JSON',
    datax_target_datasource_type: '目标源类型',
    datax_target_database: '目标源实例',
    datax_target_table: '目标表',
    datax_target_table_tips: '请输入目标表名',
    datax_target_database_pre_sql: '目标库前置SQL',
    datax_target_database_post_sql: '目标库后置SQL',
    datax_non_query_sql_tips: '请输入非查询SQL语句',
    datax_job_speed_byte: '限流(字节数)',
    datax_job_speed_byte_info: '(KB，0代表不限制)',
    datax_job_speed_record: '限流(记录数)',
    datax_job_speed_record_info: '(0代表不限制)',
    datax_job_runtime_memory: '运行内存',
    datax_job_runtime_memory_xms: '最小内存',
    datax_job_runtime_memory_xmx: '最大内存',
    datax_job_runtime_memory_unit: 'G',
    current_hour: '当前小时',
    last_1_hour: '前1小时',
    last_2_hour: '前2小时',
    last_3_hour: '前3小时',
    last_24_hour: '前24小时',
    today: '今天',
    last_1_days: '昨天',
    last_2_days: '前两天',
    last_3_days: '前三天',
    last_7_days: '前七天',
    this_week: '本周',
    last_week: '上周',
    last_monday: '上周一',
    last_tuesday: '上周二',
    last_wednesday: '上周三',
    last_thursday: '上周四',
    last_friday: '上周五',
    last_saturday: '上周六',
    last_sunday: '上周日',
    this_month: '本月',
    last_month: '上月',
    last_month_begin: '上月初',
    last_month_end: '上月末',
    month: '月',
    week: '周',
    day: '日',
    hour: '时',
    add_dependency: '添加依赖',
    waiting_dependent_start: '等待依赖启动',
    check_interval: '检查间隔',
    waiting_dependent_complete: '等待依赖完成',
    rule_name: '规则名称',
    null_check: '空值检测',
    custom_sql: '自定义SQL',
    multi_table_accuracy: '多表准确性',
    multi_table_value_comparison: '两表值比对',
    field_length_check: '字段长度校验',
    uniqueness_check: '唯一性校验',
    regexp_check: '正则表达式',
    timeliness_check: '及时性校验',
    enumeration_check: '枚举值校验',
    table_count_check: '表行数校验',
    src_connector_type: '源数据类型',
    src_datasource_id: '源数据源',
    src_table: '源数据表',
    src_filter: '源表过滤条件',
    src_field: '源表检测列',
    statistics_name: '实际值名',
    check_type: '校验方式',
    operator: '校验操作符',
    threshold: '阈值',
    failure_strategy: '失败策略',
    target_connector_type: '目标数据类型',
    target_datasource_id: '目标数据源',
    target_table: '目标数据表',
    target_filter: '目标表过滤条件',
    mapping_columns: 'ON语句',
    statistics_execute_sql: '实际值计算SQL',
    comparison_name: '期望值名',
    comparison_execute_sql: '期望值计算SQL',
    comparison_type: '期望值类型',
    writer_connector_type: '输出数据类型',
    writer_datasource_id: '输出数据源',
    target_field: '目标表检测列',
    field_length: '字段长度限制',
    logic_operator: '逻辑操作符',
    regexp_pattern: '正则表达式',
    deadline: '截止时间',
    datetime_format: '时间格式',
    enum_list: '枚举值列表',
    begin_time: '起始时间',
    fix_value: '固定值',
    required: '必填',
    emr_flow_define_json: 'jobFlowDefineJson',
    emr_flow_define_json_tips: '请输入工作流定义',
  }
}

const security = {
  tenant: {
    tenant_manage: '租户管理',
    create_tenant: '创建租户',
    search_tips: '请输入关键词',
    tenant_code: '操作系统租户',
    description: '描述',
    queue_name: '队列',
    create_time: '创建时间',
    update_time: '更新时间',
    actions: '操作',
    edit_tenant: '编辑租户',
    tenant_code_tips: '请输入操作系统租户',
    queue_name_tips: '请选择队列',
    description_tips: '请输入描述',
    delete_confirm: '确定删除吗?',
    edit: '编辑',
    delete: '删除'
  },
  alarm_group: {
    create_alarm_group: '创建告警组',
    edit_alarm_group: '编辑告警组',
    search_tips: '请输入关键词',
    alert_group_name_tips: '请输入告警组名称',
    alarm_plugin_instance: '告警组实例',
    alarm_plugin_instance_tips: '请选择告警组实例',
    alarm_group_description_tips: '请输入告警组描述',
    alert_group_name: '告警组名称',
    alarm_group_description: '告警组描述',
    create_time: '创建时间',
    update_time: '更新时间',
    operation: '操作',
    delete_confirm: '确定删除吗?',
    edit: '编辑',
    delete: '删除'
  },
  worker_group: {
    create_worker_group: '创建Worker分组',
    edit_worker_group: '编辑Worker分组',
    search_tips: '请输入关键词',
    operation: '操作',
    delete_confirm: '确定删除吗?',
    edit: '编辑',
    delete: '删除',
    group_name: '分组名称',
    group_name_tips: '请输入分组名称',
    worker_addresses: 'Worker地址',
    worker_addresses_tips: '请选择Worker地址',
    create_time: '创建时间',
    update_time: '更新时间'
  },
  yarn_queue: {
    create_queue: '创建队列',
    edit_queue: '编辑队列',
    search_tips: '请输入关键词',
    queue_name: '队列名',
    queue_value: '队列值',
    create_time: '创建时间',
    update_time: '更新时间',
    operation: '操作',
    edit: '编辑',
    queue_name_tips: '请输入队列名',
    queue_value_tips: '请输入队列值'
  },
  environment: {
    create_environment: '创建环境',
    edit_environment: '编辑环境',
    search_tips: '请输入关键词',
    edit: '编辑',
    delete: '删除',
    environment_name: '环境名称',
    environment_config: '环境配置',
    environment_desc: '环境描述',
    worker_groups: 'Worker分组',
    create_time: '创建时间',
    update_time: '更新时间',
    operation: '操作',
    delete_confirm: '确定删除吗?',
    environment_name_tips: '请输入环境名',
    environment_config_tips: '请输入环境配置',
    environment_description_tips: '请输入环境描述',
    worker_group_tips: '请选择Worker分组'
  },
  token: {
    create_token: '创建令牌',
    edit_token: '编辑令牌',
    search_tips: '请输入关键词',
    user: '用户',
    user_tips: '请选择用户',
    token: '令牌',
    token_tips: '请输入令牌',
    expiration_time: '失效时间',
    expiration_time_tips: '请选择失效时间',
    create_time: '创建时间',
    update_time: '更新时间',
    operation: '操作',
    edit: '编辑',
    delete: '删除',
    delete_confirm: '确定删除吗?'
  },
  user: {
    user_manage: '用户管理',
    create_user: '创建用户',
    update_user: '更新用户',
    delete_user: '删除用户',
    delete_confirm: '确定删除吗?',
    delete_confirm_tip: '删除用户属于危险操作，请谨慎操作！',
    project: '项目',
    resource: '资源',
    file_resource: '文件资源',
    udf_resource: 'UDF资源',
    datasource: '数据源',
    udf: 'UDF函数',
    authorize_project: '项目授权',
    authorize_resource: '资源授权',
    authorize_datasource: '数据源授权',
    authorize_udf: 'UDF函数授权',
    username: '用户名',
    username_exists: '用户名已存在',
    username_rule_msg: '请输入用户名',
    user_password: '密码',
    user_password_rule_msg: '请输入包含字母和数字，长度在6～20之间的密码',
    user_type: '用户类型',
    tenant_code: '租户',
    tenant_id_rule_msg: '请选择租户',
    queue: '队列',
    email: '邮件',
    email_rule_msg: '请输入正确的邮箱',
    phone: '手机',
    phone_rule_msg: '请输入正确的手机号',
    state: '状态',
    state_enabled: '启用',
    state_disabled: '停用',
    create_time: '创建时间',
    update_time: '更新时间',
    operation: '操作',
    edit: '编辑',
    delete: '删除',
    authorize: '授权',
    save_error_msg: '保存失败，请重试',
    delete_error_msg: '删除失败，请重试',
    auth_error_msg: '授权失败，请重试',
    auth_success_msg: '授权成功'
  },
  alarm_instance: {
    search_input_tips: '请输入关键字',
    alarm_instance_manage: '告警实例管理',
    alarm_instance: '告警实例',
    alarm_instance_name: '告警实例名称',
    alarm_instance_name_tips: '请输入告警实例名称',
    alarm_plugin_name: '告警插件名称',
    create_time: '创建时间',
    update_time: '更新时间',
    operation: '操作',
    edit: '编辑',
    delete: '删除',
    confirm: '确定',
    cancel: '取消',
    submit: '提交',
    create: '创建',
    select_plugin: '选择插件',
    select_plugin_tips: '请选择告警插件',
    instance_parameter_exception: '实例参数异常',
    WebHook: 'Web钩子',
    webHook: 'Web钩子',
    IsEnableProxy: '启用代理',
    Proxy: '代理',
    Port: '端口',
    User: '用户',
    corpId: '企业ID',
    secret: '密钥',
    Secret: '密钥',
    users: '群员',
    userSendMsg: '群员信息',
    agentId: '应用ID',
    showType: '内容展示类型',
    receivers: '收件人',
    receiverCcs: '抄送人',
    serverHost: 'SMTP服务器',
    serverPort: 'SMTP端口',
    sender: '发件人',
    enableSmtpAuth: '请求认证',
    Password: '密码',
    starttlsEnable: 'STARTTLS连接',
    sslEnable: 'SSL连接',
    smtpSslTrust: 'SSL证书信任',
    url: 'URL',
    requestType: '请求方式',
    headerParams: '请求头',
    bodyParams: '请求体',
    contentField: '内容字段',
    Keyword: '关键词',
    userParams: '自定义参数',
    path: '脚本路径',
    type: '类型',
    sendType: '发送类型',
    username: '用户名',
    botToken: '机器人Token',
    chatId: '频道ID',
    parseMode: '解析类型'
  },
  k8s_namespace: {
    create_namespace: '创建命名空间',
    edit_namespace: '编辑命名空间',
    search_tips: '请输入关键词',
    k8s_namespace: 'K8S命名空间',
    k8s_namespace_tips: '请输入k8s命名空间',
    k8s_cluster: 'K8S集群',
    k8s_cluster_tips: '请输入k8s集群',
    owner: '负责人',
    owner_tips: '请输入负责人',
    tag: '标签',
    tag_tips: '请输入标签',
    limit_cpu: '最大CPU',
    limit_cpu_tips: '请输入最大CPU',
    limit_memory: '最大内存',
    limit_memory_tips: '请输入最大内存',
    create_time: '创建时间',
    update_time: '更新时间',
    operation: '操作',
    edit: '编辑',
    delete: '删除',
    delete_confirm: '确定删除吗?'
  }
}

const datasource = {
  datasource: '数据源',
  create_datasource: '创建数据源',
  search_input_tips: '请输入关键字',
  datasource_name: '数据源名称',
  datasource_name_tips: '请输入数据源名称',
  datasource_user_name: '所属用户',
  datasource_type: '数据源类型',
  datasource_parameter: '数据源参数',
  description: '描述',
  description_tips: '请输入描述',
  create_time: '创建时间',
  update_time: '更新时间',
  operation: '操作',
  click_to_view: '点击查看',
  delete: '删除',
  confirm: '确定',
  cancel: '取消',
  create: '创建',
  edit: '编辑',
  success: '成功',
  test_connect: '测试连接',
  ip: 'IP主机名',
  ip_tips: '请输入IP主机名',
  port: '端口',
  port_tips: '请输入端口',
  database_name: '数据库名',
  database_name_tips: '请输入数据库名',
  oracle_connect_type: '服务名或SID',
  oracle_connect_type_tips: '请选择服务名或SID',
  oracle_service_name: '服务名',
  oracle_sid: 'SID',
  jdbc_connect_parameters: 'jdbc连接参数',
  principal_tips: '请输入Principal',
  krb5_conf_tips: '请输入kerberos认证参数 java.security.krb5.conf',
  keytab_username_tips: '请输入kerberos认证参数 login.user.keytab.username',
  keytab_path_tips: '请输入kerberos认证参数 login.user.keytab.path',
  format_tips: '请输入格式为',
  connection_parameter: '连接参数',
  user_name: '用户名',
  user_name_tips: '请输入用户名',
  user_password: '密码',
  user_password_tips: '请输入密码'
}

const data_quality = {
  task_result: {
    task_name: '任务名称',
    workflow_instance: '工作流实例',
    rule_type: '规则类型',
    rule_name: '规则名称',
    state: '状态',
    actual_value: '实际值',
    excepted_value: '期望值',
    check_type: '检测类型',
    operator: '操作符',
    threshold: '阈值',
    failure_strategy: '失败策略',
    excepted_value_type: '期望值类型',
    error_output_path: '错误数据路径',
    username: '用户名',
    create_time: '创建时间',
    update_time: '更新时间',
    undone: '未完成',
    success: '成功',
    failure: '失败',
    single_table: '单表检测',
    single_table_custom_sql: '自定义SQL',
    multi_table_accuracy: '多表准确性',
    multi_table_comparison: '两表值对比',
    expected_and_actual_or_expected: '(期望值-实际值)/实际值 x 100%',
    expected_and_actual: '期望值-实际值',
    actual_and_expected: '实际值-期望值',
    actual_or_expected: '实际值/期望值 x 100%'
  },
  rule: {
    actions: '操作',
    name: '规则名称',
    type: '规则类型',
    username: '用户名',
    create_time: '创建时间',
    update_time: '更新时间',
    input_item: '规则输入项',
    view_input_item: '查看规则输入项信息',
    input_item_title: '输入项标题',
    input_item_placeholder: '输入项占位符',
    input_item_type: '输入项类型',
    src_connector_type: '源数据类型',
    src_datasource_id: '源数据源',
    src_table: '源数据表',
    src_filter: '源表过滤条件',
    src_field: '源表检测列',
    statistics_name: '实际值名',
    check_type: '校验方式',
    operator: '校验操作符',
    threshold: '阈值',
    failure_strategy: '失败策略',
    target_connector_type: '目标数据类型',
    target_datasource_id: '目标数据源',
    target_table: '目标数据表',
    target_filter: '目标表过滤条件',
    mapping_columns: 'ON语句',
    statistics_execute_sql: '实际值计算SQL',
    comparison_name: '期望值名',
    comparison_execute_sql: '期望值计算SQL',
    comparison_type: '期望值类型',
    writer_connector_type: '输出数据类型',
    writer_datasource_id: '输出数据源',
    target_field: '目标表检测列',
    field_length: '字段长度限制',
    logic_operator: '逻辑操作符',
    regexp_pattern: '正则表达式',
    deadline: '截止时间',
    datetime_format: '时间格式',
    enum_list: '枚举值列表',
    begin_time: '起始时间',
    fix_value: '固定值',
    null_check: '空值检测',
    custom_sql: '自定义SQL',
    single_table: '单表检测',
    multi_table_accuracy: '多表准确性',
    multi_table_value_comparison: '两表值比对',
    field_length_check: '字段长度校验',
    uniqueness_check: '唯一性校验',
    regexp_check: '正则表达式',
    timeliness_check: '及时性校验',
    enumeration_check: '枚举值校验',
    table_count_check: '表行数校验',
    all: '全部',
    FixValue: '固定值',
    DailyAvg: '日均值',
    WeeklyAvg: '周均值',
    MonthlyAvg: '月均值',
    Last7DayAvg: '最近7天均值',
    Last30DayAvg: '最近30天均值',
    SrcTableTotalRows: '源表总行数',
    TargetTableTotalRows: '目标表总行数'
  }
}
const crontab = {
  second: '秒',
  minute: '分',
  hour: '时',
  day: '天',
  month: '月',
  year: '年',
  monday: '星期一',
  tuesday: '星期二',
  wednesday: '星期三',
  thursday: '星期四',
  friday: '星期五',
  saturday: '星期六',
  sunday: '星期天',
  every_second: '每一秒钟',
  every: '每隔',
  second_carried_out: '秒执行 从',
  second_start: '秒开始',
  specific_second: '具体秒数(可多选)',
  specific_second_tip: '请选择具体秒数',
  cycle_from: '周期从',
  to: '到',
  every_minute: '每一分钟',
  minute_carried_out: '分执行 从',
  minute_start: '分开始',
  specific_minute: '具体分钟数(可多选)',
  specific_minute_tip: '请选择具体分钟数',
  every_hour: '每一小时',
  hour_carried_out: '小时执行 从',
  hour_start: '小时开始',
  specific_hour: '具体小时数(可多选)',
  specific_hour_tip: '请选择具体小时数',
  every_day: '每一天',
  week_carried_out: '周执行 从',
  start: '开始',
  day_carried_out: '天执行 从',
  day_start: '天开始',
  specific_week: '具体星期几(可多选)',
  specific_week_tip: '请选择具体周几',
  specific_day: '具体天数(可多选)',
  specific_day_tip: '请选择具体天数',
  last_day_of_month: '在这个月的最后一天',
  last_work_day_of_month: '在这个月的最后一个工作日',
  last_of_month: '在这个月的最后一个',
  before_end_of_month: '在本月底前',
  recent_business_day_to_month: '最近的工作日（周一至周五）至本月',
  in_this_months: '在这个月的第',
  every_month: '每一月',
  month_carried_out: '月执行 从',
  month_start: '月开始',
  specific_month: '具体月数(可多选)',
  specific_month_tip: '请选择具体月数',
  every_year: '每一年',
  year_carried_out: '年执行 从',
  year_start: '年开始',
  specific_year: '具体年数(可多选)',
  specific_year_tip: '请选择具体年数',
  one_hour: '小时',
  one_day: '日'
}

export default {
  login,
  modal,
  theme,
  userDropdown,
  menu,
  home,
  password,
  profile,
  monitor,
  resource,
  project,
  security,
  datasource,
  data_quality,
  crontab
}
