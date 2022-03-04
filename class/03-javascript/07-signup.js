function checkValidation() {
	let email = document.getElementById("email").value
	let pw1 = document.getElementById("pw1").value
	let pw2 = document.getElementById("pw2").value

	// 만약, email, pw1, pw2가 빈 값이 아닐 때
	//버튼 비활성화를 제거하고, 버튼의 배경색을 노란색으로 변경

	//else
	//버튼을 비활성화하고, 버튼의 배경색을 제거

	if (email !== "" && pw1 !== "" && pw2 !== "") {
		document.getElementById("submit").disabled = false;
		document.getElementById("submit").setAttribute("style","background-color: yellow")
	} else {
		document.getElementById("submit").disabled = true;
		document.getElementById("submit").setAttribute("style","background-color: none")
	}

}