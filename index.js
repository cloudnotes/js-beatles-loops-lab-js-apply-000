function theBeatlesPlay(musicians, instruments)
{
  var whoplayswhat = []
  for(var i = 0; i < musicians.length; i++)
  {
    var sentence = musicians[i] + " plays " + instruments[i]
    whoplayswhat.add(sentence)
  }
}
