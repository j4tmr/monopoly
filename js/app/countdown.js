export default class Countdown { 
	renderCountdown(ctx, number) {
		ctx.fillStyle = '#ffffff'
		ctx.font = '20px Arial'

		ctx.fillText(
			number,
			10,
			60
		)
}
}