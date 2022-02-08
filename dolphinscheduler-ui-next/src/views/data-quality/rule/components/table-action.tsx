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

import { defineComponent, PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import { NSpace, NTooltip, NButton, NIcon } from 'naive-ui'
import { InfoCircleFilled } from '@vicons/antd'
import type {
  TaskGroupQueueIdReq,
  TaskGroupQueue
} from '@/service/modules/task-group/types'
import { forceStartTaskInQueue } from '@/service/modules/task-group'

interface ItemRow extends TaskGroupQueue {}

const props = {
  row: {
    type: Object as PropType<ItemRow>,
    default: {}
  }
}

const TableAction = defineComponent({
  name: 'TableAction',
  props,
  emits: ['resetTableData', 'updatePriority'],
  setup(props, { emit }) {
    const { t } = useI18n()

    const handleStartTask = (id: number) => {
      const params: TaskGroupQueueIdReq = { queueId: id }

      forceStartTaskInQueue(params).then(() => {
        emit('resetTableData')
      })
    }

    return { t, handleStartTask }
  },
  render() {
    const { t, handleStartTask } = this

    return (
      <NSpace>
        <NTooltip trigger={'hover'}>
          {{
            default: () => t('data_quality.rule.input_item'),
            trigger: () => (
              <NButton
                size='small'
                type='primary'
                tag='div'
                onClick={() => handleStartTask(this.row.id)}
                circle
              >
                <NIcon>
                  <InfoCircleFilled />
                </NIcon>
              </NButton>
            )
          }}
        </NTooltip>
      </NSpace>
    )
  }
})

export default TableAction
