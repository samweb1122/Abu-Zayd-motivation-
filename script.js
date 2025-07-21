 const quotes = {
  quran: [
    "Indeed, with hardship comes ease. (Qur'an 94:6)",
    "So remember Me; I will remember you. (Qur'an 2:152)",
    "Allah does not burden a soul beyond that it can bear. (Qur'an 2:286)",
    "And whoever puts his trust in Allah, then He will suffice him. (Qur'an 65:3)",
    "Verily, in the remembrance of Allah do hearts find rest. (Qur'an 13:28)",
    "And He found you lost and guided [you]. (Qur'an 93:7)",
    "And your Lord is going to give you, and you will be satisfied. (Qur'an 93:5)",
    "Say, 'Nothing will ever befall us except what Allah has destined for us.' (Qur'an 9:51)",
    "And We have certainly made the Qur’an easy for remembrance. (Qur'an 54:17)",
    "Call upon Me; I will respond to you. (Qur'an 40:60)",
    "Whoever does righteous deeds while being a believer — We will surely grant him a good life. (Qur'an 16:97)",
    "Indeed, prayer prohibits immorality and wrongdoing. (Qur'an 29:45)",
    "Guide us to the straight path. (Qur'an 1:6)",
    "O you who have believed, seek help through patience and prayer. (Qur'an 2:153)",
    "And My mercy encompasses all things. (Qur'an 7:156)",
    "And He is with you wherever you are. (Qur'an 57:4)",
    "Every soul will taste death. (Qur'an 3:185)",
    "Say, 'Indeed, my prayer, my sacrifice, my living and my dying are for Allah.' (Qur'an 6:162)",
    "And put your trust in Allah. (Qur'an 33:3)",
    "And whoever fears Allah - He will make for him a way out. (Qur'an 65:2)",
    "Indeed, your efforts are diverse. (Qur'an 92:4)",
    "And be patient, for indeed, Allah does not allow to be lost the reward of those who do good. (Qur'an 11:115)",
    "Indeed, Allah loves those who rely upon Him. (Qur'an 3:159)",
    "And Allah is the best of planners. (Qur'an 8:30)",
    "Truly, to Allah we belong and truly, to Him we shall return. (Qur'an 2:156)",
    "And be not like those who forgot Allah, so He made them forget themselves. (Qur'an 59:19)",
    "So verily, with the hardship, there is relief. (Qur'an 94:5)",
    "And We will surely test you with something of fear, hunger, and loss... (Qur'an 2:155)",
    "And rely upon the Ever-Living who does not die. (Qur'an 25:58)",
    "Indeed, Allah is with the patient. (Qur'an 2:153)",
    "And the Hereafter is better for you than the first. (Qur'an 93:4)",
    "Indeed, Allah commands justice and good conduct. (Qur'an 16:90)",
    "And speak to people good [words]. (Qur'an 2:83)",
    "Say, 'My Lord has commanded justice.' (Qur'an 7:29)",
    "Indeed, what is with Allah is best for you. (Qur'an 16:95)",
    "Indeed, the righteous will be in pleasure. (Qur'an 82:13)",
    "So be patient. Indeed, the promise of Allah is truth. (Qur'an 30:60)",
    "And remember your Lord much and exalt Him morning and afternoon. (Qur'an 3:41)",
    "And He gives you from all you ask of Him. (Qur'an 14:34)",
    "He knows what is in every heart. (Qur'an 67:13)",
    "Indeed, Allah is ever Merciful and Forgiving. (Qur'an 4:96)",
    "So whoever does an atom’s weight of good will see it. (Qur'an 99:7)",
    "Indeed, your Lord is Vast in Forgiveness. (Qur'an 53:32)",
    "And enjoin prayer upon your family and be steadfast. (Qur'an 20:132)",
    "He is the Most Merciful of the merciful. (Qur'an 7:151)",
    "Say: 'Indeed, the guidance of Allah is the only guidance.' (Qur'an 6:71)",
    "And lower your wing to the believers who follow you. (Qur'an 26:215)",
    "Indeed, Allah is with those who fear Him and those who are doers of good. (Qur'an 16:128)"
  ],

  hadith: [
    "The best among you are those who learn the Qur’an and teach it. (Bukhari)",
    "Actions are judged by intentions. (Bukhari & Muslim)",
    "None of you truly believes until he loves for his brother what he loves for himself. (Bukhari & Muslim)",
    "The strong believer is more beloved to Allah than the weak believer. (Muslim)",
    "Whoever believes in Allah and the Last Day should speak good or remain silent. (Bukhari & Muslim)",
    "Make things easy, do not make things difficult. (Bukhari)",
    "Modesty brings nothing but good. (Muslim)",
    "Allah does not look at your appearance or wealth but looks at your hearts and deeds. (Muslim)",
    "Whoever is not grateful to people is not grateful to Allah. (Abu Dawood)",
    "Visit the sick, feed the hungry, and free the captives. (Bukhari)",
    "Exchange gifts; you will love one another. (Bukhari)",
    "A good word is charity. (Bukhari)",
    "The most beloved deeds to Allah are those done regularly, even if small. (Bukhari)",
    "He who does not show mercy to others will not be shown mercy. (Bukhari & Muslim)",
    "Do not be angry. (Bukhari)",
    "The one who guides to good is like the one who does it. (Muslim)",
    "The world is a prison for the believer and a paradise for the disbeliever. (Muslim)",
    "When Allah wishes good for someone, He gives him understanding of the religion. (Bukhari)",
    "Cleanliness is half of faith. (Muslim)",
    "None of you should belittle a good deed. (Muslim)",
    "Avoid the seven destructive sins. (Bukhari)",
    "He who believes in Allah and the Last Day should not harm his neighbor. (Bukhari)",
    "A Muslim is one from whose tongue and hand other Muslims are safe. (Bukhari)",
    "Charity does not decrease wealth. (Muslim)",
    "The best of you are those best to their families. (Tirmidhi)",
    "Do not envy one another. (Muslim)",
    "Whoever relieves a believer’s distress will be relieved by Allah. (Muslim)",
    "The best people are those who are most beneficial to others. (Daraqutni)",
    "Seek knowledge from the cradle to the grave. (Bayhaqi)",
    "Paradise lies at the feet of your mother. (Nasa’i)",
    "Feed the hungry and greet those you know and those you do not. (Bukhari)",
    "Kindness is not found in anything but that it beautifies it. (Muslim)",
    "He who does not thank people has not thanked Allah. (Ahmad)",
    "Be in this world as a stranger or a traveler. (Bukhari)",
    "A true Muslim is he who avoids harming others with his tongue or hands. (Bukhari)",
    "Do not waste water, even if at a running stream. (Ibn Majah)",
    "The most perfect of believers are those best in manners. (Tirmidhi)",
    "Shall I not tell you who will be forbidden from the Fire? Every gentle, soft-hearted, and kind person. (Tirmidhi)",
    "He who conceals the faults of a Muslim, Allah will conceal his faults. (Muslim)",
    "Give glad tidings, do not drive people away. (Bukhari)",
    "It is enough falsehood for a man to speak of everything he hears. (Muslim)",
    "Beware of suspicion, for suspicion is the worst of false tales. (Bukhari)",
    "Do not laugh too much, for excessive laughter deadens the heart. (Tirmidhi)",
    "Help your brother whether he is an oppressor or oppressed. (Bukhari)",
    "Be kind, for whenever kindness is part of something, it beautifies it. (Muslim)",
    "He who repents from sin is like one who did not sin. (Ibn Majah)",
    "When one of you eats, let him eat with his right hand. (Muslim)",
    "One who cuts ties will not enter Paradise. (Muslim)",
    "He who follows a path in search of knowledge, Allah will ease his path to Paradise. (Muslim)"
  ],

  discipline: [
    "Discipline is choosing between what you want now and what you want most.",
    "Discipline is doing what needs to be done even when you don't feel like it.",
    "You will never always be motivated, so you must learn to be disciplined.",
    "Discipline is the bridge between goals and accomplishment. – Jim Rohn",
    "Without discipline, success is impossible.",
    "Discipline equals freedom. – Jocko Willink",
    "Success begins with self-discipline.",
    "Self-control is strength. Right thought is mastery. Calmness is power.",
    "Consistency and discipline are more powerful than motivation.",
    "Train your mind to obey your will.",
    "The pain of discipline is far less than the pain of regret.",
    "Discipline your thoughts, discipline your words, discipline your actions.",
    "Discipline brings stability and structure into your life.",
    "Discipline breeds success and excellence.",
    "You can't conquer the world until you conquer yourself.",
    "Start with small acts of self-control. Build discipline daily.",
    "Motivation gets you going. Discipline keeps you growing.",
    "Your level of success is determined by your level of discipline.",
    "If it doesn’t challenge you, it won’t change you.",
    "Discipline is doing it even when no one is watching.",
    "Small daily improvements lead to stunning results.",
    "The first and best victory is to conquer self.",
    "Routine, discipline, and mindset create winners.",
    "Winners embrace discipline; losers resent it.",
    "A moment of discipline now saves a lifetime of regret.",
    "Discipline makes dreams possible.",
    "Success loves structure. Discipline creates that structure.",
    "The disciplined mind is the sharpest tool for success.",
    "Discipline is staying in control when things get hard.",
    "Great things require great discipline.",
    "You can’t cheat the grind. It knows how much you’ve invested.",
    "Discipline is the soul of an army. – George Washington",
    "No discipline seems pleasant at the time, but painful. Later on, it yields a harvest.",
    "A person without self-discipline is like a city broken into and left without walls.",
    "Master yourself and you master your future.",
    "The key to success is self-discipline.",
    "The more disciplined you become, the easier life gets.",
    "Discipline is doing what others won’t so you can live how others can’t.",
    "Self-discipline is the center of all material success.",
    "Discipline leads to habits. Habits lead to consistency. Consistency leads to growth.",
    "Control your habits, or your habits will control you.",
    "Discipline is remembering what you want.",
    "To enjoy freedom, you have to control yourself.",
    "You must suffer one of two things: the pain of discipline or the pain of regret.",
    "Discipline is the ladder to achievement.",
    "Don’t wish for it. Work for it – daily and with discipline.",
    "Discipline is deciding to stick to your plan when it's not convenient.",
    "Success doesn’t happen by accident – it’s the result of discipline.",
    "Discipline is the guardrail that keeps your dream on track.",
    "A disciplined life is a meaningful life."
  ],

  success: [
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Don’t watch the clock; do what it does. Keep going.",
    "The only place where success comes before work is in the dictionary.",
    "Success doesn’t come to you. You go to it.",
    "Failure is the condiment that gives success its flavor. – Truman Capote",
    "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    "Hard work beats talent when talent doesn’t work hard.",
    "Success is no accident. It is hard work, perseverance, learning, sacrifice and love.",
    "Dream big. Start small. Act now.",
    "The road to success and the road to failure are almost exactly the same.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Success is liking yourself, liking what you do, and liking how you do it. – Maya Angelou",
    "Don't be afraid to give up the good to go for the great.",
    "I never dreamed about success. I worked for it.",
    "Success is not in what you have, but who you are.",
    "Success is the sum of small efforts repeated day in and day out.",
    "Strive not to be a success, but rather to be of value.",
    "Success comes when you refuse to give up.",
    "Opportunities don’t happen. You create them.",
    "Don’t wait for opportunity. Create it.",
    "Success is how high you bounce when you hit bottom.",
    "Work hard in silence, let success make the noise.",
    "Success begins at the end of your comfort zone.",
    "Success is earned, not given.",
    "Success is 1% inspiration and 99% perspiration.",
    "Chase your dreams, not people.",
    "Your success will be determined by your own confidence and fortitude.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Stay positive, work hard, make it happen.",
    "Start where you are. Use what you have. Do what you can.",
    "Discipline is the foundation of all success.",
    "Behind every successful person is a lot of unsuccessful years.",
    "Success is when your signature becomes an autograph.",
    "The secret of success is consistency of purpose. – Benjamin Disraeli",
    "There’s no elevator to success — you have to take the stairs.",
    "Success is a journey, not a destination.",
    "Fall seven times, stand up eight.",
    "Success doesn’t come easy, but it’s worth it.",
    "Success requires substitution — giving up something less important for something greater.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Success is born of struggle.",
    "The only limit to your success is your mind.",
    "Success comes to those who act, not those who wait.",
    "To be successful, focus on your goals, not your obstacles.",
    "Never let success get to your head or failure to your heart.",
    "Success is simply doing ordinary things extraordinarily well.",
    "Big goals require big discipline.",
    "Success is a product of patience, persistence, and perspiration.",
    "Aim for progress, not perfection — that’s success."
  ],

  general: [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "Every day may not be good, but there’s something good in every day.",
    "Your life does not get better by chance, it gets better by change. – Jim Rohn",
    "Be yourself; everyone else is already taken. – Oscar Wilde",
    "Do something today that your future self will thank you for.",
    "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
    "Great things never come from comfort zones.",
    "You are capable of amazing things.",
    "Push yourself, because no one else is going to do it for you.",
    "It always seems impossible until it is done. – Nelson Mandela",
    "The best way to predict the future is to create it. – Peter Drucker",
    "Small steps every day lead to big results.",
    "If you want to fly, give up everything that weighs you down.",
    "Stop doubting yourself. Work hard, and make it happen.",
    "Don’t stop until you’re proud.",
    "Sometimes later becomes never. Do it now.",
    "You are never too old to set a new goal or to dream a new dream.",
    "Do not wait for the perfect moment. Take the moment and make it perfect.",
    "Believe in yourself and all that you are.",
    "Success is the result of preparation, hard work, and learning from failure.",
    "The secret of getting ahead is getting started. – Mark Twain",
    "Work hard, stay humble.",
    "The best time to start was yesterday. The next best time is now.",
    "Doubt kills more dreams than failure ever will.",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "Don’t be afraid to fail. Be afraid not to try.",
    "Be stronger than your excuses.",
    "Don’t quit. Suffer now and live the rest of your life as a champion. – Muhammad Ali",
    "Stay focused and never give up.",
    "Sometimes the smallest step in the right direction ends up being the biggest step of your life.",
    "Difficult roads often lead to beautiful destinations.",
    "One day or day one — you decide.",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Don’t be busy, be productive.",
    "You don’t need to have it all figured out to move forward.",
    "Progress, not perfection.",
    "Growth is painful. Change is painful. But nothing is as painful as staying stuck somewhere you don't belong.",
    "Never let the fear of striking out keep you from playing the game. – Babe Ruth",
    "What you do today can improve all your tomorrows.",
    "Action is the foundational key to all success. – Pablo Picasso",
    "A winner is a dreamer who never gives up. – Nelson Mandela",
    "Don’t limit your challenges. Challenge your limits.",
    "Be the energy you want to attract.",
    "Mistakes are proof that you are trying.",
    "You don’t always get what you wish for — you get what you work for.",
    "The comeback is always stronger than the setback.",
    "Be brave. Take risks. Nothing can substitute experience. – Paulo Coelho",
    "Your only limit is your mind.",
    "Be patient. Good things take time."
  ]
};


