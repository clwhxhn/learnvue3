import axios from 'axios' // 导入的其实就是axios的实例对象

// axios.request({
//   method: 'get'
// })

// // 等同于

// axios.get('xxx')

axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res)
})

axios.post('http://httpbin.org/post').then((res) => {
  console.log(res)
})
