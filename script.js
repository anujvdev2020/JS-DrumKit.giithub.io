window.addEventListener('keydown',function(e){
		const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
		const key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
		if(!audio){
			return;///stop the function from runnnig
		}
		audio.currentTime=0;///rewind to start
		audio.play();
		key.classList.add('playing')
		console.log(key)
	})


window.addEventListener('click',function(e){
		const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
		const key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
		if(!audio){
			return;///stop the function from runnnig
		}
		audio.currentTime=0;///rewind to start
		audio.play();
		key.classList.add('playing')
		console.log(key)
	})
