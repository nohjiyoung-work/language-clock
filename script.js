// 1. 24시간제 '시' 한글 데이터 배열 유지 (0번 인덱스 = 24시)
const hourText = [
    "이십사", "한", "두", "세", "네", "다섯", "여섯", "일곱", "여덟", "아홉", "열", "열한", "열두",
    "열세", "열네", "열다섯", "열여섯", "열일곱", "열여덟", "열아홉", "스무", "스물한", "스물두", "스물세"
];
const tensText = ["", "십", "이십", "삼십", "사십", "오십"];
const unitsText = ["", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];

function updateClock() {
    const now = new Date();
    const hour = now.getHours();     // 0 ~ 23시를 가져옵니다.
    const minute = now.getMinutes();

    // 2. [시침 글자 만들기] 24시간제 글자 그대로 표현
    const hIdx = hour === 0 ? 0 : hour;
    const hString = hourText[hIdx] + "시";

    // 3. [분침 글자 만들기]
    let mString = "";
    if (minute === 0) {
        mString = "정각";
    } else {
        const tens = Math.floor(minute / 10);
        const units = minute % 10;
        mString = tensText[tens] + unitsText[units] + "분";
    }

    // HTML에 글자 주입
    document.getElementById("kor-hour-hand").innerText = hString;
    document.getElementById("kor-minute-hand").innerText = mString;

    // 4. 🧭 [12시간 기준 360도 회전 각도 계산]
    // 글자는 "이십삼시"라고 나오지만, 각도는 12시간마다 한 바퀴(하루 2번 회전) 돌도록 설정합니다.
    
    // hour % 12를 통해 13시는 1시 각도로, 23시는 11시 각도로 변환합니다.
    const displayHour = hour % 12; 

    // 시침: 12시간 기준이므로 1시간에 '30도'씩 움직입니다. (360 / 12 = 30)
    // 분이 흐를 때 시침도 미세하게 움직이도록 (minute * 0.5도)를 더해줍니다. (30도 / 60분 = 0.5)
    const hourDeg = (displayHour * 30) + (minute * 0.5) - 90;
    
    // 분침: 언제나 60분 동안 360도를 도므로 1분에 '6도'씩 움직입니다.
    const minuteDeg = (minute * 6) - 90;

    // 개별 중심축 회전시키기
    document.getElementById("hour-axis").style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById("minute-axis").style.transform = `rotate(${minuteDeg}deg)`;
}

// 1초마다 실시간 업데이트
updateClock();
setInterval(updateClock, 1000);
