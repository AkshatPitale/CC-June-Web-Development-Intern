var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

// now add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// taking initial value
option_from = inputType.value;
option_to   = resultType.value;


function myResult(){


// when we change the input and output type vale we need to updata the 
// option_from and option_to

	option_from = inputType.value;
	option_to = resultType.value;


// now compare the input and resultType value and add formula

	if(option_from === "meter" && option_to==="kilometer"){
		//this is meter to kilometer formula 
		result.value = Number(input.value) * 0.001;
	}else if(option_from === "meter" && option_to==="Centimeter"){

		//this is meter to Centimeter formula 
		result.value = Number(input.value) * 100;

	}else if(option_from === "meter" && option_to==="meter"){
		//this is meter to meter formula 
		result.value = input.value
	}else if(option_from === "meter" && option_to==="milimeter"){

		//this is meter to Centimeter formula 
		result.value = Number(input.value) * 1000;

	}else if(option_from === "meter" && option_to==="foot"){

		//this is meter to Centimeter formula 
		result.value = Number(input.value) * 3.28;

	}else if(option_from === "meter" && option_to==="inch"){

		//this is meter to Centimeter formula 
		result.value = Number(input.value) * 39.37;

	}else if(option_from === "meter" && option_to==="mile"){

		//this is meter to Centimeter formula 
		result.value = Number(input.value) * 0.000621;

	}



	if(option_from === "kilometer" && option_to==="meter"){
		//this is kilometer to meter formula 
		result.value = Number(input.value) * 1000;
	}else if(option_from === "kilometer" && option_to==="Centimeter"){
		//this is kilometer to Centimeter formula 
		result.value = Number(input.value) * 100000;
	}else if(option_from === "kilometer" && option_to==="kilometer"){
		//this is kilometer to kilometer formula 
		result.value = input.value
	}else if(option_from === "kilometer" && option_to==="milimeter"){
		//this is kilometer to Centimeter formula 
		result.value = Number(input.value) * 1000000;
	}else if(option_from === "kilometer" && option_to==="foot"){
		//this is kilometer to Centimeter formula 
		result.value = Number(input.value) * 3280.84;
	}else if(option_from === "kilometer" && option_to==="inch"){
		//this is kilometer to Centimeter formula 
		result.value = Number(input.value) * 39370.1;
	}else if(option_from === "kilometer" && option_to==="mile"){
		//this is kilometer to Centimeter formula 
		result.value = Number(input.value) * 0.621371;
	}

	if(option_from === "Centimeter" && option_to==="kilometer"){
		//this is Centimeter to kilometer formula 
		result.value = Number(input.value) * 0.00001;
	}else if(option_from === "Centimeter" && option_to==="meter"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 0.01;
	}else if(option_from === "Centimeter" && option_to==="Centimeter"){
		//this is Centimeter to Centimeter formula 
		result.value = input.value
	}else if(option_from === "Centimeter" && option_to==="milimeter"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 10;
	}else if(option_from === "Centimeter" && option_to==="foot"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 0.03280;
	}else if(option_from === "Centimeter" && option_to==="inch"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 0.393701;
	}else if(option_from === "Centimeter" && option_to==="mile"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 6.2137e-6;
	}



    if(option_from === "milimeter" && option_to==="kilometer"){
		//this is Centimeter to kilometer formula 
		result.value = Number(input.value) * 1e-6;
	}else if(option_from === "milimeter" && option_to==="meter"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 0.001;
	}else if(option_from === "milimeter" && option_to==="milimeter"){
		//this is Centimeter to Centimeter formula 
		result.value = input.value
	}else if(option_from === "milimeter" && option_to==="Centimeter"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 0.1;
	}else if(option_from === "milimeter" && option_to==="foot"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 0.003280;
	}else if(option_from === "milimeter" && option_to==="inch"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 0.0393701;
	}else if(option_from === "milimeter" && option_to==="mile"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 6.2137e-7;
	}



    if(option_from === "foot" && option_to==="kilometer"){
		//this is Centimeter to kilometer formula 
		result.value = Number(input.value) * 0.0003048;
	}else if(option_from === "foot" && option_to==="meter"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 0.3048;
	}else if(option_from === "foot" && option_to==="foot"){
		//this is Centimeter to Centimeter formula 
		result.value = input.value
	}else if(option_from === "foot" && option_to==="Centimeter"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 30.48;
	}else if(option_from === "foot" && option_to==="milimeter"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 304.8;
	}else if(option_from === "foot" && option_to==="inch"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 12;
	}else if(option_from === "foot" && option_to==="mile"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 0.000189394;
	}



    if(option_from === "inch" && option_to==="kilometer"){
		//this is Centimeter to kilometer formula 
		result.value = Number(input.value) * 2.54e-5;
	}else if(option_from === "inch" && option_to==="meter"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 0.0254;
	}else if(option_from === "inch" && option_to==="inch"){
		//this is Centimeter to Centimeter formula 
		result.value = input.value
	}else if(option_from === "inch" && option_to==="Centimeter"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 2.54;
	}else if(option_from === "inch" && option_to==="milimeter"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 25.4;
	}else if(option_from === "inch" && option_to==="foot"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 0.083333;
	}else if(option_from === "inch" && option_to==="mile"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 1.5783e-5;
	}



    if(option_from === "mile" && option_to==="kilometer"){
		//this is Centimeter to kilometer formula 
		result.value = Number(input.value) * 1.60934;
	}else if(option_from === "mile" && option_to==="meter"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 1609.34;
	}else if(option_from === "mile" && option_to==="mile"){
		//this is Centimeter to Centimeter formula 
		result.value = input.value
	}else if(option_from === "mile" && option_to==="Centimeter"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 160934;
	}else if(option_from === "mile" && option_to==="milimeter"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 1609e+6;
	}else if(option_from === "mile" && option_to==="foot"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 5280;
	}else if(option_from === "mile" && option_to==="inch"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 63360;
	}

	





}
