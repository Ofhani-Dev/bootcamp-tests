
var morningShift = "morning"
var afternoonShift = "afternoon"
var nightShift = "night"

function transportFee(shift){
	if(shift === morningShift)
  		return "R20"
	else if(shift === afternoonShift)
  		return "R10"
  	else 
      	return "free"
}