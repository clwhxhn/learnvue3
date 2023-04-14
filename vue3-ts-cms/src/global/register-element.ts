import type { App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { ElButton, ElForm } from 'element-plus'
const components = [ElButton, ElForm]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
