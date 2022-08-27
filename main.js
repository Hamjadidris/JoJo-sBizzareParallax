const section1 = document.querySelector('.section1')
const star = document.querySelector('.star')
const kujo =  document.querySelector('.kujo')
const jotaro =  document.querySelector('.jotaro')
const menace = document.querySelector('.menacing')



window.addEventListener('scroll', function(){
    let value = window.scrollY
    menace.style.left = `${value}px`
    if(value<130){
    star.style.transform = `translateX(-${value}px)`
    kujo.style.transform = `translateX(${value}px)`
    jotaro.style.marginTop = value+'px'
    menace.style.marginTop = value+'px'
    menace.style.opacity=value*0.005
    star.style.opacity=value*0.009
    menace.classList.toggle('shake' , window.scrollY > 0) 
    } else{
        star.style.transform = `translateX(-130px)`
        kujo.style.transform = `translateX(130px)`
        jotaro.style.marginTop = 130+'px'
        menace.style.marginTop = 130+'px'
        star.style.opacity=value*0.009
    }

 
})


const section2 = document.querySelector('.section2')
const dio =  document.querySelector('.dio')
const zawarudo =  document.querySelector('.zawarudo')
const menace1 =  document.querySelector('.menace1')
const menace2 =  document.querySelector('.menace2')

const section2options={
    rootMargin:'0px 0px -80% 0px'
}

const section2observer = new IntersectionObserver(
    function(entries,section2observer){
        entries.forEach(entry =>{
            console.log(entry)
            if(!entry.isIntersecting){
                return
            }else{
                menace1.style.opacity = 1
                menace2.style.opacity = 1
               dio.classList.add('move')
               zawarudo.classList.add('move2')
                section2observer.unobserve
            }
        })
    },section2options
)

section2observer.observe(section2)

// window.addEventListener('scroll',function(){
 
//     if(window.scrollY>903){
//  dio.style.transform = `translateX(-${window.scrollY/903}px)`
//  zawarudo.style.transform = `translateX(${window.scrollY}px)`
//     }
// })

const text1_options = [
    "I have ‘Soft and Wet’ that exists under heaven and earth... Supple and moist they spin...",
    "You fool! Za Warudo's true power is, indeed, the power to reign over this world!",
    "Suppose that you were sitting down at a table. The napkins are in front of you, which napkin would you take? The one on your ‘left’? Or the one on your ‘right’? The one on your left side? Or the one on your right side? Usually you would take the one on your left side. That is ‘correct’ too. But in a larger sense on society, that is wrong. Perhaps I could even substitute ‘society’ with the ‘Universe’. The correct answer is that ‘It is determined by the one who takes his or her own napkin first.’ …Yes? If the first one takes the napkin to their right, then there’s no choice but for others to also take the ‘right’ napkin. The same goes for the left. Everyone else will take the napkin to their left, because they have no other option. This is ‘society’.",
    "My name is Yoshikage Kira. I'm 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married. I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone."
  ];
  const text2_options = [
    "Higashikata Jouske, Soft and Wet",
    "Dio, Za Warudo",
    "Funny Valentine, President of the United States",
    "Kira Yoshikage, Killer Queen"
  ];
  const color_options = ["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.2)"];
  const image_options = [
    "img/josuke.jpeg",
    "img/DIOicon.jpeg",
    "img/funnyValentine.jpeg",
    "img/kira.jpeg"
  ];
  var i = 0;
  const currentOptionText1 = document.getElementById("current-option-text1");
  const currentOptionText2 = document.getElementById("current-option-text2");
  const currentOptionImage = document.getElementById("image");
  const carousel = document.getElementById("carousel-wrapper");
  const mainMenu = document.getElementById("menu");
  const optionPrevious = document.getElementById("previous-option");
  const optionNext = document.getElementById("next-option");
  
  currentOptionText1.innerText = text1_options[i];
  currentOptionText2.innerText = text2_options[i];
  currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  mainMenu.style.background = color_options[i];
  
  optionNext.onclick = function () {
    i = i + 1;
    i = i % text1_options.length;
    currentOptionText1.dataset.nextText = text1_options[i];
  
    currentOptionText2.dataset.nextText = text2_options[i];
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-next");
    
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-next");
    }, 650);
  };
  
  optionPrevious.onclick = function () {
    if (i === 0) {
      i = text1_options.length;
    }
    i = i - 1;
    currentOptionText1.dataset.previousText = text1_options[i];
  
    currentOptionText2.dataset.previousText = text2_options[i];
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-previous");
  
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-previous");
    }, 650);
  };
