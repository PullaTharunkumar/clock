let updateTime = ()=>
{
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let noon = 'AM';

    hour = date.getHours(12);
    if(date.getHours()>12)
    {
        noon = 'PM';
        hour = hour - 12;
    }

    let modifyTime = (time)=>{
        return time < 10 ? time = "0"+time : time.toString();
    }
    hour = modifyTime(hour)
    min = modifyTime(min)
    sec = modifyTime(sec)

    let currentTime = document.getElementById('currentTime')
    currentTime.innerHTML = hour +' : ' + min + ' : '+ sec +" "+ noon
}
setInterval(updateTime,1000)