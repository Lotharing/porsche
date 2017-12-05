	// 存放车辆配置器图片数组
	var cars = new Array("image/car/image01.jpg","image/car/image02.jpg","image/car/image03.jpg",
						 "image/car/image04.jpg","image/car/image05.jpg");
	//用于车辆配置器切换
	function playNext(){
		var flag = cars[0];
		for (var i = 1; i < cars.length; i++) {
			cars[i - 1] = cars[i];
		}
		cars[cars.length - 1] = flag;
		setImgSrc();
	}
	function playLast(){
		var flag = cars[cars.length - 1];
		for (var i = cars.length - 2; i >= 0; i--) {
			cars[i + 1] = cars[i];
		}
		cars[0] = flag;
		setImgSrc();
	}
	//设置车辆配置器图片
	function setImgSrc(){
		document.getElementById("cars_one").src = cars[0];
		document.getElementById("cars_two").src = cars[1];
		document.getElementById("cars_three").src = cars[2];
	}
	