// 1. 24시간제에 맞는 '시' 한글 데이터 배열 (0번 인덱스 = 24시)
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

    // 2. [시침 글자 만들기] 0시는 '이십사시', 나머지는 배열 순서대로
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

    // 4. 🧭 [24시간제 전용 각도 계산]
    // 12시 방향 보정(-90도)을 기준으로 계산합니다.
    
    // 시침: 24시간 동안 360도를 돌기 때문에 1시간에 '15도'씩 움직입니다. (360 / 24 = 15)
    // 분이 흐를 때 시침도 미세하게 움직이도록 (minute * 0.25도)를 더해줍니다. (15도 / 60분 = 0.25)
    const hourDeg = (hour * 15) + (minute * 0.25) - 90;
    
    // 분침: 분침은 24시간제와 상관없이 언제나 60분 동안 360도를 도므로 1분에 '6도'씩 움직입니다.
    const minuteDeg = (minute * 6) - 90;

    // 개별 중심축 회전시키기
    document.getElementById("hour-axis").style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById("minute-axis").style.transform = `rotate(${minuteDeg}deg)`;
}

// 1초마다 실시간 업데이트
updateClock();
setInterval(updateClock, 1000);
