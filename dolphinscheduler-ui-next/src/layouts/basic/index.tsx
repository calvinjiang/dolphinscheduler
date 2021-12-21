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

import { h, defineComponent, ref } from 'vue'
import styles from './index.module.scss'
import { useI18n } from 'vue-i18n'
import {RouteRecordRaw, useRoute} from 'vue-router'
import { UserAlt } from '@vicons/fa'
import { IosArrowDown } from '@vicons/ionicons4';
import { PersonCircleOutline, LogOutOutline } from '@vicons/ionicons5';
import { HomeOutlined, FolderOutlined, SafetyCertificateOutlined } from '@vicons/antd';
import { Database, Notes } from "@vicons/tabler";
import { MonitorFilled } from "@vicons/material";
import { Logo } from './components/logo';
import { NLayout, NLayoutContent, NLayoutSider, NLayoutHeader, NMenu, NDropdown, NButton, NIcon, NAvatar } from 'naive-ui'

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const switchLanguageDropDownOptions = [
  {
    label: 'English',
    key: 'en'
  },
  {
    label: '中文',
    key: 'zh'
  },
]

const dropDownOptions = [
  {
    label: '用户信息',
    key: 'profile',
    icon: renderIcon(PersonCircleOutline)
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(LogOutOutline)
  }
]

const menuOptions = [
  {
    label: '首页',
    key: 'home',
    icon: renderIcon(HomeOutlined)
  },
  {
    label: '项目管理',
    key: 'project',
    icon: renderIcon(Notes),
    children: [
      {
        label: '项目',
        key: 'projects-list'
      },
      {
        label: '工作流监控',
        key: 'projects-index',
      },
    ]
  },
  {
    label: '资源中心',
    key: 'resources',
    icon: renderIcon(FolderOutlined),
    children: [
      {
        label: '文件管理',
        key: 'file',
      },
      {
        label: '创建资源',
        key: 'resource-file-create',
      },
    ]
  },
  {
    label: '数据源中心',
    key: 'datasource',
    icon: renderIcon(Database),
    children: [
      {
        label: '数据源中心',
        key: 'datasource-list',
      }
    ]
  },
  {
    label: '监控中心',
    key: 'monitor',
    icon: renderIcon(MonitorFilled),
    children: [
      {
        key: 'servers-master',
        title: '服务管理-Master'
      },
      {
        key: 'servers-worker',
        title: '服务管理-Worker'
      },
    ]
  },
  {
    label: '安全中心',
    key: 'security',
    icon: renderIcon(SafetyCertificateOutlined),
    children: [
      {
        key: 'tenement-manage',
        label: '租户管理'

      },
      {
        key: 'users-manage',
        label: '用户管理'
      },
    ],
  }
]

const basic = defineComponent({
  name: 'basic',
  setup() {
    const inverted = ref(true)
    const hasSider = ref(false)
    const defaultMenuKey = ref('project')
    const currentMenu = ref({})
    const topMenuOptions = ref([])
    const sideMenuOptions = ref([])

    function handleMenuClick(key, data) {
      currentMenu.value = data
      console.log(key)
      console.log(data)
    }

    function generateMenus() {
      topMenuOptions.value = []
      sideMenuOptions.value = []
      hasSider.value = false
      menuOptions.forEach(option => {
        topMenuOptions.value.push({label:option.label, key: option.key, icon: option.icon})
        if(currentMenu.value.key === option.key || defaultMenuKey.value === option.key) {
          if(option.hasOwnProperty('children') && option.children) {
            sideMenuOptions.value = option.children
            hasSider.value = true
          }
        }
      })
      console.log(topMenuOptions.value)
    }
    generateMenus()
    return { topMenuOptions, sideMenuOptions, inverted, hasSider, handleMenuClick }
  },
  render() {
    if (this.hasSider === true) {
      return (
          <NLayout class={styles.container}>
            <NLayoutHeader class={styles['header-model']} inverted={this.inverted} bordered>
              <Logo/>
              <div class={styles.nav}>
                <NMenu mode='horizontal'
                       onUpdate:value={this.handleMenuClick}
                       class={styles.menu}
                       inverted={this.inverted}
                       options={this.topMenuOptions}/>
                <div class={styles.profile}>
                  <NDropdown inverted={this.inverted} options={switchLanguageDropDownOptions}>
                    <span>
                     中文<NIcon class={styles.icon}><IosArrowDown/></NIcon>
                    </span>
                  </NDropdown>
                  <NDropdown inverted={this.inverted} options={dropDownOptions}>
                    <span>
                      <NIcon class={styles.icon}><UserAlt/></NIcon>
                      admin
                      <NIcon class={styles.icon}><IosArrowDown/></NIcon>
                    </span>
                  </NDropdown>
                </div>
              </div>
            </NLayoutHeader>
            <NLayout hasSider>
              <NLayoutSider
                  width={240}
                  collapseMode={'width'}
                  collapsedWidth={64}
                  inverted={this.inverted}
                  nativeScrollbar={false}
                  show-trigger
                  bordered>
                <NMenu
                    inverted={this.inverted}
                    collapsedWidth={64}
                    collapsedIconSize={22}
                    options={this.sideMenuOptions}
                />
              </NLayoutSider>
              <NLayoutContent>
                <router-view/>
              </NLayoutContent>
            </NLayout>
          </NLayout>
      )
    } else {
      return (
          <NLayout class={styles.container}>
            <NLayoutHeader class={styles['header-model']} inverted={this.inverted} bordered>
              <Logo/>
              <div class={styles.nav}>
                <NMenu mode='horizontal' class={styles.menu} inverted={this.inverted}
                       options={menuOptions}/>
                <div class={styles.profile}>
                  <NDropdown inverted={this.inverted} options={switchLanguageDropDownOptions}>
                    <span>
                     中文<NIcon class={styles.icon}><IosArrowDown/></NIcon>
                    </span>
                  </NDropdown>
                  <NDropdown inverted={this.inverted} options={dropDownOptions}>
                    <span>
                      <NIcon class={styles.icon}><UserAlt/></NIcon>
                      admin
                      <NIcon class={styles.icon}><IosArrowDown/></NIcon>
                    </span>
                  </NDropdown>
                </div>
              </div>
            </NLayoutHeader>
            <NLayout hasSider>
              <NLayoutContent>
                <router-view/>
              </NLayoutContent>
            </NLayout>
          </NLayout>
      )
    }
  },
})

export default basic
