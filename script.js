// ── 언어 모듈 ──────────────────────────────────────────────────────────────

const languages = {

    kor: {
      label: "Kor",
      getHour(h) {
        const hourText = [
          "이십사", "한", "두", "세", "네", "다섯", "여섯", "일곱", "여덟", "아홉", "열", "열한", "열두",
          "열세", "열네", "열다섯", "열여섯", "열일곱", "열여덟", "열아홉", "스무", "스물한", "스물두", "스물세"
        ];
        return hourText[h === 0 ? 0 : h] + "시";
      },
      getMinute(m) {
        if (m === 0) return "정각";
        const tens = ["", "십", "이십", "삼십", "사십", "오십"];
        const units = ["", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];
        return tens[Math.floor(m / 10)] + units[m % 10] + "분";
      }
    },
  
    eng: {
      label: "Eng",
      getHour(h) {
        const words = [
          "Twenty-Four", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
          "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "Twenty-One", "Twenty-Two", "Twenty-Three"
        ];
        const hIdx = h === 0 ? 0 : h;
        return words[hIdx];
      },
      getMinute(m) {
        if (m === 0) return "Hours";
        
        const ones = [
          "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
          "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
        ];
        const tens = ["", "", "twenty", "thirty", "forty", "fifty"];
        
        if (m < 20) return ones[m];
        const t = Math.floor(m / 10), u = m % 10;
        
        return (u === 0 ? tens[t] : tens[t] + " " + ones[u]);
      }
    },
  
    fra: {
      label: "Fra",
      getHour(h) {
        const words = [
          "Minuit", "Une", "Deux", "Trois", "Quatre", "Cinq", "Six",
          "Sept", "Huit", "Neuf", "Dix", "Onze", "Midi",
          "Treize", "Quatorze", "Quinze", "Seize", "Dix-Sept",
          "Dix-Huit", "Dix-Neuf", "Vingt", "Vingt et Une", "Vingt-Deux", "Vingt-Trois"
        ];
    
        if (h === 0) return "Minuit";
        if (h === 12) return "Midi";
    
        const suffix = (h === 1) ? " heure" : " heures";
        return words[h] + suffix;
      },
      getMinute(m) {
        if (m === 0) return "pile";
    
        const ones = [
          "", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix",
          "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"
        ];
        const tens = ["", "", "vingt", "trente", "quarante", "cinquante"];
    
        if (m < 20) return ones[m];
        const t = Math.floor(m / 10), u = m % 10;
        
        if (u === 0) return tens[t];
        if (u === 1) return tens[t] + " et un";
        
        return tens[t] + "-" + ones[u];
      }
    },
  
    jpn: {
      label: "Jpn",
      getHour(h) {
        // 💡 타 언어와 24시간제 싱크를 맞추기 위해 0시 표기를 "二十四"로 교정했습니다.
        const words = [
          "二十四", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二",
          "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "二十一", "二十二", "二十三"
        ];
        const hIdx = h === 0 ? 0 : h;
        return words[hIdx] + "時";
      },
      getMinute(m) {
        if (m === 0) return "ちょうど";
        const tens = ["", "十", "二十", "三十", "四十", "五十"];
        const units = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
        return tens[Math.floor(m / 10)] + units[m % 10] + "分";
      }
    },
  
    // 💡 [추가] 중국어 모듈 깔끔하게 결합 완료!
    chn: {
      label: "Chn",
      getHour(h) {
        const words = [
          "二十四", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二",
          "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "二十一", "二十二", "二十三"
        ];
        const hIdx = h === 0 ? 0 : h;
        if (hIdx === 2) return "两点"; // 2시는 '两点'이 자연스럽습니다.
        return words[hIdx] + "点";
      },
      getMinute(m) {
        if (m === 0) return "整";
        const tens = ["", "十", "二十", "三十", "四十", "五十"];
        const units = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
        if (m < 10) return "零" + units[m] + "分"; // 10분 미만일 땐 중간에 '零' 추가
        return tens[Math.floor(m / 10)] + units[m % 10] + "分";
      }
    }
  
  };
  
  // ── 상태 & 렌더 ────────────────────────────────────────────────────────────
  
  let currentLang = "kor";
  
  function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const lang = languages[currentLang];
  
    document.getElementById("kor-hour-hand").innerText = lang.getHour(hour);
    document.getElementById("kor-minute-hand").innerText = lang.getMinute(minute);
  
    const hourDeg = (hour % 12 * 30) + (minute * 0.5) - 90;
    const minuteDeg = (minute * 6) - 90;
  
    document.getElementById("hour-axis").style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById("minute-axis").style.transform = `rotate(${minuteDeg}deg)`;
  }
  
  // ── select 옵션 동적 생성 ──────────────────────────────────────────────────
  
  const sel = document.getElementById("lang-select");
  Object.entries(languages).forEach(([key, val]) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = val.label;
    sel.appendChild(opt);
  });
  
  sel.addEventListener("change", e => {
    currentLang = e.target.value;
    updateClock();
  });
  
  // ── 실행 ──────────────────────────────────────────────────────────────────
  
  updateClock();
  setInterval(updateClock, 1000);
