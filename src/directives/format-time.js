import dayjs from 'dayjs'
export default function(app){
    app.directive('format-time',{
        created(el, bindings) {
            bindings.formatStr = 'YYYY-MM-DD HH:mm:ss' // 该段代码也可以放在mounted中，一般初始化代码，放在created中比较好
            if(bindings.value){
                bindings.formatStr = bindings.value
            }
        },
        mounted(el, bindings){
            console.log('el: ', el);
            const contentText = el.textContent
            let timestap = parseInt(contentText)
            if(contentText.length === 10){
                timestap = timestap * 1000
            }
            // let formatStr = 'YYYY-MM-DD'
            // if(bindings.value){
            //     formatStr = bindings.value
            // }
            el.textContent = dayjs(timestap).format(bindings.value ?? formatStr)
        }
    })
} 