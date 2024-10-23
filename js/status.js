// status js

// 마커 찍을 좌표
var position = new naver.maps.LatLng(35.54220, 129.3383);

// 중앙 좌표
var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(35.54220, 129.3383), // 좌표 설정
    zoom: 19
});



// 마커 설정
var marker = new naver.maps.Marker({
    position: position, // 좌표
    map: map,
});

var HOME_PATH = window.HOME_PATH || '.';
var markerOptions = {
    position: position.destinationPoint(90, 16),
    map: map,
    icon: {
        url: HOME_PATH +'/img/logo2.PNG',
        size: new naver.maps.Size(50, 52),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(25, 26)
    }
};

// 마커2
var marker = new naver.maps.Marker(markerOptions);




// 정보창 내용
var contentString = [
    '<div class="iw_inner">',
    '   <h3>그린컴퓨터아카데미 울산캠퍼스</h3>',
    '   <p>울산 남구 삼산중로100번길 26 케이엠빌딩 1~4층<br>',
    '       <img src="" width="55" height="55" alt="테스트" class="thumb"><br>',
    '       울산 업스퀘어 후문 - 삼산동 우체국 맞은편<br>',
    '       <a href="https://www.youtube.com/@_dailyvlog4843" target="_blank">www.youtube.com/@_dailyvlog4843</a>',
    '   </p>',
    '</div>'
].join('');


// 정보 설정
var infowindow = new naver.maps.InfoWindow({
    content: contentString
});

// 정보창 마커 클릭시 이벤트설정
naver.maps.Event.addListener(marker, "click", function(e) {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map, marker);
    }
});











