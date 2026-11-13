/* ========= SETTINGS ========= */
// 1) Get a free form id from https://formspree.io (submissions arrive in your email)
const FORM_URL = "https://formspree.io/f/YOUR_FORM_ID";
// 2) Put your video files in the "videos" folder and list the file names here:
const VIDEOS = [
  "videos/scene1.mp4" 
  // add more like this:  , "videos/scene2.mp4"
];

/* ========= BACKGROUND VIDEO PLAYLIST ========= */
const v = document.getElementById('bg');
let idx = Math.floor(Math.random()*VIDEOS.length);
function play(){
  v.classList.add('fade');
  setTimeout(()=>{
    v.src = VIDEOS[idx];
    v.play().catch(()=>{});
    v.classList.remove('fade');
    idx = (idx+1)%VIDEOS.length;
  },400);
}
v.addEventListener('ended',play);
v.addEventListener('error',()=>{ setTimeout(play,300) }); // skip missing file

play();

/* ========= 100 LOVE QUOTES (one per day) ========= */
const Q = [
"Real love is quiet, patient, and always stays.",
"Love isn't found, it's grown together.",
"Choose the one who chooses you every single day.",
"True love feels like coming home.",
"A gentle heart is the strongest kind of love.",
"Love is two souls agreeing to walk the same road.",
"The right person makes silence feel warm.",
"Love doesn't rush; it blooms in its own season.",
"Be with someone who treats your heart like a treasure.",
"Dignity and kindness make love beautiful.",
"Real love stays after the excitement fades.",
"Love is not a game; it is a promise.",
"The best love story is one that never stops being written.",
"Hold hands through the storm, laugh in the sunshine.",
"True love respects your dreams as its own.",
"Love is small gestures repeated for a lifetime.",
"Find someone who sees your flaws and stays anyway.",
"Love is choosing patience over pride.",
"A real bond is built on trust, not on time pass.",
"Love grows where honesty lives.",
"The heart knows who feels like peace.",
"Love is being someone's safe place.",
"Even a small flower blooms with love and care.",
"Love whispers; it never needs to shout.",
"The best relationships begin as friendship.",
"True love listens before it speaks.",
"Love is a promise written in actions.",
"Together is the best place to be.",
"Love is not perfect people, but perfect effort.",
"A loyal heart is worth more than gold.",
"Love is when someone's happiness becomes yours.",
"Stay with someone who makes you want to be better.",
"Love is the courage to be gentle.",
"Real love never makes you doubt your worth.",
"Two hearts, one quiet understanding.",
"Love is the thread that ties two lives together.",
"Wait for love that is worth waiting for.",
"Love begins with respect and ends with forever.",
"A kind word can start a lifetime of love.",
"True love stays when it's hard.",
"Love is a garden; water it every day.",
"Some people feel like a warm morning. Keep them.",
"Love means showing up, always.",
"The most beautiful thing is being truly understood.",
"Love is patient, even when the world is not.",
"Hearts that are honest find each other.",
"Love is an anchor in the middle of the sea.",
"Never settle for half a heart.",
"Love is seeing someone's soul and smiling.",
"With you, ordinary days become my favourite memories.",
"Love is a bond that time cannot break.",
"Be the reason someone believes in love again.",
"Real love doesn't hide; it stands beside you.",
"Love is a beautiful promise to protect each other.",
"Gentle love lasts longer than loud love.",
"The right hand will hold yours through everything.",
"Love is learning someone's heart by heart.",
"A soft heart can change a whole life.",
"True love is loyal in silence too.",
"Love grows when two people grow together.",
"Find someone who feels like home and sounds like peace.",
"Love is not what you say, but what you do.",
"One true love is worth a thousand fleeting crushes.",
"Treat love like a flower: with care, not force.",
"In a crowd of faces, your heart knows its person.",
"Love is calm in the chaos.",
"A promise kept is the sweetest love letter.",
"Love: two people, one team.",
"The strongest love is built on trust.",
"Love is waking up grateful for the same person.",
"Let love be your quiet strength.",
"A heart that is sincere never walks alone for long.",
"Love is giving without keeping score.",
"A true partner is your biggest cheerleader.",
"Love brings out the best version of you.",
"Love is forgiving gently and starting again.",
"The best love stories are the honest ones.",
"True love isn't loud; it's loyal.",
"Love is you and me against the world.",
"Love is the language every heart understands.",
"When love is real, effort is never a burden.",
"Love lives in the way you listen.",
"Don't search for perfect; search for sincere.",
"Love means never letting the other walk alone.",
"A caring heart is the most attractive thing.",
"Love is a slow sunrise, warm and certain.",
"Fall for someone's kindness, not just their smile.",
"The universe is kind to patient hearts.",
"Love is a bond deeper than words.",
"A true love will never make you feel small.",
"Love is simple: care, trust, and be there.",
"Real love celebrates your growth.",
"The best gift in love is time with a pure heart.",
"Love makes even waiting beautiful.",
"Some bonds are meant to last forever. Believe it.",
"Love isn't finding someone to live with; it's finding someone you can't live without.",
"Keep your heart open for the right one.",
"Love is a flower that blooms for those who are patient.",
"A faithful heart is the greatest treasure.",
"Love is being brave enough to be honest.",
"To love is to protect someone's smile.",
"May your heart find the one who stays. 🌸",
"Love is the quiet promise that you'll never face tomorrow alone.",
"A true bond is made of small, honest moments.",
"Some hearts are meant to meet at the right time, not the fast time.",
"Love is a lamp that stays lit when everything else goes dark.",
"Real love is gentle with your fears.",
"You don't need a perfect person, just a person who is perfectly sincere.",
"Love is someone remembering the little things you said.",
"When two hearts are true, distance is only a number.",
"Love is a rose that blooms for those who tend it with patience.",
"The best kind of love makes you feel free and safe at once.",
"A caring word today can become a lifetime tomorrow.",
"True love never asks you to be someone you're not.",
"Love is the courage to stay when leaving is easier.",
"The right person won't make you wait, wonder, or worry.",
"Love is a quiet river that carries two hearts home.",
"Sincere love is rare, so treat it like a treasure.",
"Love is when your silence feels understood.",
"Take your time; the heart that is meant for you will arrive.",
"Love grows deeper with every kindness shared.",
"A true partner is a friend who never leaves.",
"Love is choosing the same person on the hard days too.",
"Where there is trust, love has roots.",
"True love makes you gentler, braver, and kinder.",
"Be patient with love; the best stories unfold slowly.",
"Love is a bridge between two lonely hearts.",
"Real love doesn't compete; it completes.",
"A single sincere smile can change an entire life.",
"Love is the warmth that stays after the words fade.",
"Hold on to the one who holds on to you.",
"Love is a flower that grows even after the rain.",
"Someone who listens to your heart is rarer than gold.",
"True love is built one honest day at a time.",
"Love makes the smallest moments feel like magic.",
"The truest love is the kind you can trust in the dark.",
"Love is a gentle hand in a difficult world.",
"Meeting the right person feels like finding peace.",
"Love is when you want the best for them, even without you.",
"Let your heart be sincere and love will find you.",
"Real love is consistent, not occasional.",
"Love is not a feeling alone; it is a decision to care.",
"Two hearts that are honest can build anything.",
"A sincere heart is the most beautiful thing to find.",
"Love is the soft light that guides lost hearts.",
"You deserve a love that is calm, loyal, and kind.",
"Love turns an ordinary person into your whole world.",
"Don't chase love; grow into someone love can stay with.",
"A promise made with love is stronger than any wall.",
"Love is learning each other's silence.",
"True love hears the words you never say.",
"The best love feels like a long, warm hug.",
"Love is a seed; trust and time are the sunshine.",
"A beautiful heart attracts a beautiful bond.",
"Love is the strength to forgive and the wisdom to stay.",
"Wait for someone who values your heart as much as you do.",
"Love is being completely yourself and being loved for it.",
"A real connection needs no performance.",
"Love is two people becoming each other's favourite place.",
"Be with someone who makes your world calmer, not louder.",
"Love is keeping a promise even when no one is watching.",
"A true love story begins with sincerity.",
"Love blossoms where respect is watered daily.",
"The heart doesn't need many people, just the right one.",
"Real love is soft in words and strong in actions.",
"Love is a gentle breeze that never stops blowing.",
"Love is not owning someone; it's honouring them.",
"With the right person, silence is never lonely.",
"Love is the thread that mends a tired soul.",
"A loyal heart will always find its way back to you.",
"Love sees the person behind the smile.",
"True love doesn't disappear when life gets busy.",
"Love is a promise that grows stronger with age.",
"When you find real love, you'll feel it in your peace.",
"Love is waiting patiently without losing hope.",
"A tender heart is the greatest strength.",
"Love is the light inside two people walking together.",
"True love always chooses understanding over ego.",
"Real love is kind even when it is tired.",
"Love is the courage to open your heart again.",
"Love is not about finding time; it's about making it.",
"Treat love like a flower: gently, patiently, daily.",
"A faithful heart is the best gift you can give.",
"Love is two stories becoming one beautiful chapter.",
"The right love will feel like a quiet sunrise.",
"Love is an honest hand reaching out for yours.",
"True love respects your past and believes in your future.",
"Love is a safe harbour for a restless heart.",
"Always choose the person who chooses peace with you.",
"Love is learning to say sorry and meaning it.",
"A real bond grows stronger with every challenge.",
"Love speaks softly but stays loudly.",
"Love is when your heart feels at home in another soul.",
"Don't settle for noise; wait for a love that feels like music.",
"Love is built on promises kept, not promises made.",
"True love never needs to be proven twice.",
"Love gives your heart wings and a place to land.",
"The best relationships are made of laughter and loyalty.",
"Love is the warm hand you find in a cold world.",
"Respect is the quiet foundation of every lasting love.",
"Love is the beginning of a thousand beautiful tomorrows.",
"A sincere love story needs no audience.",
"Love shows up with kindness, not excuses.",
"Real love is patient with your growth.",
"Your heart is precious; give it to someone who protects it.",
"Love is a promise to grow old with a smile.",
"A true partner will make you feel chosen, not convenient.",
"Love is the gentle courage of being vulnerable.",
"Some people are like petals: soft, rare, and unforgettable.",
"Love is when someone's presence is your calm.",
"True love takes root in honesty and blooms in trust.",
"Love is a long journey best walked together.",
"A love that is pure will always find its way.",
"Love is not found in grand speeches but in small kindnesses.",
"The right person will make you feel safe to be soft.",
"Love is the quiet strength that holds two hearts together.",
"Faithfulness is the most beautiful language of love.",
"Love blooms in hearts that are brave enough to be honest.",
"Love is the reason ordinary mornings feel golden.",
"Be the kind of person true love would be proud to find.",
"Real love is never in a hurry to prove itself.",
"Love is choosing to care, again and again.",
"A gentle soul is a lifetime of comfort.",
"Love is the courage to say, I'm here for you.",
"When love is sincere, even waiting becomes sweet.",
"Love is trust that holds when words fail.",
"Hold your heart high; true love will meet you there.",
"Love is a lantern that lights the longest nights.",
"Love is the sweetest bond a heart can make.",
"A real relationship feels like peace and excitement together.",
"Love is the soft whisper that says, you are not alone.",
"When it is real, love is simple and steady.",
"Love is a quiet vow to stay kind.",
"True love is built on a friendship that never ends.",
"Love is remembering that your person is also human.",
"In true love, effort is mutual and gentle.",
"Love is a patient teacher and a gentle healer.",
"Let love be sincere, not hurried.",
"The most beautiful love is one that grows slowly.",
"Real love is not afraid of commitment.",
"Love is an honest heart and a steady hand.",
"You will know it's real when it feels like home.",
"A true bond forgives, learns, and grows.",
"Love makes you want to be your best self.",
"Love is a shelter built from trust and care.",
"Meet love with an open heart and honest eyes.",
"A soul that is kind will always be loved.",
"Love is simply two hearts choosing each other, daily.",
"True love comes with loyalty as its shadow.",
"Love is the flower that grows in the garden of trust.",
"Real love is patient with imperfections.",
"Love is the calm after every storm.",
"Walk beside the one who makes your heart steady.",
"A heart that loves sincerely is never truly lost.",
"Love is a story where both hearts are the heroes.",
"Cherish the one who cherishes your quiet moments.",
"Love is not blind; it sees you and stays.",
"True love is a promise renewed every morning.",
"Love is a gentle pull toward the one who feels like peace.",
"Respect, trust, and kindness: that is how love lasts.",
"When you love truly, you protect gently.",
"Love is a delicate flower that thrives on care.",
"It takes courage to love honestly; it takes love to stay.",
"Love is the best thing you can build with another heart.",
"A faithful love is a lifelong gift.",
"Love is when two people make each other feel whole.",
"Love lives in the small, steady choices.",
"Real love is a team, not a test.",
"Love gives a heart roots and wings.",
"Find someone who loves you on both your good and bad days.",
"True love is a quiet certainty, not a loud confusion.",
"Love is a sweet bond that grows with every shared smile.",
"The one who truly loves you will never make you beg for care.",
"Love is the bravest form of hope.",
"A sincere promise is the most romantic thing.",
"Love is the gentle way two souls say forever.",
"The heart is happiest when it is honest.",
"Love is warm hands, kind words, and loyal hearts.",
"Real love makes you feel chosen, not tested.",
"Love is the colour that makes life beautiful.",
"Let your love be gentle, and your loyalty be strong.",
"A pure heart will always find its pair.",
"Love is not a game of chance but a bond of choice.",
"Love is the joy of being understood without explaining.",
"The best love begins with respect and never forgets it.",
"Love is a beautiful promise whispered by the heart.",
"True love blooms with dignity, grace, and patience.",
"Love is an unbreakable thread woven with trust.",
"When love is true, time only makes it deeper.",
"Love is one heart quietly saying yes to another.",
"A kind heart and a loyal soul: that is true love.",
"Love is the place where you never have to pretend.",
"Be with the person who makes your future feel bright.",
"Love is a precious bond; handle it with care.",
"Every true love story starts with an honest hello.",
"Love is patient, love is kind, and love is worth waiting for.",
"Love is the gentle certainty that you are home.",
"A heart full of sincerity never goes unloved.",
"Real love stays soft even when the world is hard.",
"Love is a vow quietly kept, day after day.",
"With true love, every sunrise feels like a new beginning.",
"The one who loves you will make patience feel like a joy."
];
// RANDOM QUOTE ON EVERY VISIT
const randomQuote = Math.floor(Math.random() * Q.length);

