//your JS code here. If required.
let para = document.querySelector("#timer")


function currentTime() {
	  let date = new Date()
	  let hour = date.getHours()
	  let min = date.getMinutes()
	  let sec = date.getSeconds()
	  let day = date.getDay()  
      let month = date.getMonth()
      let year = date.getFullYear()
	   let arrayofTime = convertTime(hour, min, sec) 
       // [hour, min, sec, AM/PM]
       for(i = 0; i<=2; i++){
        arrayofTime[i] = addZero(arrayofTime[i])
       }
    let time = `${arrayofTime[0]}:${arrayofTime[1]}:${arrayofTime[2]} ${arrayofTime[3]}`
      para.innerHTML = `${month}/${day}/${year}, ${time} `

	// return `${month}/${day}/${year}, ${time} `
}

// let ans = currentTime()
// alert(ans)

setInterval(currentTime,1000)



function convertTime(hr, min, sec){

  //  11:59Pm = 23:59
  // 12:00Am = 00:00

    if(hr>12){
      hr = hr - 12  
    return [hr, min, sec, "PM"]
    }
    else if(hr == 0){
        // return `12:${min}:${sec} AM`
        return [12, min, sec, "AM"]
    }
    else if(hr<12){
    //   return `${hr}:${min}:${sec} AM`
      return [hr, min, sec, "AM"]
    }
    else if(hr == 12){
        // return `${hr}:${min}:${sec} PM`
        return [hr, min, sec, "PM"]
    }
    
}


function addZero(k){
  if(k<10){
    return "0"+k
  }
  else {
    return k
  }
}

