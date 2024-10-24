// status js

// 마커 찍을 좌표
var position = new naver.maps.LatLng(35.54205, 129.33825);


// 중앙 좌표
var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(35.54205, 129.33825), // 좌표 설정
    zoom: 18
});



// 마커 설정
var marker = new naver.maps.Marker({
    position: position, /* 좌표 */
    map: map, /* 중앙좌표 */
    
    /* 마커 이미지설정 */
    icon: {
        url: '/img/pawprint.png',
        size: new naver.maps.Size(50, 50),
        origin: new naver.maps.Point(0, 0),
        // anchor: new naver.maps.Point(45, -30)
    }

});




// 정보창 내용
var contentString = [
    '<div class="iw_inner">',
    '   <h3>그린컴퓨터아카데미 울산캠퍼스</h3>',
    '   <p>울산 남구 삼산중로100번길 26 케이엠빌딩 1~4층<br>',
    '       <img src="/img/mapTest.png" width="70" height="70" alt="테스트" class="thumb"><br>',
    '       울산 업스퀘어 후문 - 삼산동 우체국 맞은편<br>',
    '       <a href="https://www.youtube.com/@_dailyvlog4843" target="_blank">www.youtube.com/@_dailyvlog4843</a>',
    '   </p>',
    '</div>'
].join('');


// 정보창 설정
var infowindow = new naver.maps.InfoWindow({
    content: contentString,

    /* 정보창꾸미기 */
    maxWidth: 350,
    backgroundColor: "#ffddcf",
    borderColor: "#ffffff",
    borderWidth: 5, /* 정보창 볼드 */
    anchorSize: new naver.maps.Size(20 , 20), /* 말풍선꼭지 크기 */
    anchorSkew: true,
    anchorColor: "#ffddcf",
    pixelOffset: new naver.maps.Point(10, -10) /* 말풍선위치 */
});

// 정보창 마커 클릭시 이벤트설정
naver.maps.Event.addListener(marker, "click", function(e) {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map, marker);
    }
});











