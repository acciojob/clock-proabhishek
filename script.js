let para = document.getElementById("timer")

function currentTime(){
	let date = new Date()
    let hr = date.getHours()
    let minute = date.getMinutes()
	minute = minute <=9 ? "0"+minute : minute
    let second = date.getSeconds()
    second = second <=9 ? "0"+second : second
    let am_pm

	if(hr == 0){
		hr = 12
		am_pm = "AM"
	}
	else if(hr<12){
		am_pm = "AM"
	}
	else if(hr == 12){
		am_pm = "PM"
	}
	else if(hr>12){
		hr = hr  - 12 
		am_pm = "PM"
	}
	
	
	let dateDay = date.getDate() 
    let month = date.getMonth()+1 // 0-11 
    let year = date.getFullYear() 

     
	para.innerText = `${month}/${dateDay}/${year}, ${hr}:${minute}:${second} ${am_pm}`
}


setInterval(currentTime, 1000)









