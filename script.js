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

  chn: {
    label: "Chn",
    getHour(h) {
      const words = [
        "二十四", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二",
        "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "二十一", "二十二", "二十三"
      ];
      const hIdx = h === 0 ? 0 : h;
      if (hIdx === 2) return "两点"; 
      return words[hIdx] + "点";
    },
    getMinute(m) {
      if (m === 0) return "整";
      const tens = ["", "十", "二十", "三十", "四十", "五十"];
      const units = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
      if (m < 10) return "零" + units[m] + "分"; 
      return tens[Math.floor(m / 10)] + units[m % 10] + "分";
    }
  },

  yue: {
    label: "Yue",
    getHour(h) {
      const words = [
        "二十四", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二",
        "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "二十一", "二十二", "二十三"
      ];
      const hIdx = h === 0 ? 0 : h;
      if (hIdx === 2) return "雙點"; 
      return words[hIdx] + "點";
    },
    getMinute(m) {
      if (m === 0) return "正";
      const tens = ["", "十", "二十", "三十", "四十", "五十"];
      const units = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
      if (m < 10) return "零" + units[m] + "分"; 
      return tens[Math.floor(m / 10)] + units[m % 10] + "分";
    }
  },

  tha: {
    label: "Tha",
    getHour(h) {
      const words = [
        "ยี่สิบสี่", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า", "สิบ", "สิบเอ็ด", "สิบสอง",
        "สิบสาม", "สิบสี่", "สิบห้า", "สิบหก", "สิบเจ็ด", "สิบแปด", "สิบเก้า", "ยี่สิบ", "ยี่สิบเอ็ด", "ยี่สิบสอง", "ยี่สิบสาม"
      ];
      const hIdx = h === 0 ? 0 : h;
      return words[hIdx] + " นาฬิกา";
    },
    getMinute(m) {
      if (m === 0) return "ตรง";
      const ones = ["", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า"];
      const tens = ["", "สิบ", "ยี่สิบ", "สามสิบ", "สี่สิบ", "ห้าสิบ"];
      let mStr = "";
      if (m < 10) {
        mStr = ones[m];
      } else {
        const t = Math.floor(m / 10), u = m % 10;
        const uStr = (u === 1) ? "เอ็ด" : ones[u];
        mStr = tens[t] + uStr;
      }
      return mStr + " นาที";
    }
  },

  mya: {
    label: "Mya",
    getHour(h) {
      const words = [
        "နှစ်ဆယ့်လေး", "တစ်", "နှစ်", "သုံး", "လေး", "ငါး", "ခြောက်", "ခုနစ်", "ရှစ်", "ကိုး", "ဆယ်", "ဆယ့်တစ်", "ဆယ့်နှစ်",
        "ဆယ့်သုံး", "ဆယ့်လေး", "ဆယ့်ငါး", "ဆယ့်ခြောက်", "ဆယ့်ခုနစ်", "ဆယ့်ရှစ်", "ဆယ့်ကိုး", "နှစ်ဆယ်", "နှစ်ဆယ့်တစ်", "နှစ်ဆယ့်နှစ်", "နှစ်ဆယ့်သုံး"
      ];
      const hIdx = h === 0 ? 0 : h;
      return words[hIdx] + " နာရီ";
    },
    getMinute(m) {
      if (m === 0) return "တိတိ";
      const ones = ["", "တစ်", "နှစ်", "သုံး", "လေး", "ငါး", "ခြောက်", "ခုနစ်", "ရှစ်", "ကိုး"];
      const tens = ["", "ဆယ်", "နှစ်ဆယ်", "သုံးဆယ်", "လေးဆယ်", "ငါးဆယ်"];
      let mStr = "";
      if (m < 10) {
        mStr = ones[m];
      } else {
        const t = Math.floor(m / 10), u = m % 10;
        const tStr = (t === 1) ? "ဆယ့်" : tens[t] + "့"; 
        mStr = tStr + ones[u];
      }
      return mStr + " မိနစ်";
    }
  },

  rus: {
    label: "Rus",
    getHour(h) {
      const words = [
        "Двадцать четыре", "Один", "Два", "Три", "Четыре", "Пять", "Шесть", "Семь", "Восемь", "Девять", "Десять", "Одиннадцать", "Двенадцать",
        "Тринадцать", "Четырнадцать", "Пятнадцать", "Шестнадцать", "Семнадцать", "Восемнадцать", "Девятнадцать", "Двадцать", "Двадцать один", "Двадцать два", "Двадцать три"
      ];
      const hIdx = h === 0 ? 0 : h;
      let suffix = " часов";
      if (hIdx === 1 || hIdx === 21) suffix = " час";
      else if ((hIdx >= 2 && hIdx <= 4) || hIdx === 22 || hIdx === 23) suffix = " часа";
      return words[hIdx] + suffix;
    },
    getMinute(m) {
      if (m === 0) return "ровно";
      const ones = [
        "", "одна", "две", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", "десять",
        "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"
      ];
      const tens = ["", "", "двадцать", "тридцать", "сорок", "пятьдесят"];
      let mStr = "";
      if (m < 20) {
        mStr = ones[m];
      } else {
        const t = Math.floor(m / 10), u = m % 10;
        mStr = (u === 0 ? tens[t] : tens[t] + " " + ones[u]);
      }
      let suffix = " минут";
      const lastDigit = m % 10;
      if (m < 10 || m > 20) {
        if (lastDigit === 1) suffix = " минута";
        else if (lastDigit >= 2 && lastDigit <= 4) suffix = " минуты";
      }
      return mStr + suffix;
    }
  },

  amh: {
    label: "Amh",
    getHour(h) {
      const words = [
        "ሃያ አራት", "አንድ", "ሁለት", "ሦስት", "አራት", "አምስት", "ስድስት", "ሰባት", "ስምንት", "ዘጠኝ", "አስር", "አስራ አንድ", "አስራ ሁለት",
        "አስራ ሦስት", "አስራ አራት", "አስራ አምስት", "አስራ ስድስት", "አስራ ሰባት", "አስራ ስምንት", "አስራ ዘጠኝ", "ሃያ", "ሃያ አንድ", "ሃያ ሁለት", "ሃያ ሦስት"
      ];
      const hIdx = h === 0 ? 0 : h;
      return words[hIdx] + " ሰዓት";
    },
    getMinute(m) {
      if (m === 0) return "ትክክለኛ";
      const ones = ["", "አንድ", "ሁለት", "ሦስት", "አራት", "አምስት", "ስድስት", "ሰባት", "ስምንት", "ዘጠኝ"];
      const tens = ["", "አስር", "ሃያ", "ሠላሳ", "አርባ", "ሃምሳ"];
      let mStr = "";
      if (m < 10) {
        mStr = ones[m];
      } else if (m < 20) {
        const amhTeens = ["አስር", "አስራ አንድ", "አስራ ሁለት", "አስራ ሦስት", "አስራ አራት", "አስራ አምስት", "አስራ ስድስት", "አስራ ሰባት", "አስራ ስምንት", "አስራ ዘጠኝ"];
        mStr = amhTeens[m - 10];
      } else {
        const t = Math.floor(m / 10), u = m % 10;
        mStr = (u === 0 ? tens[t] : tens[t] + " " + ones[u]);
      }
      return mStr + " ደቂቃ";
    }
  },

  // 💡 [신규 추가] 아랍어 모듈
  ara: {
    label: "Ara",
    getHour(h) {
      const words = [
        "الأربعة والعشرون", "الواحدة", "الثانية", "الثالثة", "الرابعة", "الخامسة", "السادسة", "السابعة", "الثامنة", "التاسعة", "العاشرة", "الحادية عشرة", "الثانية عشرة",
        "الثالثة عشرة", "الرابعة عشرة", "الخامسة عشرة", "السادسة عشرة", "السابعة عشرة", "الثامنة عشرة", "التاسعة عشرة", "العشرون", "الحادية والعشرون", "الثانية والعشرون", "الثالثة والعشرون"
      ];
      const hIdx = h === 0 ? 0 : h;
      return "الساعة " + words[hIdx]; // 'الساعة(시)'가 숫자 앞에 붙는 것이 아랍어 시간 표현의 표준입니다.
    },
    getMinute(m) {
      if (m === 0) return "تماماً"; // 정각 = '타마아만'
      
      const ones = ["", "دقيقة واحدة", "دقيقتان", "ثلاث دقائق", "أربع دقائق", "خمس دقائق", "ست دقائق", "سبع دقائق", "ثماني دقائق", "تسع دقائق"];
      const words = [
        "", "", "", "", "", "", "", "", "", "", "عشر دقائق", "إحدى عشرة دقيقة", "اثنتا عشرة دقيقة", "ثلاث عشرة دقيقة", "أربع عشرة دقيقة", 
        "خمس عشرة دقيقة", "ست عشرة دقيقة", "سبع عشرة دقيقة", "ثماني عشرة دقيقة", "تسع عشرة دقيقة"
      ];
      const tens = ["", "", "عشرون دقيقة", "ثلاثون دقيقة", "أربعون دقيقة", "خمسون دقيقة"];
      const unitNames = ["", "واحد وعشرون دقيقة", "اثنان وعشرون دقيقة", "ثلاثة وعشرون دقيقة", "أربعة وعشرون دقيقة", "خمسة وعشرون دقيقة", "ستة وعشرون دقيقة", "سبعة وعشرون دقيقة", "ثمانية وعشرون دقيقة", "تسعة وعشرون دقيقة"];

      if (m < 10) return ones[m];
      if (m < 20) return words[m];
      
      const t = Math.floor(m / 10), u = m % 10;
      if (u === 0) return tens[t];
      
      // 20, 30, 40, 50대 분의 결합 처리
      const tenWords = ["", "", "عشرون", "ثلاثون", "أربعون", "خمسون"];
      const unitsWords = ["", "واحد", "اثنان", "ثلاثة", "أربعة", "خمسة", "ستة", "سبعة", "ثمانية", "تسعة"];
      return unitsWords[u] + " و" + tenWords[t] + " دقيقة"; // '몇 분과 몇 십분' 형태로 읽음
    }
  },

  // 💡 [신규 추가] 힌디어 모듈
  hin: {
    label: "Hin",
    getHour(h) {
      const words = [
        "चौबीस", "एक", "दो", "तीन", "चार", "पाँच", "छह", "सात", "आठ", "नौ", "दस", "ग्यारह", "बारह",
        "तेरह", "चौदह", "पंद्रह", "सोलह", "सत्रह", "अठारह", "उन्नीस", "बीस", "इक्कीस", "बाईस", "तेईस"
      ];
      const hIdx = h === 0 ? 0 : h;
      return words[hIdx] + " बजे"; // 시 = 'बजे(바제)'
    },
    getMinute(m) {
      if (m === 0) return "सटीक"; // 정각 = '사티크'
      
      const words = [
        "", "एक", "दो", "तीन", "चार", "पाँच", "छह", "सात", "आठ", "नौ", "दस",
        "ग्यारह", "बारह", "तेरह", "चौदह", "पंद्रह", "सोलह", "सत्रह", "अठारह", "उन्नीस", "बीस",
        "इक्कीस", "बाईस", "तेईस", "चौबीस", "पच्चीस", "छब्बीस", "सत्ताईस", "अट्ठाईस", "उनतीस", "तीस",
        "इकतीस", "बत्तीस", "तेँतीस", "चौँतीस", "पैँतीस", "छत्तीस", "सैँतीस", "अड़तीस", "उनतालीस", "चालीस",
        "इकतालीस", "बयालीस", "तैँतालीस", "चैँतालीस", "पैँतालीस", "छियालीस", "सैँतालीस", "अड़तालीस", "उनचास", "पचास",
        "इक्कावन", "बावन", "तिरेपन", "चौवन", "पचपन", "छप्पन", "सतावन", "अठावन", "उनसठ"
      ];
      return words[m] + " मिनट"; // 분 = 'मिनट(미나트)'
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
