window.addEventListener('scroll',function(){
	const header = document.querySelector('header');
	header.classList.toggle("sticky", window.scrollY > 0);
});

window.onload = function() 
{
  lifeCount("Mar 27, 2002 1:36:29", 'lifetime');
};
function lifeCount(lifeStart, id) 
{
  lifeStart = new Date(lifeStart).getTime();
  var Today = new Date(),
      lifeStart = new Date(lifeStart),
      Diff = (Today - lifeStart);
    
  var secondDay = 60 * 60 * 1000 * 24,
      secondHour = 60 * 60 * 1000;
    
  days = Math.floor(Diff / (secondDay) * 1);
  years = Math.floor(days / 365);
  if (years > 1){ days = days - (years * 365) }
  hours = Math.floor((Diff % (secondDay)) / (secondHour) * 1);
  mins = Math.floor(((Diff % (secondDay)) % (secondHour)) / (60 * 1000) * 1);
  secs = Math.floor((((Diff % (secondDay)) % (secondHour)) % (60 * 1000)) / 1000 * 1);

  var idEl = document.getElementById(id);
  idEl.getElementsByClassName('Tahun')[0].innerHTML = years;
  idEl.getElementsByClassName('Hari')[0].innerHTML = days;
  idEl.getElementsByClassName('Jam')[0].innerHTML = hours;
  idEl.getElementsByClassName('Menit')[0].innerHTML = mins;
  idEl.getElementsByClassName('Detik')[0].innerHTML = secs;

  clearTimeout(lifeCount.interval);
  lifeCount.interval = setTimeout(function(){ lifeCount(lifeStart, id); }, 1000);
}