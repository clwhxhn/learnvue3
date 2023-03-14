import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { ElButton, ElForm } from 'element-plus'
const components = [ElButton, ElForm]

export function registerApp(app): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
