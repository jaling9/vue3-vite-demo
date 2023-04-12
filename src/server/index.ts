import axios from 'axios'

const server = axios.create({
  baseURL: 'http://localhost:3333'
})
export const getApiList = () => {
  return server.get('/api/list').then((res) => {
    res.data
  })
}

// 封装一个原生ajax请求
// export const axios = {
//   get<T>(url: string): Promise<T> {
//     return new Promise<T>((resolve, reject) => {
//       const xhr = new XMLHttpRequest()
//       xhr.open('GET', url)
//       xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//           if (xhr.status === 200) {
//             setTimeout(() => {
//               resolve(JSON.parse(xhr.responseText))
//             }, 3000)
//           } else {
//             reject(xhr.status)
//           }
//         }
//         xhr.send(null)
//       }
//     })
//   }
// }

// export default function ajax(url: string, data: any = {}, type: string = 'GET') {
//   return new Promise((resolve, reject) => {
//     let promise
//     if (type === 'GET') {
//       let dataStr = ''
//       Object.keys(data).forEach((key) => {
//         dataStr += key + '=' + data[key] + '&'
//       })
//       if (dataStr !== '') {
//         dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
//         url = url + '?' + dataStr
//       }
//       promise = axios.get(url)
//     } else {
//       promise = axios.post(url, data)
//     }
//     promise
//       .then((response: any) => {
//         resolve(response.data)
//       })
//       .catch((error: any) => {
//         reject(error)
//       })
//   })
// }
