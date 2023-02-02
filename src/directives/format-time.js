import dayjs from 'dayjs'
export default function(app){
    app.directive('format-time',{
        mounted(el, bindings){
            console.log('el: ', el);
            const contentText = el.textContent
            let timestap = parseInt(contentText)
            if(contentText.length === 10){
                timestap = timestap * 1000
            }
            let formatStr = 'YYYY-MM-DD'
            if(bindings.value){
                formatStr = bindings.value
            }
            el.textContent = dayjs(timestap).format(bindings.value ?? formatStr)
        }
    })
}