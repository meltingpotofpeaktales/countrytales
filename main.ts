function gameStartSound () {
    music.play(music.createSoundEffect(WaveShape.Noise, 1813, 1110, 255, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.createSoundEffect(WaveShape.Noise, 1110, 1374, 255, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.createSoundEffect(WaveShape.Noise, 1813, 5000, 255, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.createSoundEffect(WaveShape.Noise, 5000, 2120, 255, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
}
gameStartSound()