// Generate a quote based on selected category
function generateQuote() {
  const category = document.getElementById('categorySelect').value;
  const quoteArray = quotes[category];
  const randomIndex = Math.floor(Math.random() * quoteArray.length);
  document.getElementById('quoteDisplay').textContent = quoteArray[randomIndex];
}

// Save and greet user
function saveUserName() {
  const userName = document.getElementById('userName').value.trim();
  if (userName) {
    localStorage.setItem('abuZaydUser', userName);
    greetUser();
  }
}

function greetUser() {
  const storedName = localStorage.getItem('abuZaydUser');
  const greeting = document.getElementById('greeting');
  if (storedName) {
    greeting.textContent = `Welcome back, ${storedName}! 👋`;
  } else {
    greeting.textContent = "";
  }
}

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

// Time display
function updateCurrentTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById('currentTime').textContent = `🕰️ Current Time: ${timeString}`;
}

// Salah time placeholder
function updateSalahTimes() {
  // You can later fetch real data from an API
  document.getElementById('salahTimes').textContent = "Fajr: 5:30AM, Dhuhr: 12:45PM, Asr: 4:15PM, Maghrib: 7:05PM, Isha: 8:20PM";
}


// Share quote to WhatsApp with fallback to clipboard
function shareQuote() {
  const quote = document.getElementById('quoteDisplay').textContent;
  
  const brandedMessage = `🌟 *Abu Zayd Motivator* says:\n\n"${quote}"\n\n📌 Follow us for more motivation! #AbuZaydQuotes`;
  const encodedMessage = encodeURIComponent(brandedMessage);
  const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

  // Try opening WhatsApp share link
  const newWindow = window.open(whatsappUrl, '_blank');

  // If popup was blocked or failed
  if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
    // Fallback to clipboard copy
    navigator.clipboard.writeText(brandedMessage)
      .then(() => alert("Quote copied to clipboard! Open WhatsApp and paste it manually."))
      .catch(() => alert("Unable to copy. Please copy manually."));
  }
}




