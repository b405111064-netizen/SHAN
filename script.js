const i18n = {
  'zh':{
    name: 'YUSHAN',
    tagline: '那個帶著創造力和生命力北漂的台南女孩！',
    interest1: '排球', interest2: '實驗研究', interest3: '設計思維',
    contact: '聯絡我', about: '關於我',
    aboutTitle: '關於我', item1: '北醫學生、牙體系', item2: '北漂經歷', item3: '正在進行成分相關的專題實驗', item4: '喜歡打排球、團隊協作', item5: '豐富的創造力與細膩感受力',
    contactTitle: '聯絡我', email: '電子郵件: B405111064@TMU.EDU.TW',
    eduTitle: '教育', eduLoc: '地點：台北醫學大學，旁邊就信義百貨區，抬頭就是101，操場就是跨年看煙火的最佳選擇。', eduDesc: '就讀：北醫（牙體系）。在牙體系的臨床與研究環境中培養對細節的敏銳觀察與手作能力。',
    researchTitle: '研究 / 專題', researchDesc: '目前專注：成分相關的專題實驗，透過分析與實驗設計研究材料特性與生物相容性。', researchSkills: '技能：實驗設計、資料整理、基本分子/化學分析概念。',
    lifeTitle: '興趣與生活', lifeP1: '排球愛好者：定期參與校內及社區比賽，喜歡團隊合作與挑戰自我。', lifeP2: '創作：喜歡在空閒時間做手作與小設計專案，將創造力用於生活美學。', socialManage: '社群經營：透過記錄生活大小事，利用自己善於觀察周遭的細膩觀察力，將記錄變成最好的生活夥伴。',
    cameraTitle: '記錄生活的鏡頭', cameraDesc: '社群經營：透過記錄生活大小事，利用自己善於觀察周遭的細膩觀察力，將記錄變成最好的生活夥伴。',
    skillTitle: '小小技能', skillDesc1: '拉花：將創作融入每一杯咖啡，也是一種自我療癒的過程。', skillDesc2: '跳舞：舞出新自我，每一瞬間都不同。', skillDesc3: '唱歌：用聲音傳遞情感，讓生活充滿節奏與溫度。'
  },
  'en':{
    name: 'YUSHAN',
    tagline: 'A creative, vibrant girl from Tainan who moved to Taipei!',
    interest1: 'Volleyball', interest2: 'Research', interest3: 'Design Thinking',
    contact: 'Contact', about: 'About',
    aboutTitle: 'About Me', item1: 'Student at Taipei Medical University (Dentistry)', item2: 'Moved to Taipei for work/study', item3: 'Working on ingredient-related experiments', item4: 'Enjoys volleyball and teamwork', item5: 'Creative with delicate sensibilities',
    contactTitle: 'Contact', email: 'Email: B405111064@TMU.EDU.TW',
    eduTitle: 'Education', eduLoc: 'At Taipei Medical University, beside the Xinyi department store district, right under Taipei 101 — the campus field is the best spot to watch New Year’s fireworks.', eduDesc: 'Studying at Taipei Medical University (Dentistry). Developing precision and hands-on skills in clinical and research settings.',
    researchTitle: 'Research / Projects', researchDesc: 'Focused on ingredient-related experimental projects, analyzing material properties and biocompatibility.', researchSkills: 'Skills: experimental design, data handling, basic molecular/chemical analysis concepts.',
    lifeTitle: 'Interests & Life', lifeP1: 'Volleyball enthusiast: regularly participates in campus and community matches, enjoys teamwork and challenges.', lifeP2: 'Creative projects: enjoys crafts and small design projects in spare time.', socialManage: 'Social media: documenting daily life with delicate observation and turning memories into your best lifestyle companion.',
    cameraTitle: 'Life through the lens', cameraDesc: 'Social media: documenting daily life with delicate observation and turning memories into your best lifestyle companion.',
    skillTitle: 'Little skills', skillDesc1: 'Latte art: blends creativity into every cup and becomes a soothing ritual.', skillDesc2: 'Dancing: move into a new self, with every moment feeling fresh.', skillDesc3: 'Singing: conveying emotion through voice, filling life with rhythm and warmth.'
  }
}

