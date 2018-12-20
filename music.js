function music(){
  //create a synth and connect it to the master output (your speakers)
  // const synth = new Tone.Synth().toMaster();

  const dist = new Tone.Distortion().toMaster();
//create a synth and connect it to the effect
  const synth = new Tone.Synth().connect(dist);
  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease("C3", "32n");

  // 50/50 mix
  effect.wet.value = 0.5;
  //fade to 100% wet over 3 seconds.
  effect.wet.rampTo(1, 3);
//
// Tone.Transport.scheduleRepeat(function(time,note){
//
// })

var pattern = new Tone.Pattern(function(time, note){
  synth.triggerAttackRelease(note,0.25);
}, ["C4", "D4", "E4", "G4", "E4", "D4",]);

pattern.start(0)

Tone.Transport.bpm.value = 120;


  // seq2.start()

  $(document).keydown(function(e){
    if(e.key=="n"){
      Tone.Transport.start()
      console.log('hlo')
    }

    if(e.key=="m"){
      Tone.Transport.stop()
      console.log('h1asdlo')

    }
  })

}

music()