// Share quote to WhatsApp with Abu Zayd branding
function shareQuote() {
  const quote = document.getElementById('quoteDisplay').textContent;

  // Prepare branded quote message
  const brandedMessage = `🌟 *Abu Zayd Motivator* says:\n\n"${quote}"\n\n📌 Follow for more motivation. #AbuZaydQuotes`;
  const encodedMessage = encodeURIComponent(brandedMessage);
  const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

  // Attempt to open WhatsApp
  const newWindow = window.open(whatsappUrl, '_blank');

  // Fallback if WhatsApp window fails
  if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
    navigator.clipboard.writeText(brandedMessage)
      .then(() => alert("Quote copied! Open WhatsApp and paste it manually."))
      .catch(() => alert("Copy failed. Please copy manually."));
  }
}

// Initial setup on page load
window.onload = function () {
  greetUser();
  generateQuote();
  updateCurrentTime();
  updateSalahTimes();
  setInterval(updateCurrentTime, 1000); // Update time every second
};

const asmaulHusna = [
  { arabic: "ٱلرَّحْمَـٰنُ", english: "Ar-Rahman (The Most Compassionate)", audio: "audio/001.mp3" },
  { arabic: "ٱلرَّحِيمُ", english: "Ar-Raheem (The Most Merciful)", audio: "audio/002.mp3" },
  { arabic: "ٱلْمَلِكُ", english: "Al-Malik (The King and Owner of Dominion)", audio: "audio/003.mp3" },
  { arabic: "ٱلْقُدُّوسُ", english: "Al-Quddus (The Absolutely Pure)", audio: "audio/004.mp3" },
  { arabic: "ٱلسَّلَامُ", english: "As-Salaam (The Source of Peace, Safety)", audio: "audio/005.mp3" },
  { arabic: "ٱلْمُؤْمِنُ", english: "Al-Mu’min (The One Who gives Emaan and Security)", audio: "audio/006.mp3" },
  { arabic: "ٱلْمُهَيْمِنُ", english: "Al-Muhaymin (The Guardian, The Witness)", audio: "audio/007.mp3" },
  { arabic: "ٱلْعَزِيزُ", english: "Al-Aziz (The Almighty)", audio: "audio/008.mp3" },
  { arabic: "ٱلْجَبَّارُ", english: "Al-Jabbar (The Compeller, Restorer)", audio: "audio/009.mp3" },
  { arabic: "ٱلْمُتَكَبِّرُ", english: "Al-Mutakabbir (The Supreme, The Majestic)", audio: "audio/010.mp3" },
  { arabic: "ٱلْخَالِقُ", english: "Al-Khaaliq (The Creator, The Maker)", audio: "audio/011.mp3" },
  { arabic: "ٱلْبَارِئُ", english: "Al-Baari (The Evolver)", audio: "audio/012.mp3" },
  { arabic: "ٱلْمُصَوِّرُ", english: "Al-Musawwir (The Fashioner)", audio: "audio/013.mp3" },
  { arabic: "ٱلْغَفَّارُ", english: "Al-Ghaffaar (The Constant Forgiver)", audio: "audio/014.mp3" },
  { arabic: "ٱلْقَهَّارُ", english: "Al-Qahhaar (The All-Subduer)", audio: "audio/015.mp3" },
  { arabic: "ٱلْوَهَّابُ", english: "Al-Wahhaab (The Supreme Bestower)", audio: "audio/016.mp3" },
  { arabic: "ٱلرَّزَّاقُ", english: "Ar-Razzaaq (The Provider)", audio: "audio/017.mp3" },
  { arabic: "ٱلْفَتَّاحُ", english: "Al-Fattah (The Supreme Opener)", audio: "audio/018.mp3" },
  { arabic: "ٱلْعَلِيمُ", english: "Al-‘Aleem (The All-Knowing)", audio: "audio/019.mp3" },
  { arabic: "ٱلْقَابِضُ", english: "Al-Qaabid (The Withholder)", audio: "audio/020.mp3" },
  { arabic: "ٱلْبَاسِطُ", english: "Al-Baasit (The Extender)", audio: "audio/021.mp3" },
  { arabic: "ٱلْخَافِضُ", english: "Al-Khaafid (The Reducer)", audio: "audio/022.mp3" },
  { arabic: "ٱلرَّافِعُ", english: "Ar-Raafi’ (The Exalter)", audio: "audio/023.mp3" },
  { arabic: "ٱلْمُعِزُّ", english: "Al-Mu’izz (The Honourer)", audio: "audio/024.mp3" },
  { arabic: "ٱلْمُذِلُّ", english: "Al-Mudhill (The Dishonourer)", audio: "audio/025.mp3" },
  { arabic: "ٱلسَّمِيعُ", english: "As-Samee’ (The All-Hearing)", audio: "audio/026.mp3" },
  { arabic: "ٱلْبَصِيرُ", english: "Al-Baseer (The All-Seeing)", audio: "audio/027.mp3" },
  { arabic: "ٱلْحَكَمُ", english: "Al-Hakam (The Impartial Judge)", audio: "audio/028.mp3" },
  { arabic: "ٱلْعَدْلُ", english: "Al-‘Adl (The Utterly Just)", audio: "audio/029.mp3" },
  { arabic: "ٱلْلَّطِيفُ", english: "Al-Lateef (The Subtle One, The Most Gentle)", audio: "audio/030.mp3" },
  { arabic: "ٱلْخَبِيرُ", english: "Al-Khabeer (The All-Aware)", audio: "audio/031.mp3" },
  { arabic: "ٱلْحَلِيمُ", english: "Al-Haleem (The Most Forbearing)", audio: "audio/032.mp3" },
  { arabic: "ٱلْعَظِيمُ", english: "Al-‘Azeem (The Magnificent, The Infinite)", audio: "audio/033.mp3" },
  { arabic: "ٱلْغَفُور", english: "Al-Ghafoor (The Great Forgiver)", audio: "audio/034.mp3" },
  { arabic: "ٱلشَّكُورُ", english: "Ash-Shakoor (The Most Appreciative)", audio: "audio/035.mp3" },
  { arabic: "ٱلْعَلِيُّ", english: "Al-‘Aliyy (The Most High, The Exalted)", audio: "audio/036.mp3" },
  { arabic: "ٱلْكَبِيرُ", english: "Al-Kabeer (The Most Great)", audio: "audio/037.mp3" },
  { arabic: "ٱلْحَفِيظُ", english: "Al-Hafeedh (The Preserver)", audio: "audio/038.mp3" },
  { arabic: "ٱلْمُقِيت", english: "Al-Muqeet (The Sustainer)", audio: "audio/039.mp3" },
  { arabic: "ٱلْحسِيبُ", english: "Al-Haseeb (The Reckoner)", audio: "audio/040.mp3" },
  { arabic: "ٱلْجَلِيلُ", english: "Al-Jaleel (The Majestic)", audio: "audio/041.mp3" },
  { arabic: "ٱلْكَرِيمُ", english: "Al-Kareem (The Most Generous, the Most Esteemed)", audio: "audio/042.mp3" },
  { arabic: "ٱلرَّقِيبُ", english: "Ar-Raqeeb (The Watchful)", audio: "audio/043.mp3" },
  { arabic: "ٱلْمُجِيبُ", english: "Al-Mujeeb (The Responsive One)", audio: "audio/044.mp3" },
  { arabic: "ٱلْوَاسِعُ", english: "Al-Waasi’ (The All-Encompassing, the Boundless)", audio: "audio/045.mp3" },
  { arabic: "ٱلْحَكِيمُ", english: "Al-Hakeem (The All-Wise)", audio: "audio/046.mp3" },
  { arabic: "ٱلْوَدُودُ", english: "Al-Wadud (The Most Loving)", audio: "audio/047.mp3" },
  { arabic: "ٱلْمَجِيدُ", english: "Al-Majeed (The Glorious, the Most Honorable)", audio: "audio/048.mp3" },
  { arabic: "ٱلْبَاعِثُ", english: "Al-Ba’ith (The Infuser of New Life)", audio: "audio/049.mp3" },
  { arabic: "ٱلشَّهِيدُ", english: "Ash-Shaheed (The All-and-Ever Witnessing)", audio: "audio/050.mp3" },
  { arabic: "ٱلْحَقُ", english: "Al-Haqq (The Absolute Truth)", audio: "audio/051.mp3" },
  { arabic: "ٱلْوَكِيلُ", english: "Al-Wakeel (The Trustee, the Disposer of Affairs)", audio: "audio/052.mp3" },
  { arabic: "ٱلْقَوِيُ", english: "Al-Qawiyy (The All-Strong)", audio: "audio/053.mp3" },
  { arabic: "ٱلْمَتِينُ", english: "Al-Mateen (The Firm One)", audio: "audio/054.mp3" },
  { arabic: "ٱلْوَلِيُّ", english: "Al-Waliyy (The Sole Provider)", audio: "audio/055.mp3" },
  { arabic: "ٱلْحَمِيدُ", english: "Al-Hameed (The Praiseworthy)", audio: "audio/056.mp3" },
  { arabic: "ٱلْمُحْصِي", english: "Al-Muhsi (The All-Enumerating, the Counter)", audio: "audio/057.mp3" },
  { arabic: "ٱلْمُبْدِئُ", english: "Al-Mubdi (The Originator, the Initiator)", audio: "audio/058.mp3" },
  { arabic: "ٱلْمُعِيدُ", english: "Al-Mueed (The Restorer, the Reinstater)", audio: "audio/059.mp3" },
  { arabic: "ٱلْمُحْيِي", english: "Al-Muhyi (The Giver of Life)", audio: "audio/060.mp3" },
  { arabic: "ٱلْمُمِيتُ", english: "Al-Mumeet (The Creator of Death)", audio: "audio/061.mp3" },
  { arabic: "ٱلْحَيُّ", english: "Al-Hayy (The Ever-Living)", audio: "audio/062.mp3" },
  { arabic: "ٱلْقَيُّومُ", english: "Al-Qayyoom (The Sustainer, The Self-Subsisting)", audio: "audio/063.mp3" },
  { arabic: "ٱلْوَاجِدُ", english: "Al-Waajid (The Perceiver)", audio: "audio/064.mp3" },
  { arabic: "ٱلْمَاجِدُ", english: "Al-Maajid (The Glorious, the Most Honorable)", audio: "audio/065.mp3" },
  { arabic: "ٱلْواحِدُ", english: "Al-Waahid (The Only One)", audio: "audio/066.mp3" },
  { arabic: "ٱلصَّمَدُ", english: "As-Samad (The Self-Sufficient, The Impregnable)", audio: "audio/067.mp3" },
  { arabic: "ٱلْقَادِرُ", english: "Al-Qaadir (The Omnipotent)", audio: "audio/068.mp3" },
  { arabic: "ٱلْمُقْتَدِرُ", english: "Al-Muqtadir (The Creator of All Power)", audio: "audio/069.mp3" },
  { arabic: "ٱلْمُقَدِّمُ", english: "Al-Muqaddim (The Expediter)", audio: "audio/070.mp3" },
  { arabic: "ٱلْمُؤَخِّرُ", english: "Al-Mu’akhkhir (The Delayer)", audio: "audio/071.mp3" },
  { arabic: "ٱلأوَّلُ", english: "Al-Awwal (The First)", audio: "audio/072.mp3" },
  { arabic: "ٱلآخِرُ", english: "Al-Akhir (The Last)", audio: "audio/073.mp3" },
  { arabic: "ٱلظَّاهِرُ", english: "Az-Zaahir (The Manifest)", audio: "audio/074.mp3" },
  { arabic: "ٱلْبَاطِنُ", english: "Al-Baatin (The Hidden One, Knower of the Hidden)", audio: "audio/075.mp3" },
  { arabic: "ٱلْوَالِي", english: "Al-Waali (The Sole Governor)", audio: "audio/076.mp3" },
  { arabic: "ٱلْمُتَعَالِي", english: "Al-Muta’ali (The Self Exalted)", audio: "audio/077.mp3" },
  { arabic: "ٱلْبَرُّ", english: "Al-Barr (The Source of All Goodness)", audio: "audio/078.mp3" },
  { arabic: "ٱلتَّوَابُ", english: "At-Tawwaab (The Ever-Accepter of Repentance)", audio: "audio/079.mp3" },
  { arabic: "ٱلْمُنْتَقِمُ", english: "Al-Muntaqim (The Avenger)", audio: "audio/080.mp3" },
  { arabic: "ٱلْعَفُوُ", english: "Al-‘Afuww (The Supreme Pardoner)", audio: "audio/081.mp3" },
  { arabic: "ٱلرَّؤُفُ", english: "Ar-Ra’oof (The Most Kind)", audio: "audio/082.mp3" },
  { arabic: "مَالِكُ ٱلْمُلْكُ", english: "Maalik-al-Mulk (Master and King of the Kingdom)", audio: "audio/083.mp3" },
  { arabic: "ذُوالْجَلاَلِ وَالإكْرَامِ", english: "Dhul-Jalaali Wal-Ikraam (Lord of Glory and Honour)", audio: "audio/084.mp3" },
  { arabic: "ٱلْمُقْسِطُ", english: "Al-Muqsit (The Just One)", audio: "audio/085.mp3" },
  { arabic: "ٱلْجَامِعُ", english: "Al-Jaami’ (The Gatherer, the Uniter)", audio: "audio/086.mp3" },
  { arabic: "ٱلْغَنيُّ", english: "Al-Ghaniyy (The Self-Sufficient, the Wealthy)", audio: "audio/087.mp3" },
  { arabic: "ٱلْمُغْنِيُّ", english: "Al-Mughni (The Enricher)", audio: "audio/088.mp3" },
  { arabic: "ٱلْمَانِعُ", english: "Al-Maani’ (The Withholder)", audio: "audio/089.mp3" },
  { arabic: "ٱلضَّارَ", english: "Ad-Daarr (The Distresser)", audio: "audio/090.mp3" },
  { arabic: "ٱلنَّافِعُ", english: "An-Naafi’ (The Propitious, the Benefactor)", audio: "audio/091.mp3" },
  { arabic: "ٱلنُّورُ", english: "An-Noor (The Light, The Illuminator)", audio: "audio/092.mp3" },
  { arabic: "ٱلْهَادِي", english: "Al-Haadi (The Guide)", audio: "audio/093.mp3" },
  { arabic: "ٱلْبَدِيعُ", english: "Al-Badee’ (The Incomparable Originator)", audio: "audio/094.mp3" },
  { arabic: "ٱلْبَاقِي", english: "Al-Baaqi (The Everlasting)", audio: "audio/095.mp3" },
  { arabic: "ٱلْوَارِثُ", english: "Al-Waarith (The Inheritor, The Heir)", audio: "audio/096.mp3" },
  { arabic: "ٱلرَّشِيدُ", english: "Ar-Rasheed (The Guide, Infallible Teacher)", audio: "audio/097.mp3" },
  { arabic: "ٱلصَّبُورُ", english: "As-Saboor (The Forbearing, The Patient)", audio: "audio/098.mp3" }
];

// Populate select box
window.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('asmaulHusna');
  asmaulHusna.forEach((name, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `${name.arabic} - ${name.english}`;
    select.appendChild(option);
  });

  select.addEventListener('change', () => {
    const audio = document.getElementById('asmaulAudio');
    const selectedIndex = select.value;
    if (asmaulHusna[selectedIndex]) {
      audio.src = asmaulHusna[selectedIndex].audio;
      audio.play();
    }
  });
});