function setLanguage(lang){
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
  });
  localStorage.setItem('site-lang', lang);
  document.querySelectorAll('.lang').forEach(btn=>btn.classList.toggle('active', btn.id===('btn-'+(lang==='zh'?'zh':'en'))));
}

function initLang(){
  const saved = localStorage.getItem('site-lang') || 'zh';
  setLanguage(saved);
}

function toggleTheme(){
  const html = document.documentElement;
  const isLight = html.classList.toggle('light');
  localStorage.setItem('site-theme', isLight? 'light':'dark');
  document.getElementById('themeToggle').textContent = isLight? '🌤️':'🌙';
}

function initTheme(){
  const saved = localStorage.getItem('site-theme');
  if(saved==='light') document.documentElement.classList.add('light');
  document.getElementById('themeToggle').textContent = document.documentElement.classList.contains('light')? '🌤️':'🌙';
}

document.addEventListener('DOMContentLoaded', ()=>{
  // init controls
  initLang(); initTheme();
  document.getElementById('btn-zh').addEventListener('click', ()=>setLanguage('zh'));
  document.getElementById('btn-en').addEventListener('click', ()=>setLanguage('en'));
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  // GSAP entrance
  gsap.from('.hero-left h1',{y:30,opacity:0,duration:0.8,ease:'power3.out'});
  gsap.from('.tagline',{y:18,opacity:0,duration:0.8,delay:0.15});
  gsap.from('.chip',{y:12,opacity:0,duration:0.6,stagger:0.08,delay:0.3});
  gsap.from('.device',{scale:0.95,opacity:0,duration:0.8,delay:0.4,ease:'elastic.out(1,0.6)'});

  // subtle floating animation for decoration
  // animate small icons in sections
  gsap.to('.section-title .icon',{y:-8,duration:2,repeat:-1,yoyo:true,ease:'sine.inOut'});

  // animate cute animals
  gsap.utils.toArray('.cute').forEach((el,i)=>{
    gsap.fromTo(el, {y:0,rotation:0},{y:-10,rotation:6,duration:2+Math.random()*1.2,repeat:-1,yoyo:true,ease:'sine.inOut',delay:i*0.15});
  });

  // tooth drill carving animation
  const drill = document.getElementById('drill');
  const carve = document.getElementById('carve');
  const outline = document.getElementById('tooth-shape');
  if(drill){
    gsap.to(drill,{rotation:0,duration:0.18,yoyo:true,repeat:-1,ease:'power2.inOut'});
  }
  if(outline){
    const len = outline.getTotalLength ? outline.getTotalLength() : 220;
    outline.style.strokeDasharray = len;
    outline.style.strokeDashoffset = len;
    gsap.to(outline, {strokeDashoffset:0,duration:2.2,repeat:-1,yoyo:true,ease:'sine.inOut',delay:0.2});
  }
  if(carve){
    const path = carve;
    const len2 = path.getTotalLength ? path.getTotalLength() : 60;
    path.style.strokeDasharray = len2;
    path.style.strokeDashoffset = len2;
    gsap.to(path, {strokeDashoffset:0,duration:1.8,repeat:-1,yoyo:true,ease:'sine.inOut',delay:0.6});
  }

  // sparkle pulsing inside screen
  gsap.to('.sparkles', {opacity:0.3, duration:1.6, yoyo:true, repeat:-1, ease:'sine.inOut'});

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const target = a.getAttribute('href');
      if(target.length>1 && document.querySelector(target)){
        e.preventDefault();
        document.querySelector(target).scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // scroll-trigger reveal for detail sections
  if(window.gsap && window.ScrollTrigger){
    gsap.utils.toArray('.detail-section, .contact').forEach(el=>{
      gsap.from(el,{y:20,opacity:0,duration:0.8,scrollTrigger:{trigger:el, start:'top 85%'}});
    });
  }
});