document.getElementById('q').textContent =
  "“" + Q[randomQuote] + "”";

/* ========= ONE-BY-ONE QUESTIONS ========= */
const f=document.getElementById('f'), msg=document.getElementById('msg'), btn=document.getElementById('btn');
const steps=[...document.querySelectorAll('.step')];
const nextB=document.getElementById('next'), backB=document.getElementById('back');
let cur=0;
function show(i){
  cur=i;
  steps.forEach((s,k)=>s.classList.toggle('active',k===i));
  document.getElementById('fill').style.width=((i+1)/steps.length*100)+'%';
  document.getElementById('count').textContent='QUESTION '+(i+1)+' OF '+steps.length;
  backB.hidden = i===0;
  nextB.hidden = i===steps.length-1;
  btn.hidden   = i!==steps.length-1;
  msg.textContent='';
}
function valid(){
  let ok=true;
  steps[cur].querySelectorAll('input,textarea,select').forEach(el=>{
    const good = el.checkValidity() && (el.type==='checkbox'||el.value.trim()!=='');
    el.classList.toggle('bad',!good);
    if(!good) ok=false;
  });
  if(!ok) msg.textContent='Please answer this to continue 💗';
  return ok;
}
function next(){ if(valid() && cur<steps.length-1) show(cur+1); }
nextB.onclick=next;
backB.onclick=()=>show(cur-1);
f.addEventListener('keydown',e=>{
  if(e.key==='Enter' && e.target.tagName!=='TEXTAREA'){
    e.preventDefault();
    if(cur<steps.length-1) next();
  }
});
show(0);

/* ========= FORM SUBMIT (goes to your email via Formspree) ========= */
f.addEventListener('submit', async e=>{
  e.preventDefault();
  if(!valid()) return;
  btn.disabled=true; msg.textContent="Sending...";
  try{
    const r=await fetch(FORM_URL,{method:'POST',headers:{'Accept':'application/json'},body:new FormData(f)});
    if(r.ok){
      f.innerHTML='<div class="step active"><h2>Thank you 💗</h2><p class="sub">Your story has been received. Good luck on finding true love 🌸</p></div>';
    } else throw 0;
  }catch{ msg.textContent="Something went wrong. Please try again."; btn.disabled=false; }
});

// HEART CURSOR

const heart = document.getElementById('heartCursor');

document.addEventListener('mousemove', (e) => {
  heart.style.display = 'block';
  heart.style.left = e.clientX + 'px';
  heart.style.top = e.clientY + 'px';
});




